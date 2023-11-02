import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { LeftIcon} from "../libs/layout/index";
import VisualSearch from "../screens/VisualSearch";
import { Touchable, TouchableOpacity, View,Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
//  import MyOrder from "../screens/MyOrder";
import ProfilePage from "../screens/ProfileTab";
import { Ionicons } from '@expo/vector-icons';
import OrderD from "../screens/OrderDetails";
import Demo from '../screens/MyOrder';


const ExtraPage=props=>{
    return(
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',padding:50}}>
            <TouchableOpacity onPress={()=>props.navigation.goback()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          
        </View>

    )
}


const stack= createNativeStackNavigator();


const ProfileNavigator=props=>{
    const navigation = useNavigation();
    return(
        <stack.Navigator initialRouteName="ProfilePage">
            <stack.Screen name="ProfilePage" component={ProfilePage} options={{    
              headerShown:false,
       }}/>

          <stack.Screen name="check" component={ExtraPage} options={{    
              headerShown:true,
       }}/>
           <stack.Screen name="OrderD" component={OrderD} options={{    
              headerShown:true,
              title:'',
       }}/>

<stack.Screen name="Demo" component={Demo} options={{    
              headerShown:true,
              title:'ORDER PAGE',
       }}/>



     
    
        </stack.Navigator>
       
        
    )
}
export default ProfileNavigator;