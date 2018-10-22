'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Tags extends Component {
  render() {
  	
  	let tags = [];
    this.props.post.tags.map((tag) => {
      tags.push(
        <Text style={styles.tag} key={tag.id}>{tag.name}</Text>
      );
    });

    return (
      <View style={styles.tags}>{tags}</View>
    );
  }
}

const styles = StyleSheet.create({
	tags: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 10,
		flexWrap: 'wrap'
	},
	tag: {
		marginRight: 5,
    backgroundColor: "#ee6b65",
    padding: 5,
    color: "#ffffff",
    fontSize: 12,
    marginBottom: 5
	}
});


export default Tags;