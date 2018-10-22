import React, { Component } from 'react';
import { View } from 'react-native';


class List extends Component {
  constructor(props) {
    super(props);
    
    super(props);

    this.url = "";
  
    this.state = { 
      posts: { 
        data: [],
        current_page: 1,
        last_page: 1
      },
      showMore: false,
      refreshing: false
    };
  }

  _onRefresh() {
    this.LoadPosts(1, true)
  }

  LoadPosts(page = 1, update = false) {

    return fetch(`${this.url}?page=${page}`)
    .then((response) => response.json())
    .then((response) => {

      if(!update) {
        let oldPosts = this.state.posts.data;
        response.data = oldPosts.concat(response.data);
      }
      
      this.setState({posts : response});

      if(response.current_page >= response.last_page){
        this.setState({showMore: false});
      }else{
        this.setState({showMore: true});
      }
      this.setState({refreshing: false});
    })
  }
 
  loadMore() {
    if(this.state.posts.current_page < this.state.posts.last_page)
      this.LoadPosts(this.state.posts.current_page + 1);
  }

  render() {
    return (
      <View/>
    );
  }
}


export default List;