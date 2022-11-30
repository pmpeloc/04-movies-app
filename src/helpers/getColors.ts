import ImageColors from 'react-native-image-colors';

export const getColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});
  let primary;
  let secondary;

  if (colors.platform === 'android') {
    primary = colors.dominant;
    secondary = colors.average;
  } else if (colors.platform === 'ios') {
    primary = colors.primary;
    secondary = colors.secondary;
  }

  return [primary, secondary];
};
