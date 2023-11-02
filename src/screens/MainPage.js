import React from "react";
import { Text,View,StyleSheet ,Image, SafeAreaView,TouchableOpacity} from "react-native";
import { LeftIcon,H1, Email,Password,Button,CircularButton} from "../libs/layout/index";
import { FontAwesome } from '@expo/vector-icons';


const MainPage=props=>{
    return(
        <SafeAreaView style={{marginLeft:10,marginRight:10}}>
        <View style={{width:'100%',marginTop:20}}>
  
        <LeftIcon
  onPress={(props.navigation.goBack()) }
  />
        </View>
        <View style={{width:'100%',marginTop:40}}>
        <H1>Forgot Password</H1>
        </View>

        <View style={{height:"42%",marginTop:'10%'}}>
        <View style={{width:'100%',flexDirection:'row',paddingRight:10,marginTop:40,alignItems:'center'}}>
        <Text style={{fontSize:14,paddingRight:10,lineHeight:20}}>
        Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
       
     </View>
        <View style={{width:'100%',marginTop:40}}>
        <Email></Email>
        </View>
        <View style={{width: '100%',marginTop:20}}>


     </View>
   
     <View style={{width: '100%',marginTop:20}}>
     <Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={false}
            leftIconName={'bookmark'}
            title="SEND"
            onPress={()=>{props.navigation.navigate('LogIn')}}
            style={{
              justifyContent: 'space-between',
            }}
            textStyle={{width:'100%'}}
            iconStyle={{position: 'absolute', left:15,}}
        />
        </View>
        </View>
        </SafeAreaView>
      
        
    )
}
const styles=StyleSheet.create({

})
export default MainPage;