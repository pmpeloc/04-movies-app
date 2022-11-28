import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('DetailScreen' as never)}
      />
    </View>
  );
};
