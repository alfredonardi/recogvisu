import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    padding: 10,
    borderTop: '1px solid #ccc'
  },
  text: {
    fontSize: 10,
    textAlign: 'center'
  }
});

const PDFFooter = () => (
  <View style={styles.footer} fixed>
    <Text style={styles.text}>
      {/* Texto do rodapé */}
    </Text>
  </View>
);

export default PDFFooter;