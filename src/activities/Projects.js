import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import List from '../components/projects/List'

type Props = {};
export default class Projects extends Component<Props> {
  static navigationOptions = {
    title: 'WEB-PANDA.RU PROJECTS',
  };

  render() {
    let navigation = this.props.navigation;

    return (
      <View style={styles.container}>
          <List navigation={navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  }
});
