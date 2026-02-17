import {View,Text,StyleSheet,FlatList} from "react-native";

const pokemonlist = [
    {id: '1', name: 'Pikachu'},
    {id: '2', name: 'Charmander'},
    {id: '3', name: 'Squirtle'},
];

const App=()=>{
    return(
    <View style={styles.scrollview}>
    <FlatList data={pokemonlist}
    renderItem={({item})=>{
        return(
            <View style={styles.card}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        );
    }}
    keyExtractor={(item)=>item.id.toString()}
        ItemSeparatorComponent={() => <View style={{height:16}}/>}
        ListEmptyComponent={<Text>NO items found</Text>}
        ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
        ListFooterComponent={<Text style={styles.footerText}>End of list</Text>}  
    />
</View>
    );
};


const styles=StyleSheet.create({
    scrollview:{
        flex:1,
        backgroundColor:"plum",
        padding: 16,
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
    },
    text:{
        fontSize:18,
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    footerText: {
        fontSize: 16,
        marginTop: 16,
        textAlign: 'center',
    },
});

export default App;