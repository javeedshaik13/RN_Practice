import {View,Text,StyleSheet} from 'react-native'
export default function Box({children, style}){
    return(
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    box:{
        backgroundColor:'blue',
        padding:10,
        width:100,
        height:200
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        
    }
})