import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import { normalize, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Category from './Category';
import Order from './Order';
import Popular from './Popular';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';





export default function HomeScreen(props) {

    const [loaded, setLoaded] = useState(false);
    const [user, setuser] = useState({});
    const [categories, setCategories] = useState([]);
    const [pupular, setpupular] = useState([]);
    const colors = ['#f4aa33' ,'#ff80a6','#ff493c', '#a7f2ad' , '#ffeee5' , '#d9daff' , '#f2ec72'] ;



    var order = props.orders.map((i,y)=><Order key={y} obj={i} {...props} />)
    var populares = pupular.map((i,y)=><Popular key={i._id} name={i.productName} color={colors[y]} img={i.productImage} />)





    useEffect(() => {
        axios.get('http://86.108.1.225/api/category').then(res => {
            
        setCategories(res.data);
        AsyncStorage.getItem('user').then(res=> {
      
            setuser(JSON.parse(res))
            
            if(JSON.parse(res).orders){
                props.setorders(JSON.parse(res).orders)
            }
            
          })
    
    }) ;
        axios.get('http://86.108.1.225/api/product/popular').then(res => {
            setpupular(res.data)
        
    
    }) ;
    props.setfun(props.navigation)


    },[])

    const fetchFonts = () => {
        return Font.loadAsync({
            'Redressed-Regular': require('../assets/fonts/Rubik-VariableFont_wght.ttf'),

        });
    };

    if (!loaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setLoaded(true)}
                onError={console.warn}
            />
        );
    }

    function storeData() {
        AsyncStorage.setItem('user', JSON.stringify(decoded));
    };



    const CategoryComponent = categories.map(i => <Category id={i._id} key={i._id} {...props} name={i.categoryName}
         color={i.categoryColor} img={i.categoryImage} />)


    return <ScrollView  >

        <Text style={{ color: props.dark ? 'white' : 'black', fontFamily: 'Redressed-Regular', lineHeight: 35, fontSize: normalize(18), paddingHorizontal: 15, paddingTop: 20 }}>
            What would you like to order,{"\n"}
                {user.username && user.username.startsWith("Guest")? user.username.toString().slice(0, -10) + "..." : user.username}

      </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 15, width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 15 }}>

                {CategoryComponent}
            </View>
        </ScrollView>

        {order.length > 0 ?<View style={{ margin: 15, marginTop: 25 }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <Text style={{ color: props.dark ? 'white' : 'black', fontFamily: 'Redressed-Regular', lineHeight: 35, fontSize: normalize(18) }}>
                    Order again
                </Text>
                <Icon color='#f68121' size={20} name='chevron-right' />
            </View>


        </View> : null }

        
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 10 }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15 }}>

               {order}


            </View>
        </ScrollView>

        <View style={{ margin: 15 }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <Text style={{ color: props.dark ? 'white' : 'black', fontFamily: 'Redressed-Regular', lineHeight: 35, fontSize: normalize(18) }}>
                    Popular cuisines near you
          </Text>
                <Icon color='#f68121' size={20} name='chevron-right' onPress={() =>
                    props.navigation.navigate('Profile')} />
            </View>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 15, flexWrap: 'wrap' }}>
            {populares}
           
            
           
            
        </View>


    </ScrollView>


}
