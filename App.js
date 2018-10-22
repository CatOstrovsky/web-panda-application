import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Index from './src/activities/Index'
import Post from './src/activities/Post'
import Projects from './src/activities/Projects'
import Icon from 'react-native-vector-icons/Ionicons';

let similarOptions = {
	headerStyle: {
      backgroundColor: '#ee6b65',
      borderBottomWidth: 0
    },
    headerTintColor: "#ffffff"
};

let PostsStack = createStackNavigator({
  Home: { 
  	screen: Index,
  	navigationOptions : {
	    title: 'Новости',
	    ...similarOptions
	},
  },
  Post: { screen: Post, navigationOptions: { ...similarOptions } }
});

let ProjectsStack = createStackNavigator({
  Home: {
  	screen: Projects,
  	navigationOptions : {
	    title: 'Проекты',
	    ...similarOptions,
	    headerStyle: {
	    	backgroundColor: '#694fad',
	    }
	}
  }
});

const App = createMaterialBottomTabNavigator({
	Posts: { 
	  	screen: PostsStack, 
	  	navigationOptions : {
		    title: 'Новости',
		    tabBarIcon: ({ tintColor, focused }) => (
	          <Icon size={25} name={ 'ios-list' } style={{ color: tintColor }} />
	        )
		}
	},
  	Projects: { 
  		screen: ProjectsStack,
  		navigationOptions : {
		    title: 'Проекты',
		    tabBarIcon: ({ tintColor, focused }) => (
	          <Icon size={25} name={ 'ios-flask' } style={{ color: tintColor }} />
	        ),
	        barStyle: { backgroundColor: '#694fad' },
		}
  	}
}, {
  initialRouteName: 'Posts',
  activeColor: '#ffffff',
  shifting: true,
  inactiveColor: '#fff',
  barStyle: { backgroundColor: '#ee6b65' },
});

// const App = createBottomTabNavigator ({
//   Posts: { screen: PostsStack },
//   Projects: { screen: ProjectsStack }
// });

export default App;