import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const InternalLocationInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>5i. Local imediato interno</Text>
    
    <View style={styles.row}>
      <Text style={styles.label}>Ambiente:</Text>
      <Text style={styles.value}>
        {data.tipoAmbiente === 'outros' 
          ? data.especificacaoTipoAmbiente 
          : data.tipoAmbiente}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Construção:</Text>
      <Text style={styles.value}>
        {data.tipoConstrucao === 'outros' 
          ? data.detalheTipoConstrucao 
          : data.tipoConstrucao}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Categoria de moradia:</Text>
      <Text style={styles.value}>
        {data.caracteristicasMoradia === 'outros' 
          ? data.detalhesCaracteristicasMoradia 
          : data.caracteristicasMoradia}
      </Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.label}>Vestígios de disparo:</Text>
      <Text style={styles.value}>{data.localDisparo}</Text>
    </View>

    {data.localDisparo === 'Sim' && (
      <View style={styles.row}>
        <Text style={styles.label}>Localização:</Text>
        <Text style={styles.value}>
          {[
            data.paredes && 'Paredes',
            data.teto && 'Teto',
            data.mobilia && 'Mobília',
            data.janelas && 'Janelas',
            data.portas && 'Portas',
            data.outrosVestigios && data.especificacaoVestigios
          ].filter(Boolean).join(', ')}
        </Text>
      </View>
    )}

    <View style={styles.row}>
      <Text style={styles.label}>Vestígios de sangue:</Text>
      <Text style={styles.value}>{data.vestigiosSangue}</Text>
    </View>

    {data.vestigiosSangue === 'Sim' && (
      <>
        <View style={styles.row}>
          <Text style={styles.label}>Quantidade:</Text>
          <Text style={styles.value}>{data.quantidadeSangue}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Localização:</Text>
          <Text style={styles.value}>
            {[
              data.parede && 'Parede',
              data.chao && 'Chão',
              data.mobilia2 && 'Mobília',
              data.teto2 && 'Teto',
              data.outrosLocaisSangue && data.especificacaoVestigiosSangue
            ].filter(Boolean).join(', ')}
          </Text>
        </View>
      </>
    )}

    {data.informacoesPertinentesLocalInterno && (
      <View style={styles.row}>
        <Text style={styles.label}>Informações pertinentes:</Text>
        <Text style={styles.multilineValue}>{data.informacoesPertinentesLocalInterno}</Text>
      </View>
    )}
  </>
);