import { View  , Image , Text , TouchableWithoutFeedback } from "react-native";
import  React from 'react';




export default function Category(props){



    return(
        <TouchableWithoutFeedback onPress={()=>  props.navigation.navigate('Category', {name:props.name , id:props.id})} >

        <View    style={{ justifyContent:'space-between'  , width:170, height:170 , borderRadius:7 , overflow:'hidden' , marginRight:15 , backgroundColor:props.color}}>
        <Image  style={{width:'75%' , height:'75%' ,marginLeft:'auto'}}  source={{uri :'http://86.108.1.225:8080/'+ props.img}}/>
        <Text style={{padding:15 ,fontWeight:'bold' , color:'white'}}>{props.name}</Text>
        </View>
        </TouchableWithoutFeedback>
        
        
        
    )
}