import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Demo = props => {
  return(
    <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('OrderD')}>
    <View style={{alignItems:'center',justifyContent:'center',
    height:300,width:300,backgroundColor:'lightblue',borderRadius:400}}>

      <Text>Touch Here</Text>
     
      
    </View>
    </TouchableOpacity>
    </View>
  );
}

export default Demo;