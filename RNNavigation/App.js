import {NavigationContainer} from  "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";
import AboutScreen from "../Screens/AboutScreen"

const Stack=createStackNavigator();
export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title:"welcome home",
                headerStyle:{
                    backgroundColor:"plum"
                },
                headerTintColor:"white",
                headerTitleStyle:{
                    fontWeight:"bold"
                },

                headerRight:()=>(
                    <Pressable onPress={()=>alert("menu button pressed")}>
                        <Text style={{color:"white",marginRight:10}}>Menu</Text>
                    </Pressable>
                ),
                contentStyle:{
                    backgroundColor:"plum"
                }
                }}
                />
                <Stack.Screen name="About" component={AboutScreen} initialParams={{
                    name:"Shaik Javeed"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}