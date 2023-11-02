import React from 'react';
import {useDefaultQuery, applyMedia} from '../quries/useGridQuries';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import normalize from '../normalize/normalized';



export const H4 = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

    let BodyBtn = TouchableOpacity;

console.log(xsp);
    const styles = StyleSheet.create({
        textStyle: [
            {
                fontSize: 19,
                fontWeight:'300',
                marginLeft: 4,
                color: 'black',

            },
            applyMedia(xsp, {
                fontSize: normalize(20),
                
            }),
            applyMedia(smp, {
                fontSize: normalize(35)
            }),
            applyMedia(mdp, {
                fontSize: normalize(30)
            }),
            applyMedia(xlp, {
                fontSize: normalize(40)
            }),
            applyMedia(xxlp, {
                fontSize: normalize(26)
            }),
            applyMedia(xsl, {
                fontSize: normalize(17)
            }), 
            applyMedia(sml, {
                fontSize: normalize(28)
            }),
            applyMedia(mdl, {
                fontSize: normalize(24)
            }),
            applyMedia(xll, {
                fontSize: normalize(30)
            }),
            applyMedia(xxll, {
                fontSize: normalize(40)
            }),
        ],
    });
    return(
       
          
            <Text style={[styles.textStyle]}>
                {props.children}
            </Text>
    
    );


}

