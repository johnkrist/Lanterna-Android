import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => setToggle(old => !old);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(old => !old);

      return () => subscription.remove();
    });
  }, []);

  return (
    <View style={toggle ? style.containerLigth : style.container}>
      <TouchableOpacity onPress={changeToggle}>
        <Image
          style={toggle ? style.ligthOn : style.ligthOof}
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={style.dioLogo}
          source={
            toggle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLigth: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ligthOn: {
    resizeMode: 'contain',
    alingSelf: 'center',
    width: 150,
    heigth: 150,
  },
  ligthOof: {
    resizeMode: 'contain',
    alingSelf: 'center',
    tintColor: 'white',
    width: 150,
    heigth: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alingSelf: 'center',
    width: 250,
    heigth: 250,
  },
});
