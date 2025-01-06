import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const VehicleInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>5v. Local Imediato Veículo</Text>
    
    <View style={styles.row}>
      <Text style={styles.label}>Local da vítima:</Text>
      <Text style={styles.value}>
        {data.localCorpo === 'outros' 
          ? data.especificacaoLocal 
          : data.localCorpo}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Tipo de veículo:</Text>
      <Text style={styles.value}>{data.tipoVeiculo}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Marca:</Text>
      <Text style={styles.value}>{data.marcaVeiculo}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Modelo:</Text>
      <Text style={styles.value}>{data.modeloVeiculo}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Placa:</Text>
      <Text style={styles.value}>{data.placa}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Cor:</Text>
      <Text style={styles.value}>
        {data.corVeiculo === 'outros' 
          ? data.outraCor 
          : data.corVeiculo}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Motor ligado:</Text>
      <Text style={styles.value}>{data.motorLigado}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Danos ao veículo:</Text>
      <Text style={styles.value}>{data.danosVeiculo}</Text>
    </View>

    {data.danosVeiculo === 'Sim' && data.descricaoDanos && (
      <View style={styles.row}>
        <Text style={styles.label}>Descrição dos danos:</Text>
        <Text style={styles.multilineValue}>{data.descricaoDanos}</Text>
      </View>
    )}
  </>
);