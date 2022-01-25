import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';


export default class Marksheet extends Component {
  constructor(props) {
    super(props);
    this.state = { eng: 0, tam: 0, mat: 0, sci: 0, soc: 0, result: 0, average: 0 };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SSLC Mark Calculator</Text>

        <TextInput
          style={styles.nameInput}
          placeholder='English'
          keyboardType='numeric'
          onChangeText={(text) => this.setState({ eng: parseInt(text) })}
        />
        <TextInput
          style={styles.nameInput}
          placeholder='Tamil'
          keyboardType='numeric'
          onChangeText={(text) => this.setState({ tam: parseInt(text) })}
        />
        <TextInput
          style={styles.nameInput}
          placeholder='Mathematics'
          keyboardType='numeric'
          onChangeText={(text) => this.setState({ mat: parseInt(text) })}
        />
        <TextInput
          style={styles.nameInput}
          placeholder='Science'
          keyboardType='numeric'
          onChangeText={(text) => this.setState({ sci: parseInt(text) })}
        />
        <TextInput
          style={styles.nameInput}
          placeholder='Social Science'
          keyboardType='numeric'
          onChangeText={(text) => this.setState({ soc: parseInt(text) })}
        />

        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity style={[styles.btn1, { backgroundColor: "#778899" }]}
              onPress={() => {
                this.setState({
                  result: (parseInt(this.state.eng) +
                    parseInt(this.state.tam) +
                    parseInt(this.state.mat) +
                    parseInt(this.state.sci) +
                    parseInt(this.state.soc))
                });
              }}>
              <Text style={styles.profile}>Sum</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={[styles.btn1, { backgroundColor: "#daa520" }]}
              onPress={() => {
                this.setState({
                  average: (parseInt(this.state.eng) +
                    parseInt(this.state.tam) +
                    parseInt(this.state.mat) +
                    parseInt(this.state.sci) +
                    parseInt(this.state.soc)) / 5.0
                });
              }}>
              <Text style={styles.profile}>Average</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={[styles.result, { backgroundColor: "#778899" }]}>{this.state.result}</Text>
          </View>
          <View style={styles.column}>
            <Text style={[styles.result, { backgroundColor: "#daa520" }]}>{this.state.average}</Text>
          </View>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    marginTop: 6,
    color: 'white'
  },
  nameInput: {
    padding: 5,
    //paddingStart: 15,
    backgroundColor: "#3b3b3b",
    width: 300,
    borderRadius: 8,
    marginBottom: 15,
    color: "white",
    fontWeight: "600",
    fontSize: 30
  },
  profile: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn1: {
    padding: 13,
    borderRadius: 5,
    margin: 10,
    width: 100,
    height: 50,
    flexDirection: 'row',
  },
  result: {
    padding: 13,
    borderRadius: 5,
    margin: 5,
    width: 180,
    height: 100,
    flexDirection: 'row',
    fontSize: 50
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    margin: 7
  },
  column: {
    flexDirection: 'column',
  },
});
