import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    paddingTop: 10,
    borderTop: '1px solid #ccc'
  },
  text: {
    fontSize: 10,
    color: '#666'
  }
});

const PDFFooter: React.FC = () => (
  <View style={styles.footer} fixed render={({ pageNumber, totalPages }) => (
    <Text style={styles.text}>
      Página {pageNumber} de {totalPages}
    </Text>
  )} />
);

export default PDFFooter;