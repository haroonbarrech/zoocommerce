import React from "react";
import { View ,Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import { FlatListView } from "../libs/layout";
import { useSelector } from "react-redux";



const ShopPage= props => {
  const data = useSelector((state) => state.CategoriesTab.Women);
  const Men = useSelector((state) => state.CategoriesTab.Men);
  const Kids = useSelector((state) => state.CategoriesTab.Kids);
  

  const [finalData, setFinalData] = React.useState(data);
    return(
      <View>
        
        <View style={{
            marginTop:10,marginBottom:10,height:30,backgroundColor:'white',justifyContent:'space-around',alignItems:'center',flexDirection:'row'
          }}>
           <TouchableOpacity onPress={() => setFinalData(data)}>
            <Text style={{
            fontSize:16,
          }}>
         Women
          </Text>
            </TouchableOpacity>
       <TouchableOpacity onPress={() => setFinalData(Men)}>
       <Text style={{
            fontSize:16,
          }}>
         Men
          </Text>

       </TouchableOpacity>
       <TouchableOpacity onPress={() => setFinalData(Kids)}>
         <Text style={{
            fontSize:16,
          }}>
         Kids
          </Text>

         </TouchableOpacity>
         
          </View>
          <TouchableOpacity>
          <View style={{backgroundColor:'#DB3022',marginTop:18,marginLeft:8,justifyContent:'center',alignItems:'center',width:"96%",height:100,borderRadius:8}}>
          <Text style={{fontSize:24,color:'white'}}>
      SUMMER SALES
          </Text>
          <Text style={{fontSize:18,color:'white'}}>
          Up to 50% off
          </Text>

          </View>

          </TouchableOpacity>
        
          <View style={{marginTop:20,marginBottom:20}}>
          <FlatListView
              data={finalData}
              onRenderItem={(item) => {
          return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('Categories')}>

           
            <View style={{backgroundColor:'white',width:'95%',height:100,flexDirection:'row',marginTop:10,marginHorizontal:10,borderRadius:8}}>

          
            <View style={{backgroundColor:item.color,width:'50%',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:18,fontWeight:'bold'}}>
               {item.title}
              </Text>
            </View>
              <View style={{width:'50%',alignItems:'center',justifyContent:'center'}}>
          
            <Image 
                source={item.img}
                style={{width:"100%",height:100,borderTopRightRadius:8,borderBottomRightRadius:8}}

              />
             
            </View>
            </View>
            </TouchableOpacity>
            
            
     
          );
        }}

            />
            </View>
            <View style={{marginBottom:10}}></View>
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
export default ShopPage;