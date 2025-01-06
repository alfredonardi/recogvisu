import React from 'react';
import { View } from '@react-pdf/renderer';
import { FormData } from '../../types';
import { styles } from './styles';
import { PreliminaryInfo } from './sections/PreliminaryInfo';
import { TeamInfo } from './sections/TeamInfo';
import { PreservationInfo } from './sections/PreservationInfo';
import { WeatherInfo } from './sections/WeatherInfo';
import { LocationInfo } from './sections/LocationInfo';
import { ExternalLocationInfo } from './sections/ExternalLocationInfo';
import { InternalLocationInfo } from './sections/InternalLocationInfo';
import { VehicleInfo } from './sections/VehicleInfo';
import { VictimInfo } from './sections/VictimInfo';
import { ForensicDetails } from './sections/ForensicDetails';
import { AdditionalInfo } from './sections/AdditionalInfo';
import { FinalConsiderations } from './sections/FinalConsiderations';

interface PDFContentProps {
  data: FormData;
  page: 'first' | 'second' | 'third' | 'fourth' | 'fifth' | 'rest';
}

const PDFContent: React.FC<PDFContentProps> = ({ data, page }) => {
  switch (page) {
    case 'first':
      return (
        <View style={styles.section}>
          <PreliminaryInfo data={data} />
          <TeamInfo data={data} />
        </View>
      );
    case 'second':
      return (
        <View style={styles.section}>
          <PreservationInfo data={data} />
          <WeatherInfo data={data} />
        </View>
      );
    case 'third':
      return (
        <View style={styles.section}>
          <LocationInfo data={data} />
          <ExternalLocationInfo data={data} />
        </View>
      );
    case 'fourth':
      return (
        <View style={styles.section}>
          <InternalLocationInfo data={data} />
          <VehicleInfo data={data} />
        </View>
      );
    case 'fifth':
      return (
        <View style={styles.section}>
          <VictimInfo data={data} />
        </View>
      );
    case 'rest':
      return (
        <View style={styles.section}>
          <ForensicDetails data={data} />
          <AdditionalInfo data={data} />
          <FinalConsiderations data={data} />
        </View>
      );
    default:
      return null;
  }
};

export default PDFContent;