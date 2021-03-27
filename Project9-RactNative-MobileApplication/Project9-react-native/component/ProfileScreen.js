import React, { useState, useEffect } from 'react'
import {  View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { normalize } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

// icons

import { Feather } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// components
import Order from './Order';

export default function ProfileScreen(props) {

  const [user, setuser] = useState({});
  const [profileShow, setProfileShow] = useState("");


  const styles = StyleSheet.create({

    OrderCard: { flexDirection: 'column', padding: 15, height: 180, marginLeft: 15, width: 300, borderStyle: 'solid', borderWidth: 1, borderColor: '#c2c2c2', borderRadius: 5 },
    OrderName: { color: props.dark ? 'white' : 'black', fontSize: normalize(16), fontWeight: 'bold', flex: 2, marginRight: 5, fontFamily: 'Redressed-Regular' },
    orderPrice: { color: props.dark ? 'white' : 'black', flex: 1, textAlign: 'right' },
    topContainer: {
      margin: 10,
      padding: 10,
      borderBottomColor: '#f1f1f1',
      borderBottomWidth: 2,

    },
    userName: {
      fontSize: 28,
      fontWeight: "bold",
      color: props.dark ? 'white' : 'black',
    },
    profileTextContainer: {
      margin: 10,
      padding: 10,
      display: "flex",
      flexDirection: "row",

    },
    line: {
      borderBottomColor: props.dark ? 'white' : '#f1f1f1',
      borderBottomWidth: 2,
    },
    InnerprofileTextContainer: {
      marginTop: -10,
      marginLeft: 20,
      padding: 10,
      display: "flex",
      flexDirection: "row",
      flex: 1,
      alignItems: "center",

    },
    profileText: {
      fontSize: 16,
      fontWeight: "bold",
      marginHorizontal: 10,
      color: props.dark ? 'white' : 'black',

    },
    profileTextLogout: {
      fontSize: 16,
      fontWeight: "bold",
      marginHorizontal: 10,
      color: "#812b2ba4",

    },
    innerprofileText: {
      fontSize: 14,
      marginHorizontal: 10,
      color: props.dark ? 'white' : 'black',

    },
    logout: {
      margin: 10,
      padding: 10,
      borderBottomColor: '#f1f1f1',
      borderBottomWidth: 2,
      display: "flex",
      flexDirection: "row",
      color: "#FF0000",
    },
    orderTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginHorizontal: 10,
      color: props.dark ? 'white' : 'black',

    }
  });


  var order = props.orders.map((i, y) => <Order key={y} obj={i} />) ;

  useEffect(() => {
    axios.get('http://86.108.1.225/api/category').then(res => {

      AsyncStorage.getItem('user').then(res => {

        setuser(JSON.parse(res))

        if (JSON.parse(res).orders) {
          props.setorders(JSON.parse(res).orders)
        }

      })

    });
  }, []);


  return (

    <ScrollView>


      <View>
        <View style={styles.topContainer} >
          <Text style={styles.userName} >{user.username && user.username.startsWith("Guest")? user.username.toString().slice(0, -10) + "..." : user.username}</Text>
          <Text style={styles.profileText} >Address: {user.address ? user.address.city + " ," + user.address.area : "Not found"}</Text>

        </View>

      </View>



      <Text style={styles.orderTitle} >Orders history</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15 }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 10 }} >
          {order}
        </ScrollView>
      </View>

      <View>

        <View style={styles.line} >
          <TouchableNativeFeedback
            onPress={() => {
              profileShow == "contact" ? setProfileShow("") : setProfileShow("contact")
            }}
          >
            <View style={styles.profileTextContainer} >
              <AntDesign name="contacts" size={20} color={props.dark ? 'white' : 'black'} />
              <Text style={styles.profileText} >contact</Text>
            </View>
          </TouchableNativeFeedback>
          {profileShow == "contact" ?
            <View>
              <View style={styles.InnerprofileTextContainer}>
                <Feather name="phone" size={14} color={props.dark ? 'white' : 'black'} />
                <Text style={styles.innerprofileText} >00962 7 7898 2290</Text>
              </View>
              <View style={styles.InnerprofileTextContainer}>
                <Entypo name="email" size={14} color={props.dark ? 'white' : 'black'} />
                <Text style={styles.innerprofileText} >info@Talabia.com</Text>
              </View>
              <View style={styles.InnerprofileTextContainer}>
                <MaterialCommunityIcons name="web" size={14} color={props.dark ? 'white' : 'black'} />
                <Text style={styles.innerprofileText} >www.Talabia.com</Text>
              </View>
            </View>
            : null}
        </View>

        <View style={styles.line} >
          <TouchableNativeFeedback
            onPress={() => {
              profileShow == "language" ? setProfileShow("") : setProfileShow("language")
            }}
          >
            <View style={styles.profileTextContainer} >
              <FontAwesome name="language" size={24} color={props.dark ? 'white' : 'black'} />
              <Text style={styles.profileText} >Language</Text>
            </View>
          </TouchableNativeFeedback>
          {profileShow == "language" ?
            <View>
              <View style={styles.InnerprofileTextContainer}>
                <MaterialCommunityIcons name="abjad-arabic" size={14} color={props.dark ? 'white' : 'black'} />
                <Text style={styles.innerprofileText} >عربي</Text>
              </View>
              <View style={styles.InnerprofileTextContainer}>
                <MaterialCommunityIcons name="web" size={14} color={props.dark ? 'white' : 'black'} />
                <Text style={styles.innerprofileText} >English</Text>
              </View>

            </View>
            : null}
        </View>


        <TouchableNativeFeedback
          onPress={() => {
            AsyncStorage.clear();
            props.setLoggedIn(null)
          }}
        >
          <View style={styles.logout} >

            <Feather name="log-out" size={18} color="#812b2ba4" />
            <Text style={styles.profileTextLogout} >Logout</Text>
          </View>
        </TouchableNativeFeedback>

      </View>

    </ScrollView>

  )
}




