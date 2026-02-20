import { Text, View, StyleSheet, Platform, TextInput, KeyboardAvoidingView, Switch, Statusbar, FlatList ,ActivityIndicator} from "react-native";
import { useState, useEffect } from "react";


const Networking = () => {
    const [postList, setPostList] = useState([]);
    const [isloading,setIsLoading] = useState(true);
    const [refreshing,setIsRefreshing] = useState(false);
    const fetchData = async (limit = 10) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=${limit}`);
        const data = await response.json();
        setPostList(data);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);
    if(isloading){
        return (
            <View style={styles.loadingcontainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList data={postList} renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.titletext}>{item.title}</Text>
                            <Text style={styles.bodyText}>{item.body}</Text>
                        </View>
                    );
                }} keyExtractor={(item) => item.id.toString()} />

                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={<Text style={styles.emptyText}>No items found</Text>}
                ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
                ListFooterComponent={<Text style={styles.footerText}>End of list</Text>}
                refreshing={refreshing}
                onRefresh={() => {
                    setIsRefreshing(true);
                    fetchData().then(() => setIsRefreshing(false));
                }}
            </View>
        </View>
    );
}

export default Networking;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Statusbar.currentHeight
    },
    listContainer: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
    },
    titletext: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    bodyText: {
        fontSize: 24,
        color: "black",
    },
    separator: {
        height: 16,
    },
    emptyText: {
        fontSize: 16,
        marginTop: 16,
        textAlign: "center",
    
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    footerText: {
        fontSize: 16,
        marginTop: 16,
        textAlign: "center",
    },
    card: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    loadingcontainer:{
        flex:1,
        paddingTop:Statusbar.currentHeight,
        backgroundColor:"plum",
        alignItems:"center",
        justifyContent:"center"
    }
})