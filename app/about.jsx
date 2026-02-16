import { View,Text,StyleSheet } from "react-native";
import Box from "../components/Box";

const About=()=>{
    return (
<View style={styles.container}>
    {/* <Text>About Page</Text> */}
    <Box style={{backgroundColor:"red"}}>Box-1</Box>
    <Box style={{backgroundColor:"green",alignSelf:"flex-end"}}>Box-2</Box>
    <Box style={{backgroundColor:"yellow",alignSelf:"stretch"}}>Box-3</Box>
    <Box style={{backgroundColor:"blue",flexBasis:140}}>Box-4</Box>
    <Box style={{backgroundColor:"pink"}}>Box-5</Box>
    <Box style={{backgroundColor:"orange"}}>Box-6</Box>
    <Box style={{backgroundColor:"purple"}}>Box-7</Box>
    <Box style={{backgroundColor:"brown"}}>Box-8</Box>
    </View>
    )
}
export default About;   

const styles=StyleSheet.create({
    container:{
        flex:1,
        height:300,
        width:"100%",
        // alignItems:"stretch",
        flexDirection:"row",
        // rowGap:10,
        // columnGap:10,
        // gap:20,
        // flexWrap:"wrap-reverse",
        justifyContent:"space-around",
        alignItems:"center",
        alignContent:"space-between",
        marginTop:64,
        borderWidth:6,
        borderColor:"red",
        
    }
})