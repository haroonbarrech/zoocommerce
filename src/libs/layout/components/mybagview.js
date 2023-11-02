import React,{useState} from "react";
import { Text,View,TouchableOpacity} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../../../libs/layout/constants/Styles";
import * as MyBagAction from '../../../store/actions/MyBagAction';
import * as favouriteAction from '../../../store/actions/FavoriteActions';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const MyBagView=props=>{
    const [quantity, setQuantity] = useState(1);
    const [icon, seticon] = useState(false);
    const dispatch = useDispatch();
    const GlobalStyle=GlobalStyles();
    return(
        <View style={{width:'70%',backgroundColor:'white',position:'relative'}}>
        {icon?
        <View style={{backgroundColor:'white',position:'absolute',right:30,top:15,width:170,height:96,zIndex:9999,borderRadius:12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
      
      }}>
        <View style={{borderColor:'lightgrey',borderBottomWidth:1,justifyContent:'center',alignItems:"center",height:45,
      }}>
        <TouchableOpacity onPress={() => {
  dispatch(favouriteAction.add_to_Favorite(item.id));
  Alert.alert('Successfully, Added to Favorites');
  seticon(false)
}} >
          <Text style={[GlobalStyle.font12,{}]}>
            Add to Favorites
          </Text>
          </TouchableOpacity>
          </View>
          <View style={{justifyContent:'center',alignItems:"center",height:45,
      }}>
          <TouchableOpacity onPress={() => {
dispatch(MyBagAction.Remove_from_cart({id: item.id, price:item.price }));
Alert.alert('Successfully, Remove from Cart');
}} >
          <Text style={[GlobalStyle.font12,{}]}>
         Delete from the list
          </Text>
          </TouchableOpacity>
        </View>
        </View>
        :null}
      <View style={{width:'100%',height:40,flexDirection:'row'}}>
      <View style={{width:'90%',height:40}}>
      <Text style={{paddingLeft:10,paddingTop:6}}>
         {props.title}
        </Text>
      </View>
      <View style={{width:'10%',height:40,justifyContent:'center',alignContent:'center'}}>
      <TouchableOpacity onPress={()=>{seticon(!icon)}}>

      <SimpleLineIcons name="options-vertical" size={20} color="grey" />
      
    
      </TouchableOpacity>
     
      </View>
    
       
      </View>
      <View style={{height:50,marginTop:20,width:'100%',flexDirection:'row',marginLeft:10}}>
     </View>  <View style={{height:50,
            width:'65%',flexDirection:'row'}}>
               <View style={{width:'60%',flexDirection:'row',justifyContent:'space-between'}}>
               <TouchableOpacity style={quantity === 1? {opacity: 0.3} : { opacity: 1}} 
               disabled={quantity === 1? true : false}
                onPress={() => { 
                setQuantity(quantity === 1 ? 1 : quantity - 1  )
                    dispatch(MyBagAction.Quantityminus({
                        quantity: quantity,
                        id: props.id,
                        price: props.price, 
                    }));
            }    }>

                <View style={{backgroundColor:'white',height:40,width:40,borderRadius:50,alignItems:'center',
                justifyContent:'center',shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,}}>
                  <Feather name="minus" size={24} color="black" />
                 
                  
            </View>
            </TouchableOpacity>
            <Text style={[GlobalStyle.font14,{paddingTop:8}]}>
                    {quantity}
                  </Text>
                  <TouchableOpacity 
                  style={quantity === 10? {opacity: 0.3} : { opacity: 1}}
                   disabled={quantity === 10? true : false} 
                   onPress={() =>{
                     setQuantity(quantity === 10? 10 : quantity + 1)
                     dispatch(MyBagAction.Quantityplus({
                        quantity: quantity,
                        id: props.id,
                        price: props.price, 
                    }));
                   
                   }}>
            <View style={{backgroundColor:'white',height:40,width:40,borderRadius:50,alignItems:'center',
                justifyContent:'center',shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                
                elevation: 5,}}>

                  <Feather name="plus" size={24} color="black" />
                  
                
            </View>
            </TouchableOpacity>
            </View>
         
           
            <View style={{paddingTop:10,width:'30%',alignItems:'center',flexDirection:'row'}}>
            <Text style={[GlobalStyle.font20,GlobalStyle.fw8,{paddingRight:10}]}>
             $
              </Text>
              <Text style={[GlobalStyle.font18,{}]}>
                {props.price * quantity}
              </Text>
              </View>
      </View>
      </View>
    )
}

export default MyBagView;

