import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const CustomSwitch = () => {
  return (
    <View style={styles.switchRow}>
      <Text>CustomSwitch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
});
