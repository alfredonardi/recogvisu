import { pdf } from '@react-pdf/renderer';
import { FormData } from '../types';
import PDFDocument from '../components/PDFDocument';
import React from 'react';

export const generatePDF = async (data: FormData): Promise<Blob> => {
  try {
    const document = React.createElement(PDFDocument, { data });
    return await pdf(document).toBlob();
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};