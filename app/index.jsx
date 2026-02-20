import {View,Button,Text,ScrollView,StyleSheet,Image,Pressable,Alert,Modal,ActivityIndicator,StatusBar,Platform} from 'react-native';
import React,{useState} from 'react';
import {Link} from 'expo-router';
import Forms from '../RNForms/App';
// import CustomButton from "../DynamicUI/components/CustomButtons"




const Index=() => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handlePress = () => {
        if (Platform.OS === 'web') {
            window.alert('Button clicked');
        } else {
            Alert.alert('Button clicked');
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hi 😊😎hello welcome to React Native! application</Text>
           <Button
        title="Click Me"
        onPress={handlePress}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image source={{uri:'https://imgs.search.brave.com/pkTapbEmlnPa6ynA8TF6NOgP7WvDMnH3pGlylo8CT_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NC8yMi8xNy8zNi93/b29kZW4tcy0xMzQ2/MjAxXzY0MC5wbmc'}} style={styles.Image}></Image>
            <Text style={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dignissimos incidunt ab labore aspernatur eligendi facere reiciendis sed necessitatibus? Dolorem eum eos odit vitae itaque sunt tempora, maxime libero pariatur.
            Maxime voluptates nulla nam quidem sint animi, quaerat corporis eveniet. Expedita et rem aliquam recusandae minima illo? A, beatae nostrum dolores id architecto alias, explicabo aliquam iure consectetur nemo eos!
          !</Text>
            </ScrollView>

            <ActivityIndicator size="large" color="#0000ff" />
             <StatusBar style="auto" />
             <Link href="/about">Go to About Page</Link>    

             <Pressable onPress={()=>Alert.alert("clicked")}>
                <Text style={styles.text}>Press me</Text>
             </Pressable>

                <Modal visible={isModalVisible} transparent={true}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <View style={{backgroundColor:'white',padding:20,borderRadius:10}}>
                            <Text style={styles.text}>Modal is visible!</Text>
                            <Button title='close' color="red" onPress={()=>setIsModalVisible(false)}/>
                        </View>
                    </View>
                </Modal>   
                <Button title="Show Modal" onPress={()=>setIsModalVisible(true)} /> 

                {/* <CustomButton/> */}
                <Forms/>
        
        </View>
    )
}
export default Index;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'whitesmoke',
        alignItems:'center',
        justifyContent:'center'
    },
    scrollContainer: {
  flexGrow: 1,
  alignItems: 'center',
  padding: 20,
  backgroundColor:'lightblue'
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        color:'black'
    },
    Image:{
        width:120,
        height:200,
        resizeMode:'contain'
    }
});