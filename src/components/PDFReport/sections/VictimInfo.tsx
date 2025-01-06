import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { FormData } from '../../../types';
import { styles } from '../styles';
import { formatDate } from '../../../utils/formatters';

export const VictimInfo: React.FC<{ data: FormData }> = ({ data }) => (
  <>
    <Text style={styles.firstSectionTitle}>6. Informações Importantes sobre a Vítima</Text>
    
    <View style={styles.row}>
      <Text style={styles.label}>Status:</Text>
      <Text style={styles.value}>{data.identificacaoVitima === 'identificada' ? 'Identificada' : 'Não identificada'}</Text>
    </View>

    {data.identificacaoVitima === 'identificada' && (
      <>
        <View style={styles.row}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{data.nome}</Text>
        </View>

        {data.nomeSocial && (
          <View style={styles.row}>
            <Text style={styles.label}>Nome social:</Text>
            <Text style={styles.value}>{data.nomeSocial}</Text>
          </View>
        )}

        <View style={styles.row}>
          <Text style={styles.label}>Órgão sexual:</Text>
          <Text style={styles.value}>{data.sexo}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Identificação de gênero:</Text>
          <Text style={styles.value}>{data.identificacaoGenero}</Text>
        </View>

        {data.vulgo && (
          <View style={styles.row}>
            <Text style={styles.label}>Conhecido(a) como:</Text>
            <Text style={styles.value}>{data.vulgo}</Text>
          </View>
        )}

        <View style={styles.row}>
          <Text style={styles.label}>CPF:</Text>
          <Text style={styles.value}>{data.cpf}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>RG:</Text>
          <Text style={styles.value}>{data.rg}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Estado civil:</Text>
          <Text style={styles.value}>{data.estadoCivil}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.value}>{data.vitimaEndereco}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Pai:</Text>
          <Text style={styles.value}>{data.pai}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Mãe:</Text>
          <Text style={styles.value}>{data.mae}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Data de nascimento:</Text>
          <Text style={styles.value}>{formatDate(data.dataNascimento)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Idade:</Text>
          <Text style={styles.value}>{data.idade}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Natural de:</Text>
          <Text style={styles.value}>{`${data.naturalidadeCidade} - ${data.naturalidadeEstado}`}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Profissão:</Text>
          <Text style={styles.value}>{data.profissao}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Identidade racial:</Text>
          <Text style={styles.value}>
            {data.etnia === 'outros' ? data.especificarEtnia : data.etnia}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Compleição Física:</Text>
          <Text style={styles.value}>
            {data.compleicaoFisica === 'outros' ? data.especificarCompleicaoFisica : data.compleicaoFisica}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Altura:</Text>
          <Text style={styles.value}>{data.altura} m</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Tipo de Cabelo:</Text>
          <Text style={styles.value}>
            {data.tipoCabelo === 'outros' ? data.especificarTipoCabelo : data.tipoCabelo}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Comprimento do Cabelo:</Text>
          <Text style={styles.value}>
            {data.comprimentoCabelo === 'outros' ? data.especificarComprimentoCabelo : data.comprimentoCabelo}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Cor do Cabelo:</Text>
          <Text style={styles.value}>
            {data.corCabelo === 'outros' ? data.especificarCorCabelo : data.corCabelo}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Cor dos Olhos:</Text>
          <Text style={styles.value}>
            {data.corOlhos === 'outros' ? data.especificarCorOlhos : data.corOlhos}
          </Text>
        </View>

        {data.caracteristicasVisiveis && (
          <View style={styles.row}>
            <Text style={styles.label}>Características Visíveis:</Text>
            <Text style={styles.value}>{data.caracteristicasVisiveis}</Text>
          </View>
        )}

        <View style={styles.row}>
          <Text style={styles.label}>Desvios de Conduta:</Text>
          <Text style={styles.value}>
            {[
              ...(data.desviosConduta || []).filter(desvio => desvio !== 'outros'),
              data.desviosConduta?.includes('outros') ? data.descricaoOutrosDesvios : null
            ].filter(Boolean).join(', ')}
          </Text>
        </View>

        {data.informacoesPertinentesDesvios && (
          <View style={styles.row}>
            <Text style={styles.label}>Detalhes dos desvios:</Text>
            <Text style={styles.multilineValue}>{data.informacoesPertinentesDesvios}</Text>
          </View>
        )}

        <View style={styles.row}>
          <Text style={styles.label}>Relacionamento familiar:</Text>
          <Text style={styles.value}>
            {data.relacionamentoFamilia === 'outros' ? data.descricaoOutrosRelacionamento : data.relacionamentoFamilia}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Residia com:</Text>
          <Text style={styles.value}>
            {data.residenciaVitima === 'outros' ? data.descricaoResidenciaVitimaOutros : data.residenciaVitima}
          </Text>
        </View>
      </>
    )}
  </>
);