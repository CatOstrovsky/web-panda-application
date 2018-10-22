import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  RefreshControl,
  Dimensions
} from 'react-native';
import Statistics from './Statistics'
import Tags from './Tags'
import Listed from '../../toolbox/Lists'

class List extends Listed {
  constructor(props) {
    super(props);

    this.url = "https://api.web-panda.ru/api/posts";
    this.LoadPosts();
  }
 
  render() {

  	let posts = [];
  	this.state.posts.data.map((post) => {
  		let introtext = post.introtext.replace(/<(?:.|\n)*?>/gm, '');
  		const { navigate } = this.props.navigation;

  		posts.push(
  			<View key={post.id} style={styles.PostWrapper}>
          <TouchableOpacity onPress={ () => navigate('Post', {post: post}) }>
            <View>
      				<Image source={{url : post.preview}} style={styles.PostImage}/>
      				<View style={styles.PostTextWrapper}>
    	  				<Text style={styles.PostTitle}>{post.name}</Text>
    	  				<Text style={styles.PostText}>{introtext}</Text>
      				</View>
            </View>
          </TouchableOpacity>
          <Tags post={post}/>
          <Statistics post={post}/>
  			</View>
  		);
  	})


    let ShowMore = false;
    if(this.state.showMore == true){
      ShowMore = <Button
        onPress={() => this.loadMore()}
        title="Загрузить еще"
        color="#000000"
        style={styles.loadMore}
        accessibilityLabel="Touch button to load more articles"
      />;
    }

    return (
      <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => this._onRefresh()}
          />
        }>
      	{posts}
        {ShowMore}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	PostWrapper : {
		display: 'flex',
		flexDirection: 'column',
		padding: 15,
		alignItems: 'flex-start',
		flexShrink: 1,
		backgroundColor: '#ffffff'
	},
	PostImage: {
		alignSelf: 'stretch',
		height: 140,
    width: Dimensions.get('window').width - 30,
		marginBottom: 15
	},
	PostTitle: {
		fontSize: 20,
		marginBottom: 10,
		fontWeight: "600"
	},
  loadMore: {
    fontSize: 15
  }
});


export default List;