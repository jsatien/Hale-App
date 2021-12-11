import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
  return (
    
    <>
      <SafeAreaView style={styles.container}>
        <View style={{padding:15, backgroundColor: "green"}}>
        <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
        </View>
        <View style={styles.search}>
          <Text>
            Search
          </Text>
        </View>
        <View style={styles.list}>
            <Text>
              List
            </Text>
          </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto"/>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    marginTop: StatusBar.currentHeight, 
    backgroundColor: "orange" 
  },
  search: {
    flex:1, 
    padding:15, 
    backgroundColor: "orange"
  },
  list: {
    flex:1, 
    padding:15, 
    backgroundColor: "blue"
  }
});
