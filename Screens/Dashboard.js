import {View,Text,StyleSheet,Button} from "react-native";

export default function Dashboard({navigation}){
return (
    <View style={styles.container}>
        <Text>Dashboard screen</Text>
        <Button title="go to settings" onPress={()=>navigation.navigate("Settings")}/>
        <Button title="go to profile" onPress={()=>navigation.navigate("Profile")}/>

    </View>)
}



const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"whitesmoke"
}
})