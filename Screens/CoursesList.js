import {View,Text,StyleSheet} from "react-native";

export default function CoursesList(){
return (
    <View style={styles.container}>
        <Text>Courses List screen</Text>
    </View>)
}



const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"whitesmoke"
}
})