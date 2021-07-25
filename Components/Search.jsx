import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator } from 'react-native';
import FilmItem from './FilmItem';
import getFilmsFromApiWithSearchedText from '../API/TMDBApi';

const Search = () => {
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [wordSearch, setWordSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  

  const LoadFilms = () => {
    if (wordSearch.length > 0) {
      setIsLoading(true)
      console.log(page)
      getFilmsFromApiWithSearchedText(wordSearch, page).then(data => {
        setPage(data.page + 1);
        setTotalPages(data.total_pages);
        setFilm([ ...film, ...data.results ]);
        setIsLoading(false);
      })
    }
  }

  const SearchFilms = () => {
    setFilm([]);
    setPage(0);
    setTotalPages(0);
    console.log("Page : " + page + " / TotalPages : " + totalPages + " / Nombre de films : " + film.length)
    LoadFilms()
  }

  const DisplayLoading = () => {
    if (isLoading) {
      return (
        <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
        </View>
      );
    }
  }
  return (
    <View style={styles.main_container}>
      <TextInput 
        style={styles.textinput} 
        placeholder="Titre du film"
        onChangeText={(text) => setWordSearch(text)}
        onSubmitEditing={() => SearchFilms()}/>
      <Button title="Search" onPress={() => SearchFilms()}/>
      <FlatList style={styles.FlatList}
          data={film}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (page < totalPages) {
              LoadFilms();
            }
          }}
      />
      {DisplayLoading()}
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
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  FlatList: {
    flex: 1
  }
})

export default Search; 
