import React, { Component } from 'react';
import ValidationComponent from 'react-native-form-validator';
import { useForm, Controller } from "react-hook-form";
import { withFormik } from 'formik';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';


class Marksheet extends ValidationComponent {
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
          onChangeText={(text) => this.props.setFieldValue('eng',eng)}
        />
        <Text style={{color:'red'}}>{this.props.errors.eng}</Text>
        <TextInput
          style={styles.nameInput}
          placeholder='Tamil'
          keyboardType='numeric'
          onChangeText={(text) => this.props.setFieldValue('tam',tam)}
        />
        <Text style={{color:'red'}}>{this.props.errors.tam}</Text>
        <TextInput
          style={styles.nameInput}
          placeholder='Mathematics'
          keyboardType='numeric'
          onChangeText={(text) => this.props.setFieldValue('mat',mat)}
        />
        <Text style={{color:'red'}}>{this.props.errors.mat}</Text>
        <TextInput
          style={styles.nameInput}
          placeholder='Science'
          keyboardType='numeric'
          onChangeText={(text) => this.props.setFieldValue('sci',sci)}
        />
        <Text style={{color:'red'}}>{this.props.errors.sci}</Text>
        <TextInput
          style={styles.nameInput}
          placeholder='Social Science'
          keyboardType='numeric'
          onChangeText={(text) => this.props.setFieldValue('soc',soc)}
        />
        <Text style={{color:'red'}}>{this.props.errors.soc}</Text>
        <Button
          onPress={() => { this.props.handleSubmit() }}
          title='Submit' />
        
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
export default withFormik({
  mapPropsToValues: () => ({ eng: '', tam: '', mat: '', sci: '', soc: '' }),
  validate: (values, props) => {
    const errors = {};
    
    if (!values.tam) {
      errors.tam = 'Mark Required';
    } else if (values.tam.length < 0) {
      errors.tam = 'invalid Mark';
    }

    if (!values.eng) {
      errors.eng = 'Mark Required';
    } else if (values.eng.length < 0) {
      errors.eng = 'invalid Mark';
    }

    if (!values.mat) {
      errors.mat = 'Mark Required';
    } else if (values.mat.length < 0) {
      errors.mat = 'invalid Mark';
    }

    if (!values.sci) {
      errors.sci = 'Mark Required';
    } else if (values.sci.length < 0) {
      errors.sci = 'invalid Mark';
    }

    if (!values.soc) {
      errors.soc = 'Mark Required';
    } else if (values.soc.length < 0) {
      errors.soc = 'invalid Mark';
    }
    return errors;
  },
  handleSubmit: (values, { props }) => {
    console.log(values);
  },
})(Marksheet);