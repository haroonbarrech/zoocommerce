import React from "react";
import { Text, View ,StyleSheet, ImageBackground} from "react-native";
import { LeftIcon,H1, Email,Password,Button,CircularButton} from "../libs/layout/index";


const VisualSearch=props=>{
    return(
        <View>
            <View style={{backgroundColor: "black"}}> 
            <ImageBackground
            style={{width:'100%',height:'100%',position:"relative",opacity:0.4}}
            source={require("../../assets/image.png")}
            />
            </View>
            <Text style={{position:'absolute',top:200,fontSize:24,color:'white',lineHeight:29,}}>
            Search for an outfit by taking 
            a Photo or uploading an image
            </Text>
            <View style={{width: '100%',marginTop:20,position:'absolute',top:260}}>
     <Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={false}
            leftIconName={'bookmark'}
            onPress={()=>{props.navigation.navigate('Photo')}}
            title="Take A Photo"
            style={{
              justifyContent: 'space-between',
            }}
            textStyle={{width:'100%'}}
            iconStyle={{position: 'absolute', left:15,}}
        />
        </View>
        <View style={{width: '100%',marginTop:20,position:'absolute',top:340}}>
     <Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={false}
            leftIconName={'bookmark'}
            title="UPLOAD an image"
            style={{
              justifyContent: 'space-between',
              color:'green'
            }}
            textStyle={{width:'100%'}}
            iconStyle={{position: 'absolute', left:15,}}
        />
        </View>


        </View>

    )
}
const styles=StyleSheet.create({

})
export default VisualSearch;