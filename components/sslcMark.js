import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      Tamil: '',
      English: '',
      Mathematics: '',
      Science: '',
      Social: '',
    }
  });
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SSLC Mark Calculator</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.nameInput}
            placeholder='Tamil'
            keyboardType='numeric'
            onChangeText={value=>onChange(value)}
            value={value}
          />
        )}
        name="Tamil"
      />
      {errors.Tamil && <Text style={{ color: 'red' }}>*Enter Tamil Mark </Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.nameInput}
            placeholder='English'
            keyboardType='numeric'
            onChangeText={value=>onChange(value)}
            value={value}
          />
        )}
        name="English"
      />
      {errors.English && <Text style={{ color: 'red' }}>*Enter English Mark</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.nameInput}
            placeholder='Mathematics'
            keyboardType='numeric'
            onChangeText={value=>onChange(value)}
            value={value}
          />
        )}
        name="Mathematics"
      />
      {errors.Mathematics && <Text style={{ color: 'red' }}>*Enter Mathematics Mark</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.nameInput}
            placeholder='Science'
            keyboardType='numeric'
            onChangeText={value=>onChange(value)}
            value={value}
          />
        )}
        name="Science"
      />
      {errors.Science && <Text style={{ color: 'red' }}>*Enter Science Mark</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.nameInput}
            placeholder='Social'
            keyboardType='numeric'
            onChangeText={value=>onChange(value)}
            value={value}
          />
        )}
        name="Social"
      />
      {errors.Social && <Text style={{ color: 'red' }}>*Enter Social Mark</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
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


