import { pdf } from '@react-pdf/renderer';
import { FormData } from '../types';
import PDFDocument from '../components/PDFDocument';

export const generatePDF = async (data: FormData): Promise<Blob> => {
  try {
    return await pdf(<PDFDocument data={data} />).toBlob();
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};