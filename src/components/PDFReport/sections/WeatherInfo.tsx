import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const WeatherInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>4. Do Clima</Text>
    <View style={styles.row}>
      <Text style={styles.label}>Período:</Text>
      <Text style={styles.value}>{data.periodo}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Condição de Luz:</Text>
      <Text style={styles.value}>{data.luz}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Clima:</Text>
      <Text style={styles.value}>
        {data.clima === 'outros' 
          ? data.especificacaoClima 
          : data.clima}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Visibilidade:</Text>
      <Text style={styles.value}>{data.visibilidade}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Temperatura:</Text>
      <Text style={styles.value}>{data.temperatura ? `${data.temperatura}°C` : ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Sensação Térmica:</Text>
      <Text style={styles.value}>{data.sensacaoTermica ? `${data.sensacaoTermica}°C` : ''}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Umidade Relativa do Ar:</Text>
      <Text style={styles.value}>{data.umidadeAr ? `${data.umidadeAr}%` : ''}</Text>
    </View>
  </>
);