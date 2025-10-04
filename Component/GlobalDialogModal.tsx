import React from 'react';
import tailwind from '@tailwind';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import assets from '@assets';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  target: number;
  visible: boolean;
  title: string;
  subtitle?: string;
  action?(): void;
  setAlertModal?: any;
}

export default function GlobalDialogModal(props: PropTypes) {
  const navigation = useNavigation();

  const closeModal = () => {
    if (props.setAlertModal) {
      props.setAlertModal(false);
    }
  };

  return (
    <Modal
      isVisible={props.visible}
      animationInTiming={200}
      animationOutTiming={150}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      scrollHorizontal={true}
      onBackdropPress={closeModal}
    >
      <View style={tailwind('bg-white rounded')}>
        <View style={[tailwind('p-3')]}>
          <Text style={[tailwind('text-lg text-black pb-2 font-medium')]}>
            {props.title}
          </Text>
        </View>
        <View style={[tailwind('flex flex-row justify-between items-center')]}>
          <TouchableOpacity
            onPress={closeModal}
            style={[tailwind('p-3 flex-grow bg-gray-200')]}
          >
            <Text style={[tailwind('text-center font-medium text-black')]}>
              CANCEL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.action}
            style={[tailwind('p-3 flex-grow bg-primary')]}
          >
            <Text style={[tailwind('text-center font-medium text-white')]}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

/**
 * target :
 *  0 => Loading
 *  1 => Prompt
 */
