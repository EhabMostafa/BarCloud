import React, { FunctionComponent, ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import { styles } from './styles';
import { calcWidth } from '../../config/metrics';
import { BackArrow } from '../../icons/svgs/BackArrow';

type HeaderProps = {
  leftIcon?: ReactElement<any, any>,
  rightIcon?: ReactElement<any, any>,
  onPressLeft?: Function,
  onPressRight?: Function,
  back?: Boolean,
  title?: String,
  noShadow?: boolean,
}

const Header: FunctionComponent<HeaderProps> = ({
  leftIcon,
  rightIcon,
  onPressLeft,
  onPressRight,
  back,
  title,
  noShadow,

}) => {
  return (
    <View style={[styles.container, !noShadow && styles.shadow]}>
      <View style={styles.contentContainer}>

        {/***** Left ******/}
        <View style={styles.leftContainer}>
          {(leftIcon || back || title) &&
            <TouchableOpacity
              style={styles.button}
              disabled={!onPressLeft && !back}
              onPress={() => {
                if (back) {
                  NavigationService.goBack()
                }
                else {
                  onPressLeft && onPressLeft()
                }
              }}
            >
              {back ?
                <View style={styles.backContainer}>
                  <BackArrow />
                  <Text numberOfLines={1} style={styles.backText}>{"Back"}</Text>
                </View>
                :
                leftIcon
              }

            </TouchableOpacity>
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
        {rightIcon &&
          <TouchableOpacity
            style={styles.button}
            disabled={!onPressRight}
            onPress={() => { onPressRight && onPressRight() }}
          >
            {rightIcon}
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export { Header };