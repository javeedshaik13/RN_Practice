import React from "react";
import {Text,View,StyleSheet,Pressable} from "react-native";
const CustomButton=({onPress,title="Button"})=>{
    return <Pressable onPress={onPress}
    style={{justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightblue",
        borderRadius:20,
        padding:10,
    }}
    >
        <Text style={{ color:"Purple",fontSize:20}}>{title}</Text>
    </Pressable>
}
export default CustomButton;