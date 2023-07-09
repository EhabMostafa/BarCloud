import React, { FunctionComponent, ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import { styles } from './styles';
import { calcWidth } from '../../config/metrics';
import { BackArrow } from '../../icons/svgs/BackArrow';
import { Arrow } from '../../icons/svgs/Arrow';
import { DownArrow } from '../../icons/svgs/DownArrow';

type ModelDetailsButtonProps = {
  opened: Boolean,
  title: String,
  onPress?: Function,
  hideBottom?: Boolean,
}

const ModelDetailsButton: FunctionComponent<ModelDetailsButtonProps> = ({
  opened,
  title,
  onPress,
  hideBottom
}) => {
  return (
    <TouchableOpacity style={[styles.container, hideBottom ? styles.hideBottomBorder : {}]}
      disabled={!onPress}
      onPress={() => {
        if (onPress) {
          onPress()
        }
      }}
    >


      {/***** Left ******/}
      <View style={styles.leftContainer}>


        {/***** title ******/}
        {(title) &&
          <View
            style={styles.titleContainer}
          >
            <Text numberOfLines={1} style={styles.titleText}>{title}</Text>
          </View>
        }

      </View>



      {/***** Right ******/}
      {
        <View style={opened ? {} : { transform: [{ rotate: '180deg' }] }}>
          <DownArrow />
        </View>
      }

    </TouchableOpacity>
  )
}

export { ModelDetailsButton };