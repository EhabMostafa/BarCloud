import React, { FunctionComponent, ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import { styles } from './styles';
import { calcWidth } from '../../config/metrics';
import { BackArrow } from '../../icons/svgs/BackArrow';
import { Arrow } from '../../icons/svgs/Arrow';

type MainMenuItemProps = {
  icon: ReactElement<any, any>,
  title: String,
  onPress?: Function
}

const MainMenuItem: FunctionComponent<MainMenuItemProps> = ({
  icon,
  title,
  onPress
}) => {
  return (
    <TouchableOpacity style={[styles.container]}
      disabled={!onPress}
      onPress={() => {
        if (onPress) {
          onPress()
        }
      }}
    >


      {/***** Left ******/}
      <View style={styles.leftContainer}>


        {/***** Icon ******/}
        {
          icon
        }

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
        <Arrow />
      }

    </TouchableOpacity>
  )
}

export { MainMenuItem };