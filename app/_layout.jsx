import { Stack } from "expo-router";
import React from 'react';

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="about" options={{ headerShown: true }} />
            <Stack.Screen name="App" options={{headerShown:false}}/>
            {/* <Stack.Screen name="dynamic" options={{headerShown:false}}/> */}
        </Stack>
    )
}

export default Layout;
        