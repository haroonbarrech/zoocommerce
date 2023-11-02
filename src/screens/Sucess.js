import React from "react";
import { Text, View ,StyleSheet, ImageBackground} from "react-native";
import { LeftIcon,H1, Email,Password,Button,CircularButton} from "../libs/layout/index";


const Success=props=>{
    return(
        <View>
            <View style={{backgroundColor: "black"}}> 
            <ImageBackground
            style={{width:'100%',height:'100%',position:"relative"}}
            source={require("../../assets/done.png")}
            />
            </View>
            <View style={{backgroundColor:'red',width:'100%'}}>
          
            </View>
            <Text style={{paddingLeft:30,paddingRight:30,position:'absolute',top:100,fontSize:30,color:'black',fontWeight:'800',lineHeight:29,}}>
            Success
            </Text>
            <Text style={{paddingLeft:40,paddingRight:40,position:'absolute',top:150,fontSize:20,color:'black',lineHeight:29,}}>
            Your order will be delivered soon.
             Thank you for choosing our app!
            </Text>
   
        <View style={{width: '50%',marginTop:20,position:'absolute',top:200,marginLeft:100,marginRight:50}}>
     <Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={false}
            leftIconName={'bookmark'}
            onPress={()=>{props.navigation.navigate('CategoriesTwo')}}
            title="Continue Shipping"
            style={{}}
            textStyle={{width:'100%',fontSize:18}}
            iconStyle={{position: 'absolute', left:15,}}
        />
        </View>


        </View>

    )
}
const styles=StyleSheet.create({

})
export default Success;