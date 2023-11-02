import React from "react";
import { View ,Image,Text, StyleSheet, TouchableOpacity} from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { FlatListView ,H1,} from "../libs/layout";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import MyOrder from "./MyOrder";

           


const ProfilePage= props => {
  const data = useSelector((state) => state.ProfileTab.Profile);
    return(
      <SafeAreaView>
             <View style={{width:'100%',marginTop:20,
             alignItems:'flex-end',paddingRight:10}}>
              <TouchableOpacity>
              <EvilIcons name="search" size={32} color="black" />
              </TouchableOpacity>
  
             
        </View>
      <View style={{width:'100%',marginTop:20,marginLeft:10}}>
        <H1>My Profile</H1>
        </View>
        <View style={{height:100,flexDirection:'row',marginTop:20}}> 
        <View style={{height:100,width:"30%",alignItems:'center',justifyContent:'center'}}> 
        <Image
        style={{height:90,width:90,borderRadius:80}}
        source={require('../../assets/image.png')}
        />
  

        </View>
        
          <View style={{height:100,width:"70%",paddingTop:15}}> 
          <Text style={{fontSize:18,fontWeight:'700'}}>
          Matailda Brown
          </Text>
          <Text style={{color:'grey'}}>
          matildabrown@mail.com
          </Text>
</View>
        </View>
      <View style={{marginTop:30}}>
      <FlatListView
          data={data}
          onRenderItem={(item) => {
      return(
        <TouchableOpacity onPress={()=>props.navigation.navigate('Demo')}>
       <View style={{width:"100%",height:72,borderBottomWidth:1,borderColor:'lightgrey',flexDirection:'row'}}>
        <View style={{width:"90%",height:72,borderBottomWidth:1,borderColor:'lightgrey'}}>
        <Text style={{fontSize:16,fontWeight:'600',paddingLeft:10,paddingTop:10}}>
          {item.text}
        </Text>
        <Text style={{fontSize:11,fontWeight:'600',paddingLeft:10,paddingTop:6,color:'grey'}}>
          {item.text1}
        </Text>
        </View>
       
        <Entypo name="chevron-small-right" style={{paddingTop:20,paddingLeft:10}}   size={24} color="grey" />
    
        
        </View>
        </TouchableOpacity>
      );
    }}

        />
        </View>
      
      
      
        </SafeAreaView>
       
           
        
        
          
            
            

    
    )
}

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        
    },
    input: {
      height: 35,
      padding: 10,
      borderRadius:12
    },



});
export default ProfilePage;