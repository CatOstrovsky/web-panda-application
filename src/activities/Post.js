import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native'
import Statistics from '../components/news/Statistics'
import HTML from 'react-native-render-html';
import Tags from '../components/news/Tags'

type Props = {};
let tagsStyles = {
  pre: {
    backgroundColor: '#f7f7f9',
    fontSize: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#777777',
    marginBottom: 15
  },
  code: {
    padding: 15,
    color: '#333333'
  }
};

export default class Index extends Component<Props> {

  static navigationOptions = {
    title: ''
  }

  render() {
    const { navigation } = this.props;
    let post = navigation.getParam('post');

    return (
      <ScrollView style={styles.wrapper}>
          <Text style={styles.title}>{post.name}</Text>
          <Tags post={post}/>
          <Statistics post={post}/>
          <HTML html={post.content} 
          imagesMaxWidth={Dimensions.get('window').width - 30} 
          allowedStyles={['color', 'font-size', 'font-weight']}
          tagsStyles={tagsStyles}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  }
});
