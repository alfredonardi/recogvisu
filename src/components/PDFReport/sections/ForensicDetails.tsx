import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const ForensicDetails: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>7. Detalhes Forenses</Text>
    
    <Text style={styles.subsectionTitle}>Detalhes Forenses do Óbito</Text>
    <View style={styles.row}>
      <Text style={styles.label}>Estado de Rigidez:</Text>
      <Text style={styles.value}>{data.rigidez}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Hipotermia:</Text>
      <Text style={styles.value}>{data.hipotermia}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Tempo Provável da Morte:</Text>
      <Text style={styles.value}>{data.tempoMorte}</Text>
    </View>

    <Text style={styles.subsectionTitle}>Posição do Corpo</Text>
    <View style={styles.row}>
      <Text style={styles.label}>Posição:</Text>
      <Text style={styles.value}>
        {data.posicaoCorpo === 'outros' 
          ? data.especificarOutraPosicao 
          : data.posicaoCorpo}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Estado da Posição:</Text>
      <Text style={styles.value}>{data.posicaoCorpo1}</Text>
    </View>
    {data.posicaoCorpo1 === 'NaoNatural' && data.explicacaoPosicao && (
      <View style={styles.row}>
        <Text style={styles.label}>Explicação:</Text>
        <Text style={styles.value}>{data.explicacaoPosicao}</Text>
      </View>
    )}

    <Text style={styles.subsectionTitle}>Estado do Corpo</Text>
    <View style={styles.row}>
      <Text style={styles.value}>
        {[
          ...(data.estadoCorpo || []).filter((estado: string) => estado !== 'outros'),
          data.estadoCorpo?.includes('outros') ? data.descricaoOutrosEstadoCorpo : null
        ].filter(Boolean).join(', ')}
      </Text>
    </View>

    <Text style={styles.subsectionTitle}>Ações para Dificultar Identificação</Text>
    <View style={styles.row}>
      <Text style={styles.value}>
        {[
          ...(data.acoesIdentificacao || []).filter((acao: string) => acao !== 'outros'),
          data.acoesIdentificacao?.includes('outros') ? data.descricaoOutrosAcaoIdentificacao : null
        ].filter(Boolean).join(', ')}
      </Text>
    </View>

    <Text style={styles.subsectionTitle}>Sinais de Violência</Text>
    <View style={styles.row}>
      <Text style={styles.value}>
        {[
          ...(data.sinaisViolencia || []).filter((sinal: string) => sinal !== 'outros'),
          data.sinaisViolencia?.includes('outros') ? data.descricaoOutrosSinaisViolencia : null
        ].filter(Boolean).join(', ')}
      </Text>
    </View>

    <Text style={styles.subsectionTitle}>Condições de Restrição</Text>
    <View style={styles.row}>
      <Text style={styles.label}>Condições:</Text>
      <Text style={styles.value}>
        {[
          ...(data.condicoesRestricao || []).filter((cond: string) => cond !== 'outros'),
          data.condicoesRestricao?.includes('outros') ? data.especificarOutrosRestVit : null
        ].filter(Boolean).join(', ')}
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Instrumentos:</Text>
      <Text style={styles.value}>
        {[
          ...(data.instrumentosRestricao || []).filter((inst: string) => inst !== 'outros'),
          data.instrumentosRestricao?.includes('outros') ? data.especificarOutrosIu : null
        ].filter(Boolean).join(', ')}
      </Text>
    </View>
  </>
);