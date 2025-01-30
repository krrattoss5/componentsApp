import React, {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Modal, Platform, View} from 'react-native';
import {Button} from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleModal = () => setIsVisible(prevState => !prevState);

  return (
    <CustomView globalMargin>
      <Title text="Modal" safe />
      <Button onPress={handleModal} text="Cerrar" />
      <Modal visible={isVisible} animationType="fade">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
          <View style={{paddingHorizontal: 10}}>
            <Title text="Modal Content" safe />
          </View>
          <View style={{flex: 1}} />
          <Button
            onPress={handleModal}
            text="Cerrar"
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
