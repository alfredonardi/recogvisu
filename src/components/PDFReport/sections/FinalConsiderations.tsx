import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const FinalConsiderations: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>9. Considerações Finais</Text>
    
    <Text style={styles.subsectionTitle}>Das investigações preliminares</Text>
    <View style={styles.row}>
      <Text style={styles.value}>{data.investigacoesPreliminares}</Text>
    </View>
    
    <Text style={styles.subsectionTitle}>Considerações Finais</Text>
    <View style={styles.row}>
      <Text style={styles.value}>{data.consideracoesFinais}</Text>
    </View>
  </>
);