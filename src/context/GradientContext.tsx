import React, { createContext, useState } from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  _setColors: (colors: ImageColors) => void;
  _setPrevColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const _setColors = (_colors: ImageColors) => {
    setColors(_colors);
  };

  const _setPrevColors = (_colors: ImageColors) => {
    setPrevColors(_colors);
  };

  return (
    <GradientContext.Provider
      value={{ colors, prevColors, _setColors, _setPrevColors }}>
      {children}
    </GradientContext.Provider>
  );
};
