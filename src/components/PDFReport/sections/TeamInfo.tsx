import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const TeamInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>2. Grupo Especializado em Assessoramento de Local de Crime (GEAcrim)</Text>
    
    <View style={styles.row}>
      <Text style={styles.label}>Delegado(a):</Text>
      <Text style={styles.value}>{data.delegado}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Escrivão(ã):</Text>
      <Text style={styles.value}>{data.escrivao}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Policiais Civis:</Text>
      <Text style={styles.value}>{`${data.policial1 || ''} ${data.policial2 ? `, ${data.policial2}` : ''}`}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Perito(a) Criminal:</Text>
      <Text style={styles.value}>{data.perito}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Fotógrafo(a) Pericial:</Text>
      <Text style={styles.value}>{data.fotografo}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Papiloscopistas:</Text>
      <Text style={styles.value}>
        {[data.papiloscopista1, data.papiloscopista2]
          .filter(Boolean)
          .join(', ')}
      </Text>
    </View>
  </>
);