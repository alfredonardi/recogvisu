import React from 'react';
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    padding: 10,
    borderBottom: '1px solid #ccc'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  logo: {
    width: 100,
    marginBottom: 10
  }
});

const PDFHeader = () => (
  <View style={styles.header}>
    <Image 
      style={styles.logo}
      src="/logo.png"
    />
    <Text style={styles.title}>
      RECOGNIÇÃO VISUOGRÁFICA DE LOCAL DE CRIME
    </Text>
  </View>
);

export default PDFHeader;