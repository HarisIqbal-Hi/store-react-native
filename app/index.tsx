import { Redirect } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Index = () => {
    return (
       <Redirect href="/home" />
    );
}

const styles = StyleSheet.create({})

export default Index;
