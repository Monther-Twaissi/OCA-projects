import React from 'react' ;
import { View } from 'react-native';
import {normalize} from 'react-native-elements' ;
import {Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';


export default function Order(props){


    return(
        <View style={{flexDirection:'column'  ,padding:15 , height:140, marginLeft:15 , width:300 , borderStyle:'solid' , borderWidth:1 , borderColor:'#c2c2c2' , borderRadius:5}}>

            <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
                <Text numberOfLines={1} style={{color:props.dark? 'white' : 'black',fontSize:normalize(16) , fontWeight:'bold' ,flex:2 ,marginRight:5 ,fontFamily:'Redressed-Regular'}}>
                    {props.obj.products[0].productName}
                </Text>
                <Text style={{color:props.dark? 'white' : 'black',flex:1 , textAlign:'right'}}>
                {props.obj.totalPrice} JOD
                </Text>
            </View>
            <ScrollView>
                {props.obj.products.length > 1 ?  props.obj.products.map((i , y)=> <Text key={y} style={{color:props.dark? 'white' : 'black'}}>{i.productName} X {i.qty}</Text>) :<Text style={{color:props.dark? 'white' : 'black'}}>{props.obj.address.city + " " + props.obj.address.area }</Text>  }

              
                
            </ScrollView>
                <View style={{flexDirection:'row',marginTop:'auto' }}>
                    <Icon  style={{flex:1}} size={15} color='#f68121' name='repeat'><Text style={{color:'#f68121' ,  fontWeight:'bold'}}> Re-Order</Text></Icon>
                    <Icon  style={{flex:1}} size={15} color='#f68121'  name='smile-o'><Text style={{color:'#f68121' ,  fontWeight:'bold'}}> Rate</Text></Icon>
                </View>
            


        </View>
    )
}
