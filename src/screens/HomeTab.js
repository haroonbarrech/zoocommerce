import React, { useState } from "react";
import { View ,Image, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { LeftIcon,H1, Email,Password,Button,CircularButton} from "../libs/layout/index";
import {Ionicons} from '@expo/vector-icons';
import normalize from '../libs/layout/normalize/normalized';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { family } from "../libs/layout/constants/family";
import {useDefaultQuery, useMediaQuery, applyMedia} from '../libs/layout/quries/useGridQuries';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import * as favouriteAction from '../store/actions/FavoriteActions';

const Data1= [
  {
    id: 1,
    mainimg: require('../../assets/image.png'),
    name:'Dorothy Perkins',
    dresstype:'Evening Dress',
    price:' 15$',
    

  },
  {
    id: 2,
    mainimg: require('../../assets/image1.png'),
    name:'Dorothy Perkins',
    dresstype:'Evening Dress',
    price:' 15$',
    

  },
  {
    id: 3,
    mainimg: require('../../assets/image2.png'),
    name:'Dorothy Perkins',
    dresstype:'Evening Dress',
    price:' 15$',
    

  },
  {
    id: 4,
    mainimg: require('../../assets/image3.png'),
    name:'Dorothy Perkins',
    dresstype:'Evening Dress',
    price:' 15$',
    

  },
  
];


const HomePage= props => {
  const data = useSelector((state) => state.HomeTab.Users1);
  const [image,setimage]=useState();
  const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();
  const fav = useSelector((state) => state.FavoriteTab.Favourite);  
console.warn(fav);

const dispatch = useDispatch();

  const styles = StyleSheet.create({
    img: [
                    
      // i phone 13 pro max
      {
        height:260,
        width:'100%',
  
      
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
      <ScrollView>
      <View>
        
        <View style={{justifyContent:'center',alignItems:'center',
          }}>
            <Image
            style={styles.img}
            source={require("../../assets/ii.jpeg")}
            />

          <Text style={{position:'absolute',bottom:0,left:15,fontSize:34,fontWeight:'900',color:'white',verticalAlign:'top',lineHeight:100}}>
            Fashion Sale
          </Text>
        
        
          
         
          </View>
          <View style={{paddingLeft:10,paddingRight:10,flexDirection:'row',marginTop:15,alignItems:'center',justifyContent:'space-between'}}>
          <View style={{paddingLeft:10,paddingRight:10,width:'85%'}}>
          <Text style={{fontSize:34,fontWeight:'bold'}}>
           New
          </Text>
          <Text style={{fontSize:12}}>
          You’ve never seen it before!
          </Text>
          </View>
          <View style={{paddingLeft:10,paddingRight:1,width:'30%'}}>
          <TouchableOpacity>
          <Text style={{fontSize:14}}>
          View all
          </Text>

          </TouchableOpacity>
          
          </View>

        </View>
          </View>
          <View style={{marginLeft:20,marginTop:10}}>
    <SwiperFlatList
      data={data}
      renderItem={({item}) => {
        console.log(props);
        return (
          <View style={{marginLeft:10,height:260,width:150,borderRadius:8,}}>
            <View style={{position:'relative',height:148,width:150}}>
              <Image
               source={item.mainimg}
               style={{height:184,width:150,borderRadius:12}}
              />
           
        
            </View>
            <View style={{position:'absolute',left:12,marginTop:6,backgroundColor:'red',width:34,height:20,justifyContent:'center',
          borderRadius:11,alignItems:'center'}}>
              <Text style={{fontSize:11,color:'white',fontWeight:'bold'}}>
               -20%
              </Text>
            </View>
            {/*------------------------------------Add to  favorites---------------------------------------------*/}
            <View style={{height:40,width:40,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:30,bottom:55,right:5,position:'absolute'}}>
            <TouchableOpacity onPress={() => fav.includes(item.id)? dispatch(favouriteAction.Delete_from_Favorite(item.id)) : dispatch(favouriteAction.add_to_Favorite(item.id))} >
             <AntDesign name="heart" size={24} color={fav.includes(item.id)? 'red' : 'grey' }/>
            </TouchableOpacity>
            </View>
            <View style={{position:'absolute',bottom:4}}>
    
    <Text style={{fontSize:10,fontWeight:'bold'}}>
      <TouchableOpacity>
    <EvilIcons name="star" size={18} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
    <EvilIcons name="star" size={18} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
    <EvilIcons name="star" size={18} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
    <EvilIcons name="star" size={18} color="black" />
    </TouchableOpacity>
    <TouchableOpacity>
    <EvilIcons name="star" size={18} color="black" />
    </TouchableOpacity>
        
   


    </Text>
    <Text style={{color:'grey',fontSize:12}}>
Dorothy Perkins
  </Text>
  <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>
 Evening Dress
  </Text>
  <View style={{flexDirection:'row'}}>
  <Text style={{fontSize:14,color:'grey',textDecorationLine:'line-through'}}>
     {item.price}
    </Text>
    <Text style={{fontSize:14,fontWeight:'bold'}}>
     {item.price}
    </Text>
  </View>
  </View>
              
     
              </View>
              
        
       

      )
      }
      }
    />
  </View>
  <View style={{paddingLeft:10,paddingRight:10,flexDirection:'row',marginTop:15,alignItems:'center',justifyContent:'space-between'}}>
          <View style={{paddingLeft:10,paddingRight:10,width:'85%'}}>
          <Text style={{fontSize:34,fontWeight:'bold'}}>
           Sale
          </Text>
          <Text style={{fontSize:12}}>
          You’ve never seen it before!
          </Text>
          </View>
          <View style={{paddingLeft:10,paddingRight:1,width:'30%'}}>
          <TouchableOpacity>
          <Text style={{fontSize:14}}>
          View all
          </Text>

          </TouchableOpacity>
          
          </View>

        </View>
        <View style={{marginLeft:20,marginTop:10}}>
    <SwiperFlatList
      data={data}
      renderItem={({item}) => {
        console.log(props);
        return (
          <View style={{marginLeft:10,height:260,width:150,borderRadius:8,}}>
            <View style={{position:'relative',height:148,width:150}}>
              <Image
               source={item.mainimg}
               style={{height:184,width:150,borderRadius:12}}
              />
           
        
            </View>
            <View style={{position:'absolute',left:12,marginTop:6,backgroundColor:'black',width:34,height:20,justifyContent:'center',
          borderRadius:11,alignItems:'center'}}>
              <Text style={{fontSize:11,color:'white',fontWeight:'bold'}}>
               NEW
              </Text>
            </View>
            <View style={{height:40,width:40,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:30,bottom:55,right:5,position:'absolute'}}>
            <TouchableOpacity onPress={() => setNewColor('red')} >
             <AntDesign name="heart" size={24} color="grey"/>
            </TouchableOpacity>
            </View>
            <View style={{position:'absolute',bottom:4}}>
    
    <Text style={{fontSize:10,fontWeight:'bold'}}>
      <TouchableOpacity>
    <EvilIcons name="star" size={18} color="grey" />
    </TouchableOpacity>
    <TouchableOpacity>
    <EvilIcons name="star" size={18} color="grey" />
    </TouchableOpacity>
    <TouchableOpacity>
    <EvilIcons name="star" size={18} color="grey" />
    </TouchableOpacity>
    <TouchableOpacity>
    <EvilIcons name="star" size={18} color="grey" />
    </TouchableOpacity>
    <TouchableOpacity>
    <EvilIcons name="star" size={18} color="grey" />
    </TouchableOpacity>
        
   


    </Text>
  <Text style={{color:'grey',fontSize:12}}>
Dorothy Perkins
  </Text>
  <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>
 Evening Dress
  </Text>
  
  <Text style={{fontSize:15,fontWeight:'500'}}>
     {item.price}
    </Text>


  </View>
              
     
              </View>
              
        
       

      )
      }
      }
    />
  </View>
          </ScrollView>
    
    )
}


export default HomePage