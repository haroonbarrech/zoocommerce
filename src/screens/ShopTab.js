import React ,{useState}from "react";
import { View ,Image, Text, StyleSheet, TouchableOpacity,Alert} from "react-native";
import { LeftIcon,H1, Email,Password,Button,CircularButton,FlatListView} from "../libs/layout/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles} from "../libs/layout/constants/Styles";
import { useSelector, useDispatch } from "react-redux";
import * as MyBagAction from '../store/actions/MyBagAction';
import Tooltip from 'react-native-walkthrough-tooltip';
import * as favouriteAction from '../store/actions/FavoriteActions';



const CategoriesTwo= props => {
  const [change,setchange]=useState(false);
  const [product,setproduct]=useState(null);
  const [price, setPrice] = React.useState(0);
  const data = useSelector((state) => state.Categories2Tab.Categories2);
  const bag= useSelector((state) => state. MyBagTab.Bag);  
  const fav = useSelector((state) => state.FavoriteTab.Favourite);  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const GlobalStyle=GlobalStyles();

  
    return(
      <View style={{position:'relative',flex:1}}>
{change?   <View style={{backgroundColor:'#F9F9F9',borderTopRightRadius:20,borderTopLeftRadius:20,
        position:'absolute',bottom:0,height:350,width:'100%',justifyContent:'space-evenly',zIndex: 2}}>
          <View style={[,{justifyContent:'center',alignItems:'center'}]}>
          <Text style={[
        GlobalStyle.font28
       ]}>
      Select Your Size
       </Text>

          </View>
          <View style={[,{padding:10,justifyContent:"space-between",alignItems:'center',flexDirection:'row',height:60,width:'80%'}]}>
          <TouchableOpacity>
          <View style={{height:40,borderWidth:1,borderColor:'grey',width:100,backgroundColor:'white',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
          <Text style={[
        GlobalStyle.font14
       ]}>
     XS
       </Text>
            
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{height:40,width:100,borderWidth:1,borderColor:'grey',backgroundColor:'white',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
          <Text style={[
        GlobalStyle.font14
       ]}>
     M
       </Text>
            
            </View>
            </TouchableOpacity>
              <TouchableOpacity>
              <View style={{height:40,borderWidth:1,borderColor:'grey',width:100,backgroundColor:'white',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
          <Text style={[
        GlobalStyle.font14
       ]}>
     S
       </Text>
            
            </View>
            </TouchableOpacity>
   
            
            
          </View>
                       <View style={[,{padding:10,justifyContent:"space-between",alignItems:'center',flexDirection:'row',height:60,width:"55%"}]}>
              <TouchableOpacity>
               <View style={{height:40,borderWidth:1,borderColor:'grey',width:100,backgroundColor:'white',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
          <Text style={[
        GlobalStyle.font14
       ]}>
     L
       </Text>
            
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
               <View style={{height:40,width:100,borderWidth:1,borderColor:'grey',backgroundColor:'white',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
          <Text style={[
        GlobalStyle.font14
       ]}>
     XL
       </Text>
            
            </View>
            </TouchableOpacity>
            </View>
            <View style={{height:50,flexDirection:'row',padding:10,borderColor:'lightgrey',
            borderTopWidth:1,borderBottomWidth:1,justifyContent:'space-between',alignItems:'center'}}>
            <Text style={[
        GlobalStyle.font14
       ]}>
    Size Info
       </Text>
       <TouchableOpacity>
       <EvilIcons name="chevron-right" size={24} color="black" />
 
       </TouchableOpacity>
      
            </View>
            {/*---------------------------Add To CART------------------------------------------*/}
<TouchableOpacity onPress={() => {
    
    dispatch(MyBagAction.add_to_cart({id: product, price:price }));
    Alert.alert('Successfully, Add To Cart');
    setchange(false)
  }} >
 
        <View style={{justifyContent:'center',alignItems:"center"}}>
       <View style={{width: '80%',height:50,borderRadius:30,marginTop:20,paddingLeft:20,justifyContent:'center',alignItems:"center",
       paddingRight:20,backgroundColor:'#DB3022'}}>
       <Text style={[
        GlobalStyle.font20,{color:"white"}]}>
 Add to Cart
       </Text>
       

        </View>
        </View>
        </TouchableOpacity>  
        
        </View>:null}
     

     
        <View style={{backgroundColor:'white',height:280}}>
          <View style={{width:'100%',justifyContent:'space-between',flexDirection:'row',marginTop:60,
          paddingLeft:10}}>
  <TouchableOpacity  onPress={() => navigation.goBack()}>
  <Ionicons name="chevron-back-outline" size={24} color="black" />
  </TouchableOpacity>

  <TouchableOpacity>
  <EvilIcons name="search" style={{paddingRight:10}}size={28} color="black" />
  </TouchableOpacity>

        </View>
        <View style={{width:'100%',margin:10}}>
        <H1>Women’s tops</H1>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:"center"}}>
          <TouchableOpacity>
          <View style={{backgroundColor:'black',width:100,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
            <Text style={[GlobalStyle.font14,{color:'white'}]}>
              Summer
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{backgroundColor:'black',width:100,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
            <Text style={[GlobalStyle.font14,{color:'white'}]}>
             T-Shirts
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{backgroundColor:'black',width:100,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
            <Text style={[GlobalStyle.font14,{color:'white'}]}>
              Shirts
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{backgroundColor:'black',width:100,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
            <Text style={[GlobalStyle.font14,{color:'white'}]}>
          Formal
            </Text>
          </View>
          </TouchableOpacity>
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
              <TouchableOpacity>
            <FontAwesome name="long-arrow-up" size={18} color="black" />
            </TouchableOpacity>
            <Text style={{paddingLeft:0}}>
              Price:lowest to high
            </Text>
            <TouchableOpacity>
            <Fontisto name="filter" size={18} color="black" />

            </TouchableOpacity>
            
           
            </View>
           

        </View>
        </View>
      
          <View style={{}}>
          <FlatListView
              data={data}
              onRenderItem={(item) => {
          return(
            <TouchableOpacity onPress={()=>{
              setchange(!change);
              setproduct(item.id);
              setPrice(item.price);

              }}>
            <View style={{position:'relative',backgroundColor:'white',width:'94%',height:100,flexDirection:'row',marginTop:25,marginHorizontal:10,
            borderRadius:8}}>
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
              <Text style={{fontSize:14,fontWeight:'bold'}}>
               {item.price}
              </Text>
            </View>
            <Tooltip>
            <View style={{height:40,width:40,backgroundColor:'lightgrey',justifyContent:'center',alignItems:'center',borderRadius:30,bottom:-15,right:-50,position:'absolute'}}>
            <TouchableOpacity onPress={() => {fav.includes(item.id)? dispatch(favouriteAction.Delete_from_Favorite(item.id)) : dispatch(favouriteAction.add_to_Favorite(item.id))
            
            Alert.alert('Successfully, Add To Favorites');
            }}
            >
             <AntDesign name="heart" size={24} color={fav.includes(item.id)? 'red' : 'grey' }/>
           
            </TouchableOpacity>
            </View>
            </Tooltip>
            
            </View>
            </TouchableOpacity>
            
            
     
          );
        }}

            />
            </View>
            </View>
          
          
    
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
export default CategoriesTwo;