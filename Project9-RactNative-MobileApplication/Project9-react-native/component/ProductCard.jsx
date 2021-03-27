import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Image, Text , Picker } from "react-native";
import { ScrollView, TextInput, TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';








function ProductCard(props) {

    return <TouchableNativeFeedback onPress={() => props.navigation.navigate('Order', { product: props.obj })} >
        <View style={{ flexDirection: 'row', width: '100%', marginBottom: 15 }}>


            <Image style={{ width: 85, height: '100%', marginHorizontal: 15, borderRadius: 5 }} source={{ uri: `http://86.108.1.225:8080/${props.obj.productImage}` }} />
            <View  >

                <Text style={{ fontWeight: 'bold', color: props.dark ? 'white' : 'black' }} >
                    {props.obj.productName}
                </Text>


                <Text style={{ fontSize: 12, color: 'gray', color: props.dark ? 'white' : 'black' }} >
                    {props.obj.productDescription}
                </Text>
                <Text style={{ fontFamily: 'Redressed-Regular', fontSize: 13, color: props.dark ? 'white' : 'black' }}>
                    ⭐ Very Good
    </Text>
                <Text style={{ fontFamily: 'Redressed-Regular', fontSize: 13, color: props.dark ? 'white' : 'black' }}>
                    Price : {props.obj.productPrice} JOD


    </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Icon style={{ fontSize: 12, marginRight: 15, color: props.dark ? 'white' : 'black' }} name="motorcycle">  Free Delivery
                </Icon>
                    <Text style={{ color: '#f68121', fontWeight: 'bold', fontSize: 12, marginRight: 5 }}>

                        Order Now
        </Text>

                    <Icon color='#f68121' size={10} name='chevron-right' />
                </View>
            </View>
        </View>
    </TouchableNativeFeedback>

}

export default function Products(props) {

    const [product, setProduct] = useState([])
    const [issearch, setissearch] = useState(false)
    const [searchtext, setsearchtext] = useState("")
    const [catname, setcatname] = useState(props.route.params.name)
    const [selectedValue, setSelectedValue] = useState("java");

    var products = product.map(i => <ProductCard obj={i} key={i._id} {...props} />)



    console.log(props.route.params.id)

    useEffect(() => {

        axios.get(`http://86.108.1.225/api/product/category/${props.route.params.id}`).then(res => {
            setProduct(res.data)
        }
        )

    }, [])


    function search() {
        

        axios.get(searchtext !="" ? `http://86.108.1.225/api/product/search/${searchtext}` : 'http://86.108.1.225/api/product').then(res => {
            setProduct(res.data)
            setcatname(searchtext !="" ? "Result": "All Products")
        }
        )
    }


    return <View style={{ flex: 1 }}>
        <View style={{
            alignItems: 'center', justifyContent: 'space-around', flexDirection: "row", width: '100%', height: 45,

            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
            elevation: 3,
            backgroundColor: 'white'
        }}>
            <Icon size={15} name="list-ul"> Category</Icon>

            <Icon size={15} name="filter"> Filter</Icon>
            <Icon onPress={() => setissearch(t => !t)} size={15} name="search"> Search</Icon>

        </View>
        {issearch ? <TextInput
            placeholder="Search"
            style={{ backgroundColor: 'white', height: 50, paddingHorizontal: 10 }}
            value={searchtext}
            onChangeText={setsearchtext}
            onSubmitEditing={search}

        /> : null}



        <ScrollView>
            <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 15, color: props.dark ? 'white' : 'black' }}  >{catname}</Text>

            {products}



        </ScrollView>
    </View>
}