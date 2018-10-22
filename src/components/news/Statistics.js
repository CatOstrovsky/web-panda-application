'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Share
} from 'react-native';
import Eye from '../../assets/images/view.png'
import Icon from 'react-native-vector-icons/FontAwesome';

class Statistics extends Component {

  share() {
    let post = this.props.post;

    Share.share({
      message: post.intro,
      url: `https://web-panda.ru/post/${post.slug}`,
      title: post.name
    }, {
      dialogTitle: 'Поделиться WEB-PANDA',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }

  render() {
    let author = this.props.post.author;
    let views = this.props.post.views_count;

    return (
      <View style={styles.wrapper}>
        <Image source={{ url: author.avatar }} style={styles.avatar}/>
        <Text style={styles.author_name}>{ author.name } { author.last_name }</Text>
        <View style={styles.views}>
          <Image source={Eye}/>
          <Text style={styles.eye_count}>{views}</Text>
        </View>
        <TouchableOpacity onPress={()=>this.share()}>
          <Icon size={15} name={ 'share' } style={{ color: "#ee6b65" }} />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#eaeaea',
    padding: 5
  },
  author_name: {
    fontSize: 13,
    fontWeight: '500'
  },
  eye_count: {
    marginRight: 5,
    marginLeft: 10,
    fontSize: 13
  },
  avatar: {
    marginRight: 15,
    width: 30,
    height: 30,
    borderRadius: 15
  },
  views: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});


export default Statistics;