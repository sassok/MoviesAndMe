import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import DATA from '../Helpers /filmsData';
import FilmItem from './FilmItem';
import getFilmsFromApiWithSearchedText from '../API/TMDBApi';

const Search = () => {
  const [film, setFilm] = useState([]);
  let wordSearch = '';

  const LoadFilms = () => {
    if (wordSearch.length > 0) {
      getFilmsFromApiWithSearchedText(wordSearch).then(data => setFilm(data.results));
    }
  }
  const SearchTextInputChanged = (text) => {
    wordSearch = text;
  }

  return (
    <View style={ styles.main_container }>
      <TextInput 
        style={styles.textinput} 
        placeholder="Titre du film"
        onChangeText={(text) => SearchTextInputChanged(text)}/>
      <Button title="Search" onPress={() => {LoadFilms()}}/>
      <FlatList
          data={film}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
      />
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
