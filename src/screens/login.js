import React ,{useState}from "react";
import { Text,View,StyleSheet ,Image, SafeAreaView,TouchableOpacity} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { LeftIcon,H1, Email,Password,Button,CircularButton} from "../libs/layout/index";
import {Ionicons} from '@expo/vector-icons';
import normalize from '../libs/layout/normalize/normalized';
import { family } from "../libs/layout/constants/family";
import {useDefaultQuery, useMediaQuery, applyMedia} from '../libs/layout/quries/useGridQuries';




const LogIn= props => {
  const [image,setimage]=useState();
  const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
  const styles = StyleSheet.create({
    img: [
                    
      // i phone 13 pro max
      {
        height:600,
        width:'100%'
      
      },


  applyMedia(xsp, { //iphone 12 mini
      fontSize:normalize(18)
 
    
  }),
  applyMedia(smp, { // i pad mini 6 th gen
      fontSize:normalize(26)
     
  }),
  applyMedia(mdp, {   //i pad pro 9.7 ich
    height:900,
    width:'100%',
    
  }),
  applyMedia(xlp, { //i pad pro 12.9 inch
       
    height:900,
    width:'100%'
  }),
  applyMedia(xxlp, {
      fontSize:normalize(32),
     

       
  }),
  applyMedia(xsl, {
      
      fontSize:normalize(16),
  }),
  applyMedia(sml, { //i phone 8 
      fontSize:normalize(22),
   
  }),
  applyMedia(mdl, { // i phone 13 pro max ,12 mini,13 mini, 11
      fontSize:normalize(22),
  
  }),
  applyMedia(xll, { // i  pad mini 6 th generation
      fontSize:normalize(30),    
  }),
  applyMedia(xxll, { // i pad pro 12.9 
      fontSize:normalize(34),
       
  }),
 
],



});
    return(
        <SafeAreaView style={{marginLeft:10,marginRight:10}}>
        <View style={{width:'100%',marginTop:20}}>
  
  <LeftIcon/>
        </View>
        <View style={{width:'100%',marginTop:40}}>
        <H1>Login</H1>
        </View>
        <View style={{height:"42%",marginTop:'20%'}}>
        <View style={{width:'100%',marginTop:40}}>
        <Email></Email>
        </View>
        <View style={{width: '100%',marginTop:20}}>
<Password 
  icon="eye"
  iconReplace="eye-with-line" 
/>

     </View>
     <View style={{width:'100%',flexDirection:'row',paddingRight:10,marginTop:10,justifyContent:'flex-end',alignItems:'center'}}>
        <Text style={{fontSize:14,paddingRight:10}}>
                Forgot Your password
        </Text>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('ForgotPassword')}}>
        <FontAwesome name="long-arrow-right" size={24} color="red" />
        </TouchableOpacity>
     </View>
     <View style={{width: '100%',marginTop:20}}>
     <Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={false}
            leftIconName={'bookmark'}
            title="LOGIN"
            onPress={()=>{props.navigation.navigate('SignUp')}}
            style={{
              justifyContent: 'space-between',
            }}
            textStyle={{width:'100%'}}
            iconStyle={{position: 'absolute', left:15,}}
        />
        </View>
        </View>
        <View style={{height:'10%',alignItems:'center'}}> 
        </View>
        <View style={{width:'100%',alignItems:'center'}}>
        <Text style={{fontSize:14,paddingRight:10}}>
        Or login with social account
        </Text>
      
     </View>
     <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:100,marginRight:100,marginTop:20}}>
     <Image
        style={{height:80,width:80,borderRadius:80}}
        source={require('../../assets/g.jpeg')}
      />
       <Image
        style={{height:80,width:80,borderRadius:120}}
        source={require('../../assets/ff.png')}
      />
       
       
     </View>

        </SafeAreaView>
      
        
    )
}
const styles=StyleSheet.create({

})
export default LogIn;