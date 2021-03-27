import axios from "axios";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { Text, TextInput, Alert } from "react-native"
import { normalize } from "react-native-elements";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';





export default function OrderNow(props) {
    const [price, setPrice] = useState(props.route.params.product.productPrice)
    const [totalPrice, setTotalPrice] = useState(price)
    const [qty, setQty] = useState(1)
    const [size, setCount] = useState(1)
    const [sauce, setSauce] = useState(1)
    const [ketchup, setKatchup] = useState(1)
    const [note, setNote] = useState("")
    const sizes = ["S", "M", "L"]
    const [user, setUser] = useState({})



    useEffect(() => {
        AsyncStorage.getItem('user').then(res => {

            setUser(JSON.parse(res))





        });

    }, [])



    return <ScrollView

    >



        <Image style={{ position: 'absolute', top: 0, width: '100%', height: '70%', borderBottomRightRadius: 500, overflow: 'hidden' }} source={{ uri: `http://86.108.1.225:8080/${props.route.params.product.productImage}` }} />

        <View style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '50%', backgroundColor: '#efedeee8', width: '75%', borderRadius: 15, padding: 20 }} >
            <Text style={{ fontSize: normalize(22), fontWeight: 'bold', color: '#c7870c' }}>
                {totalPrice} JOD
        </Text>
            <Text style={{ fontWeight: 'bold', marginVertical: 10, fontSize: normalize(15) }}>
                {props.route.params.product.productName}

            </Text>
            <View  >
                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }} >
                    <Text>Quantity</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <Icon onPress={() => { setQty(c => c > 1 ? c - 1 : c); setTotalPrice(t => t > props.route.params.product.productPrice ? t - props.route.params.product.productPrice : t) }} style={{ backgroundColor: '#e0e0e0', padding: 10, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 5 }} name="minus" />
                        <View style={{ marginHorizontal: 15, justifyContent: 'center' }}>
                            <Text style={{ margin: 0, padding: 0, width: 18 }}>
                                {qty}
                            </Text>
                        </View>
                        <Icon onPress={() => { setQty(c => c + 1); setTotalPrice(t => t + price) }} style={{ backgroundColor: '#e0e0e0', padding: 10, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 5 }} name="plus" />


                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }} >
                    <Text>Size</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <Icon onPress={() => { setCount(c => c > 0 ? c - 1 : c); setTotalPrice(t => size > 0 ? t - (0.50 * qty) : t); setPrice(t => t - 0.5) }} style={{ backgroundColor: '#e0e0e0', padding: 10, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 5 }} name="minus" />
                        <View style={{ marginHorizontal: 15, justifyContent: 'center' }}>
                            <Text style={{ margin: 0, padding: 0, width: 18 }}>
                                {sizes[size]}
                            </Text>
                        </View>
                        <Icon onPress={() => { setCount(c => c < 2 ? c + 1 : c); setTotalPrice(t => size < 2 ? t + (0.50 * qty) : t); setPrice(t => t + 0.5) }} style={{ backgroundColor: '#e0e0e0', padding: 10, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 5 }} name="plus" />


                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }} >
                    <Text>Mayonnaise</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <Icon onPress={() => setSauce(c => c > 1 ? c - 1 : c)} style={{ backgroundColor: '#e0e0e0', padding: 10, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 5 }} name="minus" />
                        <View style={{ marginHorizontal: 15, justifyContent: 'center' }}>
                            <Text style={{ margin: 0, padding: 0, width: 18 }}>
                                {sauce}
                            </Text>
                        </View>
                        <Icon onPress={() => setSauce(c => c + 1)} style={{ backgroundColor: '#e0e0e0', padding: 10, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 5 }} name="plus" />


                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between' }} >
                    <Text>Ketchup</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <Icon onPress={() => setKatchup(c => c > 1 ? c - 1 : c)} style={{ backgroundColor: '#e0e0e0', padding: 10, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 5 }} name="minus" />
                        <View style={{ marginHorizontal: 15, justifyContent: 'center' }}>
                            <Text style={{ margin: 0, padding: 0, width: 18 }}>
                                {ketchup}
                            </Text>
                        </View>
                        <Icon onPress={() => setKatchup(c => c + 1)} style={{ backgroundColor: '#e0e0e0', padding: 10, borderStyle: 'solid', borderColor: 'black', borderWidth: 1, borderRadius: 5 }} name="plus" />


                    </View>
                </View>
                <Text>Note :</Text>


                <TextInput style={{ backgroundColor: 'white', alignSelf: 'stretch', height: 'auto', borderRadius: 15, marginTop: 10 }}
                    multiline={true}
                    numberOfLines={5}

                    onChangeText={(text) => setNote(text)}
                    value={note}



                />


            </View>

        </View>
        <TouchableWithoutFeedback
            style={{ marginRight: 'auto', marginLeft: 'auto', width: '75%', backgroundColor: 'orange', marginVertical: 15, padding: 15, borderRadius: 50 }}

            onPress={() => {

                var product = props.route.params.product;
                product.qty = qty;
                product.totalPrice = totalPrice;

                if (!user.cart) {

                    user.cart = []
                }
                user.cart.push(product);
                AsyncStorage.setItem('user', JSON.stringify(user));
                Alert.alert(
                    "success",
                    "Item successfully added",
                    [
                        {
                            text: "continue shopping",
                            onPress: () => console.log("Cancel Pressed"),

                        },
                        { text: "Checkout", onPress: () => props.navigation.navigate('Basket') }
                    ]
                )
            }}


        >
            <Text style={{ textAlign: 'center' }}>
                Order Now
            </Text>
        </TouchableWithoutFeedback>

    </ScrollView>



}