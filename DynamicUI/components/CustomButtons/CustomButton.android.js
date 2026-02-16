import React from "react";
import {Text,View,StyleSheet,Pressable} from "react-native";
const CustomButton=({onPress,title})=>{
    <Pressable onPress={onPress}
    style={{justifyContent:"center",
        alignItems:"center",
        backgroundColor:"pink",
        borderRadius:10,
        padding:15,
    }}
    >
        <Text style={{ color:"balck",fontSize:20}}>{title}</Text>
    </Pressable>
}
export default CustomButton;