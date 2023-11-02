import React from "react";
import { Text,View,StyleSheet ,Image, SafeAreaView,TouchableOpacity} from "react-native";
import { LeftIcon,H1, Email,Password,Button,CircularButton} from "../libs/layout/index";
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


let schema = yup.object().shape({
    name: yup.string().required().email(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(100),
});


const SignUp=props=>{
  
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
          defaultValues: {
            firstName: '',
            lastName: ''
          }
        });
    return(
        <SafeAreaView style={{marginLeft:10,marginRight:10}}>
        <View style={{width:'100%',marginTop:20}}>
  
        </View>
        <View style={{width:'100%',marginTop:40}}>
        <H1>Sign up</H1>
        </View>
        <View style={{height:"42%",marginTop:'20%'}}>
      
        <View style={{marginTop:20,width:'100%',backgroundColor:'white',paddingBottom:4,paddingTop:4,borderRadius:8}}>
        <Text style={{fontSize:14,paddingLeft:20,color:"grey"}}>
                Email
        </Text>
        <Controller
        control={control}
        rules={{
         required: true,
        }}
         
        render={({ field: { onChange, onBlur, value } }) => (
        <Email
          
            iconleft={false}
            leftIconName={'email'}
            textStyle={{width:'100%'}}
            style={{borderWidth: 0,paddingLeft:10}}
            iconStyle={{position: 'absolute', left:15,}}
        />     )}
        name="email"
      />
      {errors.firstName && <Text>This is required.</Text>}
        </View>
        <View style={{marginTop:20,width:'100%',backgroundColor:'white',paddingBottom:4,paddingTop:4,borderRadius:8}}>
        <Text style={{fontSize:14,paddingLeft:20,color:"grey"}}>
                Password
        </Text>
        <Controller
        
        control={control}
        rules={{
         required: true,
        }}
         
        render={({ field: { onChange, onBlur, value } }) => (
<Password 
  icon="eye"
  iconReplace="eye-with-line" 
  style={{borderWidth: 0,paddingLeft:10}}
  eyestyle={{position:'absolute',bottom:-5}}
/>
)}
        name="password"
      />
      {errors.firstName && <Text>This is required.</Text>}

     </View>
        <View style={{marginTop:20,width:'100%',backgroundColor:'white',paddingBottom:4,paddingTop:4,borderRadius:8}}>
        <Text style={{fontSize:14,paddingLeft:20,color:"grey"}}>
              Confirm  Password
        </Text>
        <Controller
        control={control}
        rules={{
         required: true,
        }}
         
        render={({ field: { onChange, onBlur, value } }) => (
<Password 
  icon="eye"
  iconReplace="eye-with-line" 
  style={{borderWidth: 0,paddingLeft:10}}
  eyestyle={{position:'absolute',bottom:-5}}
/>
)}
        name="password"
      />
      {errors.firstName && <Text>This is required.</Text>}

     </View>
     <View style={{width:'100%',flexDirection:'row',paddingRight:10,marginTop:10,justifyContent:'flex-end',alignItems:'center'}}>
        <Text style={{fontSize:14,paddingRight:10}}>
                Already have an account?
        </Text>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('LogIn')}}>
        <FontAwesome name="long-arrow-right" size={24} color="red" />
        </TouchableOpacity>
     </View>
     <View style={{width: '100%',marginTop:20}}>
     <Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={false}
            leftIconName={'bookmark'}
            title="SIGN UP"
   onPress={()=>{props.navigation.navigate('ForgotPassword')}}
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
export default SignUp;