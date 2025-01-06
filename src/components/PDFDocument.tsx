import React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import PDFHeader from './PDFReport/PDFHeader';
import PDFContent from './PDFReport/PDFContent';
import PDFFooter from './PDFReport/PDFFooter';
import PDFTitle from './PDFReport/PDFTitle';
import { FormData } from '../types';

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: 'Helvetica'
  },
  content: {
    flex: 1,
    marginTop: 65,
    marginBottom: 60,
    marginHorizontal: 'auto',
    width: '100%'
  }
});

interface PDFDocumentProps {
  data: FormData;
}

const PDFDocument: React.FC<PDFDocumentProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PDFHeader fixed />
      <PDFTitle fixed />
      <View style={styles.content}>
        <PDFContent data={data} page="first" />
      </View>
      <PDFFooter fixed />
    </Page>
    
    <Page size="A4" style={styles.page}>
      <PDFHeader fixed />
      <View style={styles.content}>
        <PDFContent data={data} page="second" />
      </View>
      <PDFFooter fixed />
    </Page>

    <Page size="A4" style={styles.page}>
      <PDFHeader fixed />
      <View style={styles.content}>
        <PDFContent data={data} page="third" />
      </View>
      <PDFFooter fixed />
    </Page>

    <Page size="A4" style={styles.page}>
      <PDFHeader fixed />
      <View style={styles.content}>
        <PDFContent data={data} page="fourth" />
      </View>
      <PDFFooter fixed />
    </Page>

    <Page size="A4" style={styles.page}>
      <PDFHeader fixed />
      <View style={styles.content}>
        <PDFContent data={data} page="fifth" />
      </View>
      <PDFFooter fixed />
    </Page>

    <Page size="A4" style={styles.page}>
      <PDFHeader fixed />
      <View style={styles.content}>
        <PDFContent data={data} page="rest" />
      </View>
      <PDFFooter fixed />
    </Page>
  </Document>
);

export default PDFDocument;