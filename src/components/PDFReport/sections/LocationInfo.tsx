import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const LocationInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>5. Do Local dos Fatos</Text>
    
    <View style={styles.row}>
      <Text style={styles.label}>Área:</Text>
      <Text style={styles.value}>{data.area}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Perfil social:</Text>
      <Text style={styles.value}>{data.perfilSocial}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Iluminação pública:</Text>
      <Text style={styles.value}>{data.iluminacaoPublica}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Rede de esgoto:</Text>
      <Text style={styles.value}>{data.redeEsgoto}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Pavimentação:</Text>
      <Text style={styles.value}>{data.pavimentacao1}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Tráfego de veículos:</Text>
      <Text style={styles.value}>{data.trafegoVeiculos}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Estabelecimentos:</Text>
      <Text style={styles.value}>
        {[
          data.escolas && 'Escola(s)',
          data.bares && 'Bar(es) ou Adega(s)',
          data.prostibulos && 'Casa(s) de Massagem e/ou Lupanar(es)',
          data.igrejas && 'Religioso(s)',
          data.outrosEstabelecimentos && data.outrosEstabelecimentosEspecificacao
        ].filter(Boolean).join(', ')}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Pessoas presentes:</Text>
      <Text style={styles.value}>
        {[
          data.curiosos && 'Curiosos',
          data.parentes && 'Parentes',
          data.vizinhos && 'Vizinho(s)',
          data.imprensa && 'Imprensa',
          data.outrosPresentes && data.outrosPresentesEspecificacao
        ].filter(Boolean).join(', ')}
      </Text>
    </View>

    {data.informacoesPertinentesLocalFatos && (
      <View style={styles.row}>
        <Text style={styles.label}>Informações pertinentes:</Text>
        <Text style={styles.multilineValue}>{data.informacoesPertinentesLocalFatos}</Text>
      </View>
    )}
  </>
);