import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const AdditionalInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>8. Informações Adicionais</Text>
    
    <Text style={styles.subsectionTitle}>Material para Perícia</Text>
    {data.materialPericia?.map((material: string, index: number) => (
      <View key={index} style={styles.row}>
        <Text style={styles.value}>{material}</Text>
      </View>
    ))}
    
    <Text style={styles.subsectionTitle}>Lesões Aparentes</Text>
    {data.lesoes?.map((lesao: any, index: number) => (
      <View key={index} style={styles.row}>
        <Text style={styles.label}>Local:</Text>
        <Text style={styles.value}>{`${lesao.local} - ${lesao.descricao}`}</Text>
      </View>
    ))}
    
    <Text style={styles.subsectionTitle}>Registro de Bens e Evidências</Text>
    {data.apreensoes?.length > 0 && (
      <>
        <Text style={styles.subsectionTitle}>Apreensões</Text>
        {data.apreensoes.map((item: any, index: number) => (
          <View key={index} style={styles.row}>
            <Text style={styles.value}>{item.descricao}</Text>
          </View>
        ))}
      </>
    )}
    
    {data.arrecadacoes?.length > 0 && (
      <>
        <Text style={styles.subsectionTitle}>Arrecadações</Text>
        {data.arrecadacoes.map((item: any, index: number) => (
          <View key={index} style={styles.row}>
            <Text style={styles.value}>{item.descricao}</Text>
          </View>
        ))}
      </>
    )}
    
    <Text style={styles.subsectionTitle}>Testemunhas</Text>
    {data.testemunhas?.map((testemunha: any, index: number) => (
      <View key={index} style={styles.row}>
        <Text style={styles.value}>
          {`${testemunha.nome} - ${testemunha.contato}`}
        </Text>
      </View>
    ))}
  </>
);