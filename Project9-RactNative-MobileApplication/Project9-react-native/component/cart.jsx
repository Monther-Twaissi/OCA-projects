import React, { useState , useEffect } from "react" ;
import { View , ScrollView , Text , Image, TouchableNativeFeedback , Alert , Modal , StyleSheet} from "react-native";
import { normalize } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";
import { TextInput } from "react-native";



var nav ;

function ProductCard(props) {
    
    return <View style={{alignItems:'center'}} >
        <View style={{backgroundColor:props.dark? '#16212b' : 'white', flexDirection: 'row', width: '95%'  , marginVertical:10 , paddingVertical:10 , borderRadius:15}}>


        <Image style={{ width: 85, height: '100%', marginHorizontal: 15, borderRadius: 5 }} source={{ uri: `http://86.108.1.225:8080/${props.obj.productImage}` }} />
        <View  >

            <Text style={{ fontWeight: 'bold' ,color:props.dark? 'white' : 'black'}} >
                {props.obj.productName}
    </Text>


            <Text style={{ fontSize: 12, color: 'gray' , color:props.dark? 'white' : 'black'}} >
            {props.obj.productDescription}
    </Text>
            <Text style={{fontFamily: 'Redressed-Regular' , fontSize:13,color:props.dark? 'white' : 'black'}}>
                ⭐ Very Good
    </Text>
            <Text style={{fontFamily: 'Redressed-Regular' , fontSize:13,color:props.dark? 'white' : 'black'}}>
                Price : {props.obj.productPrice} JOD  
                
                
    </Text>
            <View style={{ flexDirection: 'row' , alignItems:'center', justifyContent:'space-between' }}>
                <Icon style={{fontSize:12 , marginRight:15,color:props.dark? 'white' : 'black' }}  name="motorcycle">  Free Delivery 
                </Icon>
                <Text style={{color:'#f68121'  , fontWeight:'bold' , fontSize:12 , marginRight:5 }}>

                     X {props.obj.qty}
        </Text>

               
            </View>
        </View>
        </View>
    </View>

}


export default function Cart(props){
    nav = props.navigation
const [product , setProduct]= useState([])
const [user , setUser]= useState({})
const [city , setcity]= useState('')
const [area , setarea]= useState('')
const [stret , setstret]= useState('')
const [building , setbuilding]= useState('')
const [modalVisible, setModalVisible] = useState(false);
let counter = 0
let products = product.map((i , index)=> {

    counter += i.totalPrice
    return <ProductCard  {...props} key={index} obj={i} /> ;

} )

useEffect(() => {
    AsyncStorage.getItem('user').then(res=> {
        
        setProduct(JSON.parse(res).cart)
        setUser(JSON.parse(res))
        
      })
}, [])

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 15,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      paddingVertical:20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    
    
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  

  function cheeckout(){
    var data = {
        order:{
            products : product ,
            totalPrice:counter , 
            address:user.address
            
        }
    }
    
    axios.post(`http://86.108.1.225/api/users/order/${user._id}` , data).then(res=>{
    props.setorders(res.data.orders)
    res.data.cart =[] ;
    res.data.address=user.address  ;
   
    
    AsyncStorage.setItem('user', JSON.stringify(res.data)).then(()=>{
        
        Alert.alert(
            "success",
            "Order Success",
            [
                
                { text: "Back to home", onPress: () =>  props.navigation.navigate('Home')}
            ]
            )
            
            
            
        });
    })
    
  }



    return(<View style={{width:'100%' , height:'100%' , alignItems:'center'}}>
        <View style={{height:"100%" , width:"100%" , backgroundColor: props.dark ?'black': '#e6e6e6' , position:'absolute'}} />
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text  style={styles.modalText}>Enter Your Address First</Text>
            <TextInput 
            style={{borderWidth:1 ,width:150 , paddingHorizontal:5 , marginVertical:5, borderRadius:5}}
            placeholder="City" 
            value={city}
            onChangeText={setcity}

            />
                 <TextInput 
            style={{borderWidth:1 ,width:150 , paddingHorizontal:5 , marginVertical:5, borderRadius:5}}
            placeholder="Area" 
            value={area}
            onChangeText={setarea}

            />
                  <TextInput 
            style={{borderWidth:1 ,width:150 , paddingHorizontal:5 , marginVertical:5, borderRadius:5}}
            placeholder="Street" 
            value={stret}
            onChangeText={setstret}

            />
                  <TextInput 
            style={{borderWidth:1 ,width:150 , paddingHorizontal:5 , marginVertical:5 , borderRadius:5}}
            placeholder="Building" 
            value={building}
            onChangeText={setbuilding}

            />
             <TouchableNativeFeedback
             disabled={city !="" && area !="" && stret !="" && building !="" ? false : true}

  onPress={()=> {user.address={city:city , area:area , street:stret , building:building} ;setModalVisible(false) ; cheeckout() }}
    
>
    <View  style={{backgroundColor:city !="" && area !="" && stret !="" && building !="" ? '#F2BD57' : 'gray'  , width:150 , height:50 , borderRadius:50 , justifyContent:'center' , alignItems:'center' , marginTop:10}}>

    <Text  >
        Checkout
    </Text>
    </View>
</TouchableNativeFeedback>
<Text onPress={()=>setModalVisible(false)} style={{paddingVertical:10}}>Cancel</Text>
       
           
           
          </View>
        </View>
      </Modal>

    
        <View style={{backgroundColor:"#F2BD57" , width:'100%' , height:'25%' , position:'relative' , borderBottomLeftRadius:140 , borderBottomRightRadius:140}} >

    </View>
    <View style={{position:'relative', top:'-15%' , height:'30%' , width:'75%' ,backgroundColor:'white' , borderRadius:15 , padding:15 , justifyContent:"space-around" , marginBottom:'-15%'}}>
      
            <View style={{flexDirection:'row' , justifyContent:'space-between' , width:'100%' }}>
            <Text style={{flex:3}}>
                Subtotal :

                </Text>
                <Text style={{flex:1}}>
                
                {counter} JOD

                </Text>

            
            </View>
        
            <View style={{flexDirection:'row' , justifyContent:'space-between' , width:'100%' }}>
                <Text style={{flex:3}}>
                Items :

                </Text>
                <Text style={{flex:1}}>
                {product.length} Items

                </Text>

            
            </View>

            <View style={{flexDirection:'row' , justifyContent:'space-between' , width:'100%' }}>
            <Text style={{borderBottomWidth:1 , paddingBottom:15 , flex:3 }}>
            Delivery : 
        </Text>
        <Text style={{flex:1,borderBottomWidth:1 , color:'#F2BD57'}}>
                Free

                </Text>
        </View>
        <View style={{flexDirection:'row' , justifyContent:'space-between' , width:'100%' }}>
               
                <Text style={{flex:2  , fontWeight:'bold' , fontSize:normalize(18)}}>
                Total :

                </Text>
                <Text style={{flex:1  , fontWeight:'bold' , fontSize:normalize(18)}}>
                {counter} JOD

                </Text>

            
            </View>
       


    </View>
    <ScrollView style={{width:'100%'}}>
{products}

    </ScrollView>
   <TouchableNativeFeedback

   onPress={()=>{

    if(!user.address){

        setModalVisible(true)
    }else{

        
        cheeckout()
        
        
    }
    }}
    
   >
       <View style={{backgroundColor:'#F2BD57' , width:'30%' , height:50 , borderRadius:50 , justifyContent:'center' , alignItems:'center' , marginVertical:10 }}>

       <Text  >
           Checkout
       </Text>
       </View>
   </TouchableNativeFeedback>
    </View>



    )
    
}
