import { Text, View } from "react-native";
import React from "react";
import styles from "../assets/cssbutbetter";

function Eat(props) {
  return (
    <View>
      <Text style={styles.words}>
        eat {props.whattoeat}
      </Text>
      <Text style={styles.coolerwords(40)}>
        bigblackwords
      </Text>
      <Text style={[styles.words, {backgroundColor: '#000000'}]}>
        black back
      </Text>
      <Text>
        
      </Text>
    </View>
  );
}

export default Eat;
