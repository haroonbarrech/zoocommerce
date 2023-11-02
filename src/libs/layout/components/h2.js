import React from 'react';
import {useDefaultQuery, applyMedia} from '../quries/useGridQuries';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import normalize from '../normalize/normalized';



export const H2 = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

    let BodyBtn = TouchableOpacity;

console.log(xsp);
    const styles = StyleSheet.create({
        textStyle: [
            {
                fontSize: 19,
                fontWeight:'500',
                marginLeft: 4,
                color: 'black',

            },
            applyMedia(xsp, {
                fontSize: normalize(24),
                
            }),
            applyMedia(smp, {
                fontSize: normalize(45)
            }),
            applyMedia(mdp, {
                fontSize: normalize(45)
            }),
            applyMedia(xlp, {
                fontSize: normalize(60)
            }),
            applyMedia(xxlp, {
                fontSize: normalize(26)
            }),
            applyMedia(xsl, {
                fontSize: normalize(17)
            }),
            applyMedia(sml, {
                fontSize: normalize(35)
            }),
            applyMedia(mdl, {
                fontSize: normalize(30)
            }),
            applyMedia(xll, {
                fontSize: normalize(45)
            }),
            applyMedia(xxll, {
                fontSize: normalize(60)
            }),
        ],
    });
    return(
       
          
            <Text style={[styles.textStyle]}>
                {props.children}
            </Text>
    
    );


}
