import React,{useState} from "react";
import { View ,Image, ScrollView,Text, StyleSheet, TouchableOpacity} from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ScrollListView } from "../libs/layout";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'



 
const Data = [
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
  
]



const FavoritePage= props => {
  const [oldColor, setNewColor] =  useState('');
    return(
        <ScrollView style={{}}>
      
           <View style={{paddingLeft:10,paddingRight:10,flexDirection:'row',marginTop:40,alignItems:'center',justifyContent:'space-between'}}>
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
         <View style={{marginLeft:20,marginTop:10}}>
    <SwiperFlatList
      data={Data}
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
            <View style={{height:40,width:40,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:30,bottom:55,right:5,position:'absolute'}}>
            <TouchableOpacity onPress={() => setNewColor('red')} >
             <AntDesign name="heart" size={24} color="grey"/>
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
  <View style={{paddingLeft:10,paddingRight:10,flexDirection:'row',marginTop:40,alignItems:'center',justifyContent:'space-between'}}>
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
         <View style={{marginLeft:20,marginTop:10}}>
    <SwiperFlatList
      data={Data}
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

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        
    },



});
export default FavoritePage;