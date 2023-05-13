import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Button =(props) => {
    return (
      
      <TouchableOpacity style={styles.buttonWrapper} {...props}>
        <LinearGradient
          colors={['#5247ff', '#3f87e8' ]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.button}>
          <Text style={styles.buttonText}>{props.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    buttonWrapper: {
      width: '100%',
      marginTop: 20,
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
    },
    
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
}); 

export default Button;