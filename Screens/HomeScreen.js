import {View,Text,StyleSheet,Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
export default function HomeScreen({navigation}){
    const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            {/* <Button title="go to home" onPress={()=>{navigation.navigate("Home")}}/> */}
            <Button title="go to about" onPress={()=>{navigation.navigate("About",{
                name:"Javeed"
            })}}/>
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