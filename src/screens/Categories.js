import React from "react";
import { View ,Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FlatListView,Button} from "../libs/layout";
import { useSelector } from "react-redux";
import { GlobalStyles } from "../libs/layout/constants/Styles";







const Categories= props => {
  const GlobalStyle=GlobalStyles();
  const data = useSelector((state) => state.Categories1Tab.Categories);
    return(
      <View>
        
      
        <View style={{width: '100%',marginTop:20}}>
     <Button
            iconRight={false}
            rightIconName={'bookmark'}
            iconleft={false}
            leftIconName={'bookmark'}
            title="VIEW ALL ITEMS"
   onPress={()=>{props.navigation.navigate('')}}
            style={{
              justifyContent: 'space-between',
            }}
            textStyle={{width:'100%'}}
            iconStyle={{position: 'absolute', left:15,}}
        />
        </View>
        <View style={{width: '100%',marginTop:10}}>
          <Text style={[GlobalStyle.font14,{paddingLeft:20,color:'grey'}]}>
            Choose Category

          </Text>
 
        </View>
          <View style={{marginTop:10}}>
          <FlatListView
              data={data}
              onRenderItem={(item) => {
          return(
         

         
            <View style={{backgroundColor:'transparent',width:'100%',height:40,flexDirection:'row',borderBottomWidth:1,borderColor:'lightgrey',borderRadius:8}}>

          
            <View style={{backgroundColor:item.color,width:'100%',justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('check')}>
                <Text style={{fontSize:16,fontWeight:'200',color:'#222222',paddingLeft:20}}>
               {item.title}
              </Text>

                </TouchableOpacity>
            
            </View>
         
            </View>
            
            
     
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
export default Categories;