import React from "react";
import { Text, View ,StyleSheet, ImageBackground} from "react-native";
import { LeftIcon,H1, Email,Password,Button,CircularButton} from "../libs/layout/index";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Photo=props=>{
    return(
        <View>
            <View style={{}}> 
            <ImageBackground
            style={{width:'100%',height:'100%',position:"relative"}}
            source={require("../../assets/image8.jpeg")}
            />
            </View>
            <View style={{backgroundColor:'white',position:'absolute',bottom:1,width:'100%',height:120,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>
            <Entypo name="flash" size={24} color="black" />
            <View style={{backgroundColor:'red',width:50,height:50,borderRadius:40,justifyContent:'center',alignItems:'center'}}>
            <FontAwesome name="camera" size={23} color="white" />
            </View>
            <MaterialCommunityIcons name="rotate-3d-variant" size={24} color="black" />

            </View>
         
    
      

        </View>

    )
}
const styles=StyleSheet.create({

})
export default Photo;