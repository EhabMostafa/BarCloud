import React, { FunctionComponent, ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import { styles } from './styles';
import { calcWidth } from '../../config/metrics';
import { BackArrow } from '../../icons/svgs/BackArrow';
import { Arrow } from '../../icons/svgs/Arrow';
import { DownArrow } from '../../icons/svgs/DownArrow';

type ModelDetailsRowProps = {
  title: string,
  value?: string | number
}

const ModelDetailsRow: FunctionComponent<ModelDetailsRowProps> = ({
  title,
  value
}) => {
  return (
    <View style={[styles.container]}
    >


      {/***** Left ******/}
      <View style={styles.leftContainer}>


        {/***** title ******/}
        {(title) &&
          <View
            style={styles.titleContainer}
          >
            <Text style={styles.titleText}>{title}</Text>
          </View>
        }

      </View>



      {/***** Right ******/}
      {
        <View >
          <Text style={styles.valueText}>{value}</Text>
        </View>
      }

    </View>
  )
}

export { ModelDetailsRow };