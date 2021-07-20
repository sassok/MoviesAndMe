// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const FilmItem = (props) => {
  const film = props.film;
    return (
      <View style={styles.main_container}>
        <Image style={styles.movie_image} source={{}} />
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title_text}>{film.title}</Text>
              <Text style={styles.vote_text}>{film.vote_average}</Text>
            </View>
            <View style={styles.description}>
              <Text numberOfLines={6}>{film.overview}</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.date_text}>{film.release_date}</Text>
            </View>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: "row",
    marginTop: 20
  },
  header: {
    flex: 3,
    flexDirection: "row"
  },
  title_text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    flexWrap: 'wrap',
    paddingRight: 5
  }, 
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  movie_image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content: {
    flex: 1,
    flexDirection: "column",
    margin: 5
  },
  description: {
    flex: 7
  },
  date: {
    flex: 1
  },
  date_text: {
    textAlign: 'right', 
    fontSize: 14
  }
})

export default FilmItem;