import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';

export const PreservationInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.sectionTitle}>3. Da Preservação do Local</Text>
    
    {/* Estado da Vítima */}
    <View style={styles.row}>
      <Text style={styles.label}>Estado da Vítima:</Text>
      <Text style={styles.value}>{data.estadoVitima}</Text>
    </View>
    {data.estadoVitima === 'Coberta' && (
      <View style={styles.row}>
        <Text style={styles.label}>Material que Cobria:</Text>
        <Text style={styles.value}>{data.materialQueCobria}</Text>
      </View>
    )}

    {/* Preservação do Local */}
    <View style={styles.row}>
      <Text style={styles.label}>Preservado por:</Text>
      <Text style={styles.value}>
        {data.preservadoPor === 'outros' 
          ? data.especificacaoPreservadoPor 
          : data.preservadoPor}
      </Text>
    </View>

    {data.preservadoPor && (
      <>
        <View style={styles.row}>
          <Text style={styles.label}>Responsável:</Text>
          <Text style={styles.value}>{data.responsavel}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Tipo de Documento:</Text>
          <Text style={styles.value}>
            {data.tipoDocumento === 'outros' 
              ? data.especificacaoTipoDocumento 
              : data.tipoDocumento}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Nº do Documento:</Text>
          <Text style={styles.value}>{data.documentoNumero}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Veículo de Preservação:</Text>
          <Text style={styles.value}>
            {data.tipoVtrNumero === 'patrimoniovtr' ? 'Patrimônio: ' : 'Placa: '}
            {data.vtrNumero}
          </Text>
        </View>
      </>
    )}

    {/* Tentativa de Resgate */}
    <View style={styles.row}>
      <Text style={styles.label}>Tentativa de Resgate:</Text>
      <Text style={styles.value}>{data.tentativaResgate}</Text>
    </View>

    {data.tentativaResgate === 'Sim' && (
      <>
        <View style={styles.row}>
          <Text style={styles.label}>Realizado por:</Text>
          <Text style={styles.value}>
            {data.tipoResgate === 'outros' 
              ? data.especificacaoTipoResgate 
              : data.tipoResgate}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Encarregado:</Text>
          <Text style={styles.value}>{data.encarregado}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Tipo de Documento:</Text>
          <Text style={styles.value}>
            {data.tipoDocumentoResgate === 'outros' 
              ? data.especificacaoTipoDocumentoResgate 
              : data.tipoDocumentoResgate}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Nº do Documento:</Text>
          <Text style={styles.value}>{data.numeroDocumentoResgate}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Veículo do Resgate:</Text>
          <Text style={styles.value}>
            {data.tipoVtrResgate === 'patrimoniovtr' ? 'Patrimônio: ' : 'Placa: '}
            {data.vtrNumeroResgate}
          </Text>
        </View>
      </>
    )}
  </>
);