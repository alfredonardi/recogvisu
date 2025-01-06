import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const ExternalLocationInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>5e. Local imediato externo</Text>
    
    <View style={styles.row}>
      <Text style={styles.label}>Tipo de local:</Text>
      <Text style={styles.value}>
        {data.localEncontroCorpo === 'outros' 
          ? data.especificacaoLocalEncontroCorpo 
          : data.localEncontroCorpo}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Pavimentação:</Text>
      <Text style={styles.value}>
        {data.pavimentacao === 'outros' 
          ? data.especificacaoPavimentacao 
          : data.pavimentacao}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Tipo de relevo:</Text>
      <Text style={styles.value}>
        {data.tipoRelevo === 'outros' 
          ? data.especificacaoTipoRelevo 
          : data.tipoRelevo}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Acidentes geográficos:</Text>
      <Text style={styles.value}>
        {[
          data.rio && 'Rio',
          data.lago && 'Lago',
          data.monte && 'Monte',
          data.represa && 'Represa',
          data.corrego && 'Córrego',
          data.outrosAcidentes && data.outrosAcidentesEspecificacao
        ].filter(Boolean).join(', ')}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Movimentação do corpo:</Text>
      <Text style={styles.value}>{data.corpoMovido}</Text>
    </View>
    
    {data.corpoMovido === 'Sim' && data.detalhesCorpoMovido && (
      <View style={styles.row}>
        <Text style={styles.label}>Detalhes:</Text>
        <Text style={styles.multilineValue}>{data.detalhesCorpoMovido}</Text>
      </View>
    )}
  </>
);