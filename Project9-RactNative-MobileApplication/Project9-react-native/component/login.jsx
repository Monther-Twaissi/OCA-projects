import axios from "axios";
import React, { useState } from "react";
import { Text } from "react-native";
import { Image, TextInput, View, Button, Dimensions } from "react-native";
import { normalize } from "react-native-elements";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import Logo from "../assets/talabiahLogoWhite.png";
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-community/async-storage';








function Singin(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return (

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

            <TextInput
                style={{ height: 50, width: "75%", borderRadius: 5, backgroundColor: 'white', marginTop: 25, padding: 5 }}
                placeholder="Username"
                onChangeText={setUsername}
                value={username}
                autoCapitalize='none'

            />
            <TextInput
                style={{ height: 50, width: "75%", borderRadius: 5, backgroundColor: 'white', marginTop: 25, padding: 5 }}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'

            />
            <View
                style={{ width: "75%", marginTop: 25 }}
            >

                <Button
                    title="Log in"
                    onPress={() => {

                        let data = {
                            username: username,
                            password: password
                        }
                        axios.post('http://86.108.1.225/api/users/login', data).then(res => {
                            AsyncStorage.setItem('user', JSON.stringify(jwt_decode(res.data.token)));
                            props.setLoggedIn(jwt_decode(res.data.token))
                        })
                    }}

                />
            </View>

        </View>

    )
}

function Register(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")


    return (

        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

            <TextInput
                style={{ height: 50, width: "75%", borderRadius: 5, backgroundColor: 'white', marginTop: 25, padding: 5 }}
                placeholder="Username"
                onChangeText={setUsername}
                value={username}
                autoCapitalize='none'


            />
            <TextInput
                style={{ height: 50, width: "75%", borderRadius: 5, backgroundColor: 'white', marginTop: 25, padding: 5 }}
                placeholder="Addres (Optinal)"
                value={address}
                onChangeText={setAddress}
                

            />
            <TextInput
                style={{ height: 50, width: "75%", borderRadius: 5, backgroundColor: 'white', marginTop: 25, padding: 5 }}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'

            />
            <View
                style={{ width: "75%", marginTop: 25 }}
            >

                <Button
                    title="Create Account"
                    color="#161616"
                    onPress={() => {

                        let data = {
                            username: username,
                            address: address,
                            password: password
                        }
                        axios.post('http://86.108.1.225/api/users', data).then(res => {
                            AsyncStorage.setItem('user', JSON.stringify(jwt_decode(res.data.token)));
                            props.setLoggedIn(jwt_decode(res.data.token))
                        })

                    }}


                />
            </View>

        </View>

    )
}



export default function Login(props) {
    const [isregister, setisregister] = useState(false)
    const [islogin, setislogin] = useState(false)



    return (

        <View style={{ backgroundColor: '#F2BD57', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View
                style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1 }}
            >

                <Image style={{ width: 150, height: 150 }} source={Logo} />
                {isregister ? <Register {...props} /> : null}
                {islogin ? <Singin {...props} /> : null}

            </View>


            <View style={{ width: '100%', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>


                {!islogin ? <TouchableNativeFeedback
                    style={{ width: '25%', justifyContent: 'center', alignItems: 'center', padding: 10, marginVertical: 10 }}
                    onPress={() => {

                        setislogin(true)
                        setisregister(false)
                    }}
                >

                    <Text style={{ color: 'white', fontSize: normalize(16) }}>
                        Log In
                    </Text>
                </TouchableNativeFeedback>



                    : null}


                {!isregister ? <TouchableNativeFeedback
                    style={{ width: '25%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 15 }}
                    onPress={() => {

                        setisregister(true)
                        setislogin(false)

                    }}
                >

                    <Text>
                        Register
                    </Text>
                </TouchableNativeFeedback> : null}

                <Text style={{ color: 'white', textDecorationLine: 'underline' }}

                    onPress={() =>
                        axios.post('http://86.108.1.225/api/users').then(res => {

                            AsyncStorage.setItem('user', JSON.stringify(jwt_decode(res.data.token)));
                            props.setLoggedIn(jwt_decode(res.data.token))
                        }
                        )
                    }
                >
                    Continue as a guest
                    </Text>
            </View>

        </View>






    )



}