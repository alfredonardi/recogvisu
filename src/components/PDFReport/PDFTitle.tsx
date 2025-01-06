import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface PDFTitleProps {
  fixed?: boolean;
}

const styles = StyleSheet.create({
  titleContainer: {
    position: 'absolute',
    top: 140,
    left: 30,
    right: 30,
    textAlign: 'center'
  },
  title: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center'
  }
});

const PDFTitle: React.FC<PDFTitleProps> = ({ fixed }) => (
  <View style={styles.titleContainer} fixed={fixed}>
    <Text style={styles.title}>
      RECOGNIÇÃO VISUOGRÁFICA DE LOCAL DE CRIME
    </Text>
  </View>
);

export default PDFTitle;