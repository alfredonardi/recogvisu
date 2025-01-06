import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { formatDate } from '../../../utils/formatters';
import { CommunicationsInfo } from './CommunicationsInfo';

export const PreliminaryInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.firstSectionTitle}>1. Informações Preliminares</Text>
    
    <View style={styles.row}>
      <Text style={styles.label}>Natureza do Delito:</Text>
      <Text style={styles.value}>
        {data.naturezaDelito === 'outros' 
          ? data.especificacaoNaturezaDelito 
          : data.naturezaDelito}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Data:</Text>
      <Text style={styles.value}>{formatDate(data.data)}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Hora:</Text>
      <Text style={styles.value}>{data.hora}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Endereço:</Text>
      <Text style={styles.value}>{data.localFatos}</Text>
    </View>

    {data.pontoReferencia && (
      <View style={styles.row}>
        <Text style={styles.label}>Ponto de Referência:</Text>
        <Text style={styles.value}>{data.pontoReferencia}</Text>
      </View>
    )}

    <View style={styles.row}>
      <Text style={styles.label}>Tipo de Local:</Text>
      <Text style={styles.value}>{data.tipoLocal}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Circunscrição:</Text>
      <Text style={styles.value}>{data.circunscricaoPolicial}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>BO:</Text>
      <Text style={styles.value}>{`${data.boDP || ''} ${data.boDPInfo || ''}`}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>DHPP:</Text>
      <Text style={styles.value}>{data.boDHPP}</Text>
    </View>

    <CommunicationsInfo data={data} />
  </>
);