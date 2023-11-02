import React,{useState} from "react";
import { View ,Image, ScrollView,Text,TextInput, StyleSheet, TouchableOpacity,Alert} from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ScrollListView } from "../libs/layout";
import { EvilIcons } from '@expo/vector-icons';

import { FlatListView ,H1,Button} from "../libs/layout";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { LeftIcon } from "../libs/layout";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../libs/layout/constants/Styles";
import MyBagView from "../libs/layout/components/mybagview";
import * as MyBagAction from '../store/actions/MyBagAction';
import * as favouriteAction from '../store/actions/FavoriteActions';

           




const BagPage= props => {
  
  const [icon, seticon] = useState(false);
  const TotalPrice = useSelector((state)=> state.MyBagTab.TotalPrice)
  const Products= useSelector((state) => state.Categories2Tab.Categories2); 
  const bag= useSelector((state) => state. MyBagTab.Bag);  
  console.warn(bag);
  const dispatch = useDispatch();
  const GlobalStyle=GlobalStyles();
/*
         <TouchableOpacity onPress={() => {
    dispatch(favouriteAction.add_to_Favorite(item.id));
    Alert.alert('Successfully, Added to Favorites');
  }} >
 dispatch(MyBagAction.Remove_from_cart({id: item.id, price:item.price }));
   Alert.alert('Successfully, Remove from Cart');
  const onGetTotalPrice = () => {
    let price = 0;
    for (let i = 0; i < fData ?.length; i++) {
      if (fData[i]?.price) {
        price += fData[i]?.price;
      }
    }
    return price.toFixed(2).toString();
  }
  */
  const finalData = () => {
      const data = [];
      for (let i = 0; i < bag?.length; i++) {
        const item = Products.find(currentProduct => currentProduct?.id === bag[i]);
        if (item) {
          data.push(item);
        }
      }
      return data;
  }
  const fData = finalData();
  
    return(
      <SafeAreaView>
             <View style={{width:'100%',marginTop:20,
             alignItems:'flex-end',paddingRight:10}}>
              <TouchableOpacity>
              <EvilIcons name="search" size={32} color="black" />
              </TouchableOpacity>
  
             
        </View>
      <View style={{width:'100%',marginTop:20,marginLeft:10}}>
        <H1>My Bag</H1>
        </View>
      <View style={{height:515}}>
      <FlatListView
          data={fData}
          onRenderItem={(item) => {
      return(
        <View style={{position:'relative',backgroundColor:'white',width:'94%',height:114,flexDirection:'row',marginTop:25,marginHorizontal:10,
        borderRadius:13}}>
<View style={{width:'30%',alignItems:'center',justifyContent:'center'}}>
      
      <Image 
          source={item.img}
          style={{width:"100%",height:114}}
        />
      </View>
      <MyBagView price={item.price} id={item.id}>

        item={item.title}
      </MyBagView>
      
       
            </View>
 
      );
    }}

        />
        </View>
        <View style={{backgroundColor:'white',width:'90%',borderRadius:12,marginTop:15,marginLeft:20}}>
        <TextInput
        style={styles.input}
      
        placeholder="Enter Your Promo Code"
        keyboardType="numeric"
      />
   

        </View>
        <TouchableOpacity>
        <View style={{position:'absolute',right:10,bottom:0,backgroundColor:'black',height:35,width:35,borderRadius:60,justifyContent:'center',alignItems:'center'}}>
      <AntDesign name="arrowright" size={20} color="white" />
        
      </View>

        </TouchableOpacity>
       
     
        <View style={{width: '100%',marginTop:20,flexDirection:'row',
        justifyContent:'center',paddingLeft:10,paddingRight:10}}>
      <Text style={{fontSize:24,color:'grey'}}>
               Total Amount:
                </Text>
                <Text style={{fontSize:24,fontWeight:'bold',paddingLeft:4,paddingRight:4}}>
            $
               
                </Text>
                <Text style={[
                  GlobalStyle.font20,
                  {fontWeight:'bold'}]}>
             {TotalPrice}
               
                </Text>
               

        </View>
       
        <View style={{width: '100%',marginTop:20}}>
     <Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={false}
            leftIconName={'bookmark'}
            title="CHECK OUT"
   onPress={()=>{props.navigation.navigate('ForgotPassword')}}
            style={{
              justifyContent: 'space-between',
            }}
            textStyle={{width:'100%'}}
            iconStyle={{position: 'absolute', left:15,}}
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
export default BagPage;