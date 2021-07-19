import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const Search = () => {
  return (
    <View style={ styles.main_container }>
      <TextInput style={styles.textinput} placeholder="Titre du film"/>
      <Button title="Search" onPress={() => {}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }, 
  main_container: {
    flex: 1,
    marginTop: 20
  }
})

export default Search; 
