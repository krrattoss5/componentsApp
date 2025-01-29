import React, {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {Text, TextInput, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <CustomView globalMargin>
      <Title text="Text Inputs" safe />

      <Card>
        <TextInput
          style={globalStyles.input}
          placeholder="Nombre copleto"
          autoCapitalize={'words'}
          autoCorrect={false}
          onChangeText={value => setForm({...form, name: value})}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="E-mail"
          autoCapitalize={'none'}
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={value => setForm({...form, email: value})}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Telefono"
          keyboardType="phone-pad"
          onChangeText={value => setForm({...form, phone: value})}
        />
      </Card>

      <View style={{height: 10}} />

      <Card>
        <Text>{JSON.stringify(form, null, 2)}</Text>
      </Card>
    </CustomView>
  );
};
