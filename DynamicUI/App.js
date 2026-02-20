// import {Text,View,StyleSheet,useWindowDimensions} from "react-native";
// // import {Dimensions} from "react-native";
// // import {useState,useEffect} from "react";

// export default function App(){
//     const windowHeight=useWindowDimensions.height;
//     const windowWidth=useWindowDimensions.width;
//     // const [dimensions,setDimensions]=useState({
//     //     window:Dimensions.get("window")
//     // });
//     // useEffect(()=>{
//     //     const subscription=Dimensions.addEventListener("change",({window})=>{
//     //         setDimensions({window});
//     //     });
//     //     return ()=>subscription?.remove();
//     // })
//     // const {window}=dimensions;
//     // const windowHeight=window.height;
//     // const windowWidth=window.width;
//     return (
//         <View style={styles.container}>
//             <View style={[styles.Box,{
//                 width:windowWidth>500?"70%":"90%",
//                 height:windowHeight>500?"50%":"70%",
//             }]}>
//                 <Text style={{fontSize:windowWidth>500?50:24}}>Welcome home !</Text>
//             </View>
//         </View>
//     )
// }


// // const windowHeight=Dimensions.get("window").height;
// // const windowWidth=Dimensions.get("window").width;
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:"plum",
//         alignItems:"center",
//         justifyContent:"center"
    
//     },
//     Box:{
//         // width:windowWidth>500?"70%":"90%",
//         // height:windowHeight>500?"50%":"70%",
//         backgroundColor:"lightblue",
//         alignItems:"center",
//         justifyContent:"center",
//     },
//     // Text:{
//     //     fontSize:20,
//     //     color:"black"
//     // }
// })



import {Text,View,StyleSheet,SafeAreaView,Platform} from "react-native";
import CustomButton from "./components/CustomButtons";
export default function App(){
    return (
        <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
            
            <View style={styles.box}>
                <Text style={styles.text}>Box-2</Text>
                <CustomButton title="Button-2" onPress={()=>alert("Pressed")}></CustomButton>
            </View>
            </View>
            </SafeAreaView>
            
    );
}



const styles=StyleSheet.create({
    safeAreaView:{
        flex:1,
        backgroundColor:"plum"
    },
    container:{
        flex:1,
        backgroundColor:"plum",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:Platform.OS==="android"?30:0,
    },
    box:{
        padding:20,

    },
    text:{
        ...Platform.select({
            ios:{
                fontSize:20,
                fontStyle:"italic",
            },
            android:{
                fontFamily:"serif",
                fontSize:100,
            }
        }),
        color:"black",
        fontWeight:"bold"
    }
})