
import React, { useState, useEffect } from 'react';
import {  View,  Switch, useColorScheme , StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { NavigationContainer   } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/HomeScreen';
import ProfileScreen from './component/ProfileScreen';
import Products from "./component/ProductCard";
import OrderNow from './component/OrderNow';
import AsyncStorage from '@react-native-community/async-storage';
import Login from "./component/login"
import Cart from "./component/cart";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';












const Stack = createStackNavigator();


export default function App() {
  const [schema, setSchea] = useState(useColorScheme())
  const [darkStatus, setdarkStatus] = useState(schema == 'dark' ? true : false)
  const [isloggedIn, setLoggedIn] = useState();
  const [orders, setOrders] = useState([]);
  const [fun , setfun] =  useState()
  const [currentNavigator, setcurrentNavigator] = useState("home");



  // {AppLoading}
  //   let [fontsLoaded] = useFonts({
  //     'Blinker': require('./assets/fonts/font.ttf'),
  //   });


  // function getData(){

  //   axios.get('http://192.168.1.11:8000/api/' ).then((res) => setCounter(JSON.parse( res.data)))

  // }



  useEffect(() => {


    AsyncStorage.getItem('user').then(res => {

      setLoggedIn(JSON.parse(res))
      console.log(isloggedIn)


    });

  }, [])






  if (!isloggedIn) {

    return <Login setLoggedIn={setLoggedIn} />


  } else {

    return (
    
        <NavigationContainer theme={schema === 'dark' ? { dark: true, colors: { background: 'black', text: 'white' } } : { colors: { background: 'white' } }}  >

          <Stack.Navigator screenOptions={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#F2BD57', elevation: 0, // remove shadow on Android
              shadowOpacity: 0
            } // remove shadow on iOS }
          }}  >


            <Stack.Screen
              name="Home"
              options={{ headerRight: () => <Switch style={{ marginHorizontal: 15 }} thumbColor={darkStatus ? "black" : "white"} value={darkStatus} onValueChange={() => { setSchea(schema == 'dark' ? 'light' : 'dark'); setdarkStatus(!darkStatus) }}></Switch> }}
            >
              {props => <HomeScreen {...props} setfun={setfun} orders={orders} setorders={setOrders} dark={darkStatus} />}
            </Stack.Screen>

            <Stack.Screen name="Profile" 
              options={{ headerRight: () => <Switch style={{ marginHorizontal: 15 }} thumbColor={darkStatus ? "black" : "white"} value={darkStatus} onValueChange={() => { setSchea(schema == 'dark' ? 'light' : 'dark'); setdarkStatus(!darkStatus) }}></Switch> }}
            >
            {props => <ProfileScreen {...props} setorders={setOrders} orders={orders} setLoggedIn={setLoggedIn} />}


            </Stack.Screen>
            <Stack.Screen name="Category"
              options={{ headerRight: () => <Switch style={{ marginHorizontal: 15 }} thumbColor={darkStatus ? "black" : "white"} value={darkStatus} onValueChange={() => { setSchea(schema == 'dark' ? 'light' : 'dark'); setdarkStatus(!darkStatus) }}></Switch> }}
            >
              {props => <Products {...props} dark={darkStatus} />}

            </Stack.Screen>



            <Stack.Screen name="Order"
              options={{ headerRight: () => <Switch style={{ marginHorizontal: 15 }} thumbColor={darkStatus ? "black" : "white"} value={darkStatus} onValueChange={() => { setSchea(schema == 'dark' ? 'light' : 'dark'); setdarkStatus(!darkStatus) }}></Switch> }}
            >
              {props => <OrderNow {...props} dark={darkStatus} />}

            </Stack.Screen>


            <Stack.Screen name="Basket"
              options={{ headerRight: () => <Switch style={{ marginHorizontal: 15 }} thumbColor={darkStatus ? "black" : "#e6e6e6"} value={darkStatus} onValueChange={() => { setSchea(schema == 'dark' ? 'light' : 'dark'); setdarkStatus(!darkStatus) }}></Switch> }



              }
            >
              {props => <Cart setorders={setOrders}  {...props} dark={darkStatus} />}

            </Stack.Screen>
          </Stack.Navigator>
          <View style={styles.navStyle}>

<TouchableNativeFeedback
  onPress={() => { setcurrentNavigator("edit"); return fun.navigate('Basket'); }}
  style={currentNavigator == "edit" ? styles.activeIcon : styles.icon}
>
  <Ionicons name="fast-food" size={15} color="black" />
</TouchableNativeFeedback>

<TouchableNativeFeedback
  onPress={() => { setcurrentNavigator("home"); return fun.navigate('Home'); }}
  style={currentNavigator == "home" ? styles.activeIcon : styles.icon}
>
  <Icon size={15} name="home"></Icon>
</TouchableNativeFeedback>

<TouchableNativeFeedback
  onPress={() => { setcurrentNavigator("Profile"); return fun.navigate('Profile'); }}
  style={currentNavigator == "Profile" ? styles.activeIcon : styles.icon}
>
  <Icon size={15} name="user"></Icon>
</TouchableNativeFeedback>

</View>

        </NavigationContainer>


    )
  }

}

const styles = StyleSheet.create({

  navStyle: {
    width: '100%',
    height: 45,
    opacity: 0.8,
    shadowColor: 'black',
    elevation: 15,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: "row"
  },

  activeIcon: {
    height: 40,
    width: 40,
    backgroundColor: '#F2BD57',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

  },
  icon: {
    height: 40,
    width: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }
});


