import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Dimensions,
  Linking,
  RefreshControl
} from 'react-native';
import Statistics from '../news/Statistics'
import Tags from '../news/Tags'
import Listed from '../../toolbox/Lists'
import HTML from 'react-native-render-html'

class List extends Listed {
  constructor(props) {
    super(props);

    this.url = "https://api.web-panda.ru/api/project";
    this.LoadPosts();
  }

  render() {

  	let posts = [];
  	this.state.posts.data.map((post) => {
  		const { navigate } = this.props.navigation;

  		posts.push(
  			<View key={post.id} style={styles.PostWrapper}>
  				<Image source={{url : post.preview}} style={styles.PostImage}/>
  				<View style={styles.PostTextWrapper}>
	  				<Text style={styles.PostTitle}>{post.name}</Text>
            <Text style={{fontSize: 12}}>Релиз {post.created_at}</Text>
            <HTML html={post.content} 
            imagesMaxWidth={Dimensions.get('window').width - 30} 
            allowedStyles={['color', 'font-size', 'font-weight']}/>
            <Text onPress={() => {
              Linking.openURL(post.url);
            }} style={{color:"#0000ff"}}>Перейти</Text>
  				</View>
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
       <ScrollView
       style={{width: Dimensions.get('window').width}}
       refreshControl={
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