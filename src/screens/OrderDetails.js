import React,{useState} from "react";
import { View ,Image, ScrollView,Text,TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ScrollListView } from "../libs/layout";
import { EvilIcons } from '@expo/vector-icons';

import { FlatListView ,H1,Button} from "../libs/layout";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { LeftIcon } from "../libs/layout";
import { Entypo } from '@expo/vector-icons';

           

const DATA = [
    {
      id: 1,
      title: 'Pullover',
      price: '51$',
      img: require('../../assets/image.png'),
      ratting: 3
    } ,
    {
      id: 2,
      title: 'Pullover',
      price: '51$',
      img: require('../../assets/image2.png'),
      ratting: 3
    } ,
    {
      id: 3,
      title: 'Pullover',
      price: '51$',
      img: require('../../assets/image3.png'),
      ratting: 3
    } ,
 
  
  
  ];


const OrderD= props => {
  
    return(
      <ScrollView>
        <View style={{backgroundColor:'white',height:100,marginTop:10}}>
        <View style={{flexDirection:"row",height:30,paddingLeft:10,paddingRight:10,marginTop:10,justifyContent:'space-between'}}>
        <Text style={{fontSize:16,fontWeight:'bold',}}>
        Order №1947034
              </Text>
              <Text style={{fontSize:14,fontWeight:'bold',color:'grey'}}>
        5-12-2019
              </Text>
          </View>
          <View style={{flexDirection:"row",height:30,paddingLeft:10,paddingRight:10,justifyContent:'space-between'}}>
        <Text style={{fontSize:16,fontWeight:'bold',}}>
       Tracking Number
              </Text>
              <Text style={{fontSize:16,fontWeight:'bold',color:"lightgreen"}}>
      Delivered
              </Text>
          </View>
          <View style={{height:30}}>
        <Text style={{fontSize:15,fontWeight:'bold',paddingLeft:10}}>
             3 items
              </Text>
          </View>
      
        </View>

        <View style={{marginTop:10}}>
          <FlatListView
              data={DATA}
              onRenderItem={(item) => {
          return(
            <View style={{position:'relative',backgroundColor:'white',width:'94%',height:100,flexDirection:'row',marginTop:15,marginHorizontal:10,
            borderRadius:14}}>
  <View style={{width:'30%',alignItems:'center',justifyContent:'center'}}>
          
          <Image 
              source={item.img}
              style={{width:"100%",height:100}}

            />
           
          </View>
          
            <View style={{width:'50%',marginLeft:10,justifyContent:'space-evenly'}}>
              <Text style={{fontSize:15,fontWeight:'bold'}}>
               {item.title}
              </Text>
              <Text style={{fontSize:11,fontWeight:'bold',color:'grey'}}>
               {item.title}
              </Text>
              <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:11,fontWeight:'bold',color:'grey'}}>
               Color:
              </Text>
              <Text style={{fontSize:11,fontWeight:'bold',color:'grey'}}>
               {item.title}
              </Text>
              <Text style={{paddingLeft:10,fontSize:11,fontWeight:'bold',color:'grey'}}>
               Size:
              </Text>
              <Text style={{fontSize:11,fontWeight:'bold',color:'grey'}}>
               {item.title}
              </Text>
              </View>
             
              <Text style={{fontSize:14,fontWeight:'bold'}}>
               {item.price}
              </Text>
            </View>
           
            
            </View>
            
            
     
          );
        }}

            />
            </View>
            <View style={{marginTop:20}}>
              <Text style={{paddingLeft:10,fontSize:14,color:'black'}}>
              Order Information
              </Text>
              
            </View>
            <View style={{marginTop:20,height:40,flexDirection:'row'}}>
              <Text style={{paddingLeft:10,fontSize:14,color:'grey'}}>
             Shipping Addreess
              </Text>
              <Text style={{paddingLeft:10,fontSize:14,color:'black',fontWeight:'700'}}>
              3 Newbridge Court ,Chino Hills, {'\n'}
CA 91709, United States
              
              </Text>
      
            </View>
            <View style={{marginTop:20,height:40,flexDirection:'row'}}>
              <Text style={{paddingLeft:10,fontSize:14,color:'grey'}}>
            Payment Method
              </Text>
              <Text style={{paddingLeft:10,fontSize:14,color:'black',fontWeight:'700'}}>
              **** **** **** 3947
              
              </Text>
      
            </View>
            <View style={{marginTop:20,height:40,flexDirection:'row'}}>
              <Text style={{paddingLeft:10,fontSize:14,color:'grey'}}>
           Delivery Method
              </Text>
              <Text style={{paddingLeft:10,fontSize:14,color:'black',fontWeight:'700'}}>
            FedEx, 3 days 15$
              </Text>
      
            </View>
            <View style={{marginTop:20,height:40,flexDirection:'row'}}>
              <Text style={{paddingLeft:10,fontSize:14,color:'grey'}}>
             Discount
              </Text>
              <Text style={{paddingLeft:10,fontSize:14,color:'black',fontWeight:'700'}}>
       10% personal promo code
              
              </Text>
      
            </View>
            <View style={{marginTop:20,height:40,flexDirection:'row'}}>
              <Text style={{paddingLeft:10,fontSize:14,color:'grey'}}>
             Total Amount
              </Text>
              <Text style={{paddingLeft:10,fontSize:14,color:'black',fontWeight:'700'}}>
           133$
              </Text>
      
            </View>
            <View style={{marginLeft:40,marginRight:40,marginBottom:40,height:40,flexDirection:'row',justifyContent:'space-between',}}>
            <View style={{width: 160,marginTop:0}}>
     <Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={false}
            leftIconName={'bookmark'}
            title="Recorder"
   onPress={()=>{props.navigation.navigate('ForgotPassword')}}
            style={{
              height:40
            }}
            textStyle={{fontSize:!2}}
            iconStyle={{position: 'absolute', left:15,}}
        />
        </View>
        <View style={{width: 160,marginTop:0}}>
     <Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={false}
            leftIconName={'bookmark'}
            title="LEAVE FEEDBACK"
   onPress={()=>{props.navigation.navigate('ForgotPassword')}}
            style={{
              height:40
            }}
            textStyle={{fontSize:!2}}
            iconStyle={{position: 'absolute', left:15,}}
        />
        </View>
      
            </View>
            
      
      
      
        </ScrollView>
       
           
        
        
          
            
            

    
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
export default OrderD;