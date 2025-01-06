import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    width: '100%'
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
    marginTop: 20,
    backgroundColor: '#f5f5f5',
    padding: 6,
    breakAfter: 'avoid',
    width: '100%'
  },
  firstSectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
    marginTop: 30,
    backgroundColor: '#f5f5f5',
    padding: 6,
    breakAfter: 'avoid',
    width: '100%'
  },
  subsectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginTop: 10,
    marginBottom: 4
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
    minHeight: 16,
    breakInside: 'avoid',
    flexWrap: 'wrap',
    width: '100%',
    paddingRight: 20
  },
  label: {
    width: '35%',
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    paddingRight: 10,
    position: 'absolute',
    left: 0
  },
  value: {
    width: '65%',
    fontSize: 12,
    fontFamily: 'Helvetica',
    marginLeft: '35%'
  },
  multilineValue: {
    width: '65%',
    fontSize: 12,
    fontFamily: 'Helvetica',
    flexWrap: 'wrap',
    marginLeft: '35%'
  }
});