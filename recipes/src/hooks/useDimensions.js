import {useEffect, useState} from 'react';

import {Dimensions} from 'react-native';

export function useDimensions() {
  const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = result => {
      setScreenInfo(result.screen);
    };

    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return {...screenInfo};
}
