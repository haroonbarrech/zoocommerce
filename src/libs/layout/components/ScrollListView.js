import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';



export const ScrollListView = props => {

    {props.data.map((index) => {
        return props.onRenderItem(index);
      })}


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
