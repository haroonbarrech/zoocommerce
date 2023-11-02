import {View, Text, StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native';
import React ,{useState}from "react";
import { EvilIcons,Ionicons,AntDesign,FontAwesome,Entypo,Foundation,MaterialCommunityIcons} from '@expo/vector-icons';
import { GlobalStyles} from "../libs/layout/constants/Styles";
import { useSelector } from 'react-redux';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


import { FlatListView,Button,LeftIcon,H1} from "../libs/layout";

const Favorite= props => {
    const GlobalStyle=GlobalStyles();
    const [icon,setIcon]=useState('true');
    const [icon1,setIcon1]=useState('true');
    const fav = useSelector((state) => state.FavoriteTab.Favourite); 
    const Products = useSelector((state) => state.HomeTab.Users1); 
    
    const finalData = () => {
        const data = [];
        for (let i = 0; i < fav?.length; i++) {
          const item = Products.find(currentProduct => currentProduct?.id === fav[i]);
          if (item) {
            data.push(item);
          }
        }
        return data;
    }
    const fData = finalData();
    
//console.warn(fData);
  return(
    <View style={{}}>
     
     <View style={{backgroundColor:'white',height:280}}>
          <View style={{width:'100%',justifyContent:'flex-end',flexDirection:'row',marginTop:60,
          paddingLeft:10}}>
  <TouchableOpacity>
  <EvilIcons name="search" style={{paddingRight:10}}size={28} color="black" />
  </TouchableOpacity>

        </View>
        <View style={{width:'100%',marginTop:40,marginLeft:10,marginBottom:10}}>
          <Text style={[
            GlobalStyle.font30,
            GlobalStyle.fw5
            ]}>
          Favorites
          </Text>

        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:"center"}}>
          <View style={{backgroundColor:'black',width:100,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity>
            <Text style={[GlobalStyle.font14,{color:'white'}]}>
              Summer
            </Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'black',width:100,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity>
            <Text style={[GlobalStyle.font14,{color:'white'}]}>
              T-Shirts
            </Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'black',width:100,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity>
            <Text style={[GlobalStyle.font14,{color:'white'}]}>
              Shirts
            </Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'black',width:100,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity>
            <Text style={[GlobalStyle.font14,{color:'white'}]}>
             Formal
            </Text>
            </TouchableOpacity>
          </View>
       
        </View>
        <View style={{width:'95%',backgroundColor:'#F9F9F9',height:30,flexDirection:'row',
        marginLeft:10,borderRadius:8,marginTop:20
       }}>
        <View style={{paddingLeft:10,width:'40%',height:30, alignItems:'center',flexDirection:'row'}}>
          <TouchableOpacity>
        <Ionicons name="filter-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{paddingLeft:10}}>
                Filters
            </Text>
            </View>
            <View style={{width:'60%',height:30,flexDirection:'row'
            ,alignItems:'center',justifyContent:'space-around'}}>
                <TouchableOpacity onPress={()=> {setIcon1(!icon1)}}>
                  {icon1?   <FontAwesome name="long-arrow-down" size={18} color="black" />:
            <FontAwesome name="long-arrow-up" size={18} color="black" />}
           
            </TouchableOpacity>
            {
            icon1?
            <Text style={{paddingLeft:0}}>
           
              Price:Lowest To Highest
            </Text>
            :
            <Text style={{paddingLeft:0}}>
              Price:Highest to Lowest
          </Text>

}
            <TouchableOpacity onPress={()=> {setIcon(!icon)}}>
            {icon?<MaterialCommunityIcons name="dots-grid" size={24} color="black" />:
            <Foundation name="list-bullet" size={24} color="black" />}

            </TouchableOpacity>
            
           
            </View>
           

        </View>
        </View>
  
  <View style={{marginLeft:5,marginRight:5,marginTop:10}}>
    <FlatList
      data={fData}
      showsVerticalScrollIndicator={true}
      renderItem={({item}) => {
        console.log(props);
        return (
        icon?
          <View style={{marginBottom:10,marginLeft:0,height:110,width:"100%",borderRadius:8,backgroundColor:'white',flexDirection:'row'}}>
            <View style={{width:150}}>
            <View style={{width:150}}>
              <Image
               source={item.mainimg}
               style={{height:110,width:150,borderRadius:12}}
              />
           
        
            </View>
            </View>
            <View style={{position:'absolute',left:12,marginTop:6,backgroundColor:'black',width:34,height:20,justifyContent:'center',
          borderRadius:11,alignItems:'center'}}>
              <Text style={{fontSize:11,color:'white',fontWeight:'bold'}}>
               NEW
              </Text>
            </View>
            <View style={{width:268,paddingLeft:10,justifyContent:'center'}}>
            <View style={{top:6,right:5,position:'absolute'}}>
            <TouchableOpacity onPress={() => setNewColor('red')} >
            <Entypo name="cross" size={24} color="grey" />
            </TouchableOpacity>
            </View>
            <View style={{}}>
            <Text style={{color:'grey',fontSize:12}}>
Dorothy Perkins
  </Text>
  <View style={{position:'absolute',right:20,bottom:-20}}>
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
    </View>

  <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>
 Evening Dress
  </Text>
  
  <Text style={{fontSize:15,fontWeight:'500'}}>
     {item.price}
    </Text>


  </View>
              
     
              </View>
              </View>
      :
      <View style={{marginLeft:20,marginTop:10}}>
      <FlatList
      horizontal
        data={fData}
        renderItem={({item}) => {
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
      
              
        
       

      )
      }
      }
    />
  </View>
      
    </View>
  );
}

export default Favorite;