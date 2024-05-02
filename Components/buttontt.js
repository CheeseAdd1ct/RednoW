import {React, useRef, useEffect, useState} from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import styles from "../assets/cssbutbetter";

function Buttonss(props) {

  const rotatio = useRef(new Animated.Value(0)).current;
  
  const spinnyy = () => {
    Animated.timing(rotatio, {
      toValue: clicc,
      duration: 500,
      useNativeDriver: true,
    }).start()
  };

  const [clicc, setclicc] = useState(0)
  const incclicc = () => setclicc(clicc+1)
  const potato = rotatio.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (

  <Animated.View style={[styles.buttonbackgroundstyle,
    { 
      transform: [{ rotateY: potato}, {rotateX: potato
     }] 
    }
    ]}>
      <TouchableOpacity onPress={()=>{incclicc(); spinnyy();}} >
        <Text style={styles.words}>{props.buttontitle}</Text>
        <Text style={styles.words}>
          {clicc}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
export default Buttonss;
