import {Text,View,StyleSheet,SafeAreaView,Platform,TextInput,KeyboardAvoidingView,Switch} from "react-native";
import {Button} from "react-native";;
import {useState} from "react";
const App=()=>{
const [name,setName]=useState("");
const [password,setPassword]=useState("");
const [isdaarkmode,setIsDarkMode]=useState(false);
const [errors,setErrors]=useState({});
const [postTitle,setPostTitle]=useState("");
const [postBody,setpostBody]=useState("");
const [postList,setPostList]=useState([]);
const [isPosting,setIsPosting]=useState(false);
const [error,seterror]=useState("");
const [refreshing,setRefreshing]=useState(false);


const validationForm=()=>{
    let errors={};
    if(!name) errors.name="Name is required";
    if(!password) errors.password="Password is required";
    setErrors(errors);
    return Object.keys(errors).length==0;
}
const handleSubmit=()=>{
    console.log("submitted form ");
    if(validationForm()){
        console.log("form is valid");
        setName("");
        setPassword("");
    }else{
        console.log("form is invalid");
    }
}
const fetchData = async () => {
    // Add your data fetching logic here
    return Promise.resolve();
}

const handleRefresh=()=>{
    setRefreshing(true);
    fetchData().then(()=>{
        setRefreshing(false);
    })
} 
const handlePost= async ()=>{
setIsPosting(true);
try{
const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        title:postTitle,
        body:postBody,}),
    });
const newPost=await response.json();
setPostList([...postList,newPost]);
setPostTitle("");
setpostBody("");
setIsPosting(false);
seterror("");
}
catch(error){
    console.log(error);
    setIsPosting(false);
seterror(error.message);
}
}
return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS==="ios"?100:0} style={styles.container}>
           {error?(
            <Text style={{color:"red"}}>{error}</Text>)
           :(
           <>
           <View style={styles.inputContrainer}>
            <TextInput style={styles.input}
            placeholder="Post title"
            value={postTitle}
            onChangeText={setPostTitle}
            />
            <TextInput style={styles.input}
            placeholder="Post body"
            value={postBody}
            onChangeText={setpostBody}
            multiline={true}
            />
            <Button title={isPosting?"Posting...":"Post"} onPress={handlePost} disabled={isPosting}/>
            </View>
            <TextInput style={styles.text}
            value={name}
            onChangeText={setName}
            placeholder="example@gmail.com"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"/>
            {
                errors.name && <Text style={{color:"red"}}>{errors.name}</Text>
            }
            <TextInput style={styles.text}
            value={password}
            onChangeText={setPassword}
            placeholder="password"
            keyboardType="password"
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize="none"/>
            {
                errors.password && <Text style={{color:"red"}}>{errors.password}</Text>
            }
            <Text style={[styles.text,styles.multilineText]}>Good morning {name}</Text>
            <TextInput style={styles.input} placeholder="message" multiline={true}/>
            <View style={styles.switchcontainer}>
                <Text style={styles.text}>switch</Text>
                <Switch value={isdaarkmode} onValueChange={setIsDarkMode}/>
                <Button title="submit" onPress={handleSubmit}/>
            </View>
            </>
           )}
    </KeyboardAvoidingView>
    )
}

export default App;

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
    },
    multilineText:{
        minHeight:100,
        textAlignVertical:"top"
    },
    input:{
        height:100,
        width:"80%",
        borderWidth:1,
        borderColor:"black",
        borderRadius:5,
        padding:10,
        marginTop:20
    },
    switchcontainer:{
        flexDirection:'row',
        alignItems:"center",
        marginTop:20
    },
    inputContrainer:{
        width:"100%",
        alignItems:"center",
        borderRadius:5,
        padding:10,
        marginTop:20    
    },
    input:{
        height:100,
        width:"80%",
        borderWidth:1,
        borderColor:"black",  
        marginBottom:10,
        borderRadius:5,
        padding:10,
        marginTop:20
      
    }

})