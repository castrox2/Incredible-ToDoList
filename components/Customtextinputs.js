import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Customtextinputs = () => {
  return (
    <View style={stylescontainer}>
      <Text>Customtextinputs</Text>
      <Image>source={{ uri: "C:\\Users\\cyfro\\Videos\\Captures\\Pal   2_27_2024 3_33_17 PM.png"}}</Image>
    </View>
  );
};

export default Customtextinputs

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
    },
    logo: {
        width: 100,
        height: 100,
    }
});
