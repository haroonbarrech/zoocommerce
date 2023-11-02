import React from 'react';
import {useDefaultQuery, applyMedia} from '../quries/useGridQuries';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import normalize from '../normalize/normalized';



export const H3 = props => {

   const { xsp, smp, mdp, xlp, xxlp, xsl, sml, mdl, xll, xxll } = useDefaultQuery();

    let BodyBtn = TouchableOpacity;

console.log(xsp);
    const styles = StyleSheet.create({
        textStyle: [
            {
                fontSize: 19,
                fontWeight:'400',
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
                fontSize: normalize(40)
            }),
            applyMedia(xlp, {
                fontSize: normalize(55)
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
                fontSize: normalize(28)
            }),
            applyMedia(xll, {
                fontSize: normalize(40)
            }),
            applyMedia(xxll, {
                fontSize: normalize(55)
            }),
        ],
    });
    return(
       
          
            <Text style={[styles.textStyle]}>
                {props.children}
            </Text>
    
    );


}
