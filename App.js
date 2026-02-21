import {StyleSheet,View} from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "./Screens/Dashboard";
import ProfileScreen from "./Screens/Profile";
import SettingsScreen from "./Screens/Settings";
import CoursesListScreen from "./Screens/CoursesList";
import HomeScreen from "./Screens/HomeScreen";
// import AboutScreen from "./Screens/AboutScreen";

const Drawer=createDrawerNavigator();
const Tab=createBottomTabNavigator();       
import Box from "../components/Box";


export default function App(){
        // <View style={styles.container}>
        //     <Box style={{backgroundColor:"red"}}>Box-1</Box>
        //     <Box style={{backgroundColor:"green"}}>Box-2</Box>
        //     <Box style={{backgroundColor:"yellow"}}>Box-3</Box>
        //     <Box style={{backgroundColor:"blue"}}>Box-4</Box>
        //     <Box style={{backgroundColor:"pink"}}>Box-5</Box>
        //     <Box style={{backgroundColor:"orange"}}>Box-6</Box>
        //     <Box style={{backgroundColor:"purple"}}>Box-7</Box>
        //     <Box style={{backgroundColor:"brown"}}>Box-8</Box>
        // </View>
{/* <NavigationContainer>
    <DrawerActions.Screen name="Dashboard" component={DasshboardScreen}/>
    <DrawerActions.Screen name="Profile" component={ProfileScreen}/>
    <DrawerActions.Screen name="Settings" component={SettingsScreen}/>
</NavigationContainer> */}
return (
<NavigationContainer>
    <Tab.Navigator screenOptions={{
        tabBarLabelPosition:"below-icon",
        tabBarShowLabel:true,
        tabBarActiveTintColor:"purple"}
    }>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Dashboard" component={DashboardScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
        <Tab.Screen name="CoursesList" component={CoursesListScreen}/>
    </Tab.Navigator>
    </NavigationContainer>
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