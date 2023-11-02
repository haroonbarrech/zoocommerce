import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { Touchable, TouchableOpacity, View,Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LeftIcon} from "../libs/layout/index";
import { EvilIcons } from '@expo/vector-icons';

import Categories from "../screens/Categories";
import CategoriesTwo from "../screens/CategoriesTwo";
import ShopPage from "../screens/ShopTab";
import Success from "../screens/Sucess";


const stack= createNativeStackNavigator();


const ShopNavigator=props=>{
    const navigation = useNavigation();
    return(
        <stack.Navigator initialRouteName="ProfilePage">
            <stack.Screen name="ShopPage" component={ShopPage} options={{    
                     headerShown:false,
                     title:'Shop',
                    headerLeft:()=>(
                     <LeftIcon/>
                    ),
                    headerRight:()=>(
                      <TouchableOpacity>
             <EvilIcons name="search" size={28} color="black" />
                      </TouchableOpacity>
                   
                     ),
       }}/>

<stack.Screen name="Categories" component={Categories} options={{    
                     headerShown:true,
                     title:'Shop',
                    headerLeft:()=>(
                        <TouchableOpacity  onPress={() => props.navigation.navigate('ShopPage')}>
                        <Ionicons name="chevron-back-outline" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                    headerRight:()=>(
                      <TouchableOpacity>
             <EvilIcons name="search" size={30} color="black" />
                      </TouchableOpacity>
                   
                     ),
       }}/>
          <stack.Screen name="check" component={CategoriesTwo} options={{    
              headerShown:false,
       }}/>
            <stack.Screen name="Success" component={Success} options={{    
              headerShown:false,
       }}/>


     
    
        </stack.Navigator>
       
        
    )
}
export default ShopNavigator;