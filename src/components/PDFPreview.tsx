import { PDFViewer } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import PDFContent from './PDFReport/PDFContent';
import { FormData } from '../types';

interface PDFPreviewProps {
  data: FormData;
}

const PDFPreview = ({ data }: PDFPreviewProps) => (
  <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <PDFDocument>
      <PDFContent data={data} />
    </PDFDocument>
  </PDFViewer>
);

export default PDFPreview;