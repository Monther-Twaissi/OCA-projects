import React from 'react' ;
import { Image } from 'react-native';
import { Dimensions,Text } from 'react-native';
import { View } from 'react-native';
import { normalize } from 'react-native-elements';





export default function Popular(props){





    return(


        <View
        
        style={{padding:10, backgroundColor:props.color , width:(Dimensions.get('screen').width/3)-20, height:((Dimensions.get('screen').width/3)-20)*1.2 , marginBottom:15, marginRight:15 , borderRadius:5}} >
            <Image resizeMode='contain'  source={{uri:"http://86.108.1.225:8080/"+props.img}} style={{width:'100%' , flex:1}}/>
           <Text 
           
           style={{marginTop:'auto' , textAlign:'center' , fontWeight:'900' , fontSize:normalize(12) }}>
            {props.name}
               
            </Text> 
        </View>
    )
}
