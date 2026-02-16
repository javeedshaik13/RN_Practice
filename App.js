import {StyleSheet,View} from "react-native";
import Box from "../components/Box";
export default function App(){
    return (
        <View style={styles.container}>
            <Box style={{backgroundColor:"red"}}>Box-1</Box>
            <Box style={{backgroundColor:"green"}}>Box-2</Box>
            <Box style={{backgroundColor:"yellow"}}>Box-3</Box>
            <Box style={{backgroundColor:"blue"}}>Box-4</Box>
            <Box style={{backgroundColor:"pink"}}>Box-5</Box>
            <Box style={{backgroundColor:"orange"}}>Box-6</Box>
            <Box style={{backgroundColor:"purple"}}>Box-7</Box>
            <Box style={{backgroundColor:"brown"}}>Box-8</Box>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:64,
        borderWidth:6,
        // borderColor:"red"
    }
})