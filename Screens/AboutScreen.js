import {View,Text,StyleSheet,Button} from "react-native";


export default function AboutScreen(route){
    const {name}=route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About {name} Screen</Text>
            <Button title="update the name" onPress={()=>{route.params.name="Javeed"}}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"whitesmoke",
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        color:"blue"
    
    }
})