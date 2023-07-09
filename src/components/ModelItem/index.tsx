import React, { FunctionComponent, ReactElement } from 'react';
import { Image, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import { styles } from './styles';
import { calcWidth } from '../../config/metrics';
import { BackArrow } from '../../icons/svgs/BackArrow';
import { Arrow } from '../../icons/svgs/Arrow';
import { images } from '../../sql/images';

type ModelItemProps = {
  icon: string,
  title: string,
  onPress?: Function,
  style?: ViewStyle
}

const ModelItem: FunctionComponent<ModelItemProps> = ({
  icon,
  title,
  onPress,
  style
}) => {


  return (
    <TouchableOpacity style={[styles.container, style]}
      disabled={!onPress}
      onPress={() => {
        if (onPress) {
          onPress()
        }
      }}
    >


      {/***** Image Container ******/}
      <View style={styles.imageContainer}>
        {<Image
          source={images[icon]}
          style={styles.image}
          resizeMode='contain'
          resizeMethod='resize'
        />
        }

      </View>



      {/***** title ******/}
      {(title) &&
        <View
          style={styles.titleContainer}
        >
          <Text numberOfLines={1} style={styles.titleText}>{title}</Text>
        </View>
      }

    </TouchableOpacity>
  )
}

export { ModelItem };