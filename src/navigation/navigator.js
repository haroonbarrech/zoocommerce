import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { LeftIcon} from "../libs/layout/index";
import VisualSearch from "../screens/VisualSearch";
import { Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import LogIn from "../screens/login";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";
import Photo from "../screens/Photo";
import MainPage from "../screens/MainPage";
import TabNavigator from "./TabNavigator";
import Categories from "../screens/Categories";
import MyOrder from "../screens/MyOrder";
import OrderD from "../screens/OrderDetails";
import CategoriesTwo from "../screens/CategoriesTwo";
import Success from "../screens/Sucess";





const stack= createNativeStackNavigator();


const Navigator=props=>{
    const navigation = useNavigation();
    return(
        <stack.Navigator initialRouteName="ForgotPassword}">
            <stack.Screen name="MyOrder" component={MyOrder} options={{    
              headerShown:false,
       }}/>

       <stack.Screen name="CategoriesTwo" component={CategoriesTwo} options={{    
              headerShown:false,
       }}/>
        <stack.Screen name="Categories" component={Categories} options={{    
              headerShown:true,
       }}/>

<stack.Screen name="LogIn" component={LogIn} options={{    
              headerShown:false,
       }}/>

<stack.Screen name="SignUp" component={SignUp} options={{    
              headerShown:false,
       }}/>
         <stack.Screen name="ForgotPassword" component={ForgotPassword} options={{    
              headerShown:false,
       }}/>
        <stack.Screen name="OrderD" component={OrderD} options={{
        headerShown:true,
        title:'VOrder Details',
        headerStyle: {
            backgroundColor: 'light grey',
        },
       headerLeft:()=>(
        <LeftIcon/>
       )
       }}/>
               <stack.Screen name="VisualSearch" component={VisualSearch} options={{
        headerShown:true,
        title:'VisualSearch',
        headerStyle: {
            backgroundColor: 'light grey',
        },
       headerLeft:()=>(
        <LeftIcon/>
       )
       }}/>
          <stack.Screen name="Photo" component={Photo} options={{
        headerShown:true,
        title:'Photo',
        headerStyle: {
            backgroundColor: 'light grey',
        },
       headerLeft:()=>(
        <LeftIcon/>
       )
       }}/>
          <stack.Screen name="MainPage" component={TabNavigator} options={{    
              headerShown:false,
       }}/>
             <stack.Screen name="Success" component={Success} options={{    
              headerShown:false,
       }}/>
     
        </stack.Navigator>
       
        
    )
}
export default Navigator;