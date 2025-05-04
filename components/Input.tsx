import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

interface InputProps extends TextInputProps {
  style?: any;
  isPassword?: boolean;
}

export default function Input({ style, isPassword, ...props }: InputProps) {
  const [secure, setSecure] = useState(isPassword);

  return (
    <View style={[styles.inputWrapper, style]}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#9ca3af"
        secureTextEntry={isPassword ? secure : false}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setSecure(s => !s)}
          activeOpacity={0.7}
        >
          <Ionicons name={secure ? 'eye-off' : 'eye'} size={22} color="#9ca3af" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#f3f4f6',
    paddingRight: 44, // space for the icon
  },
  icon: {
    position: 'absolute',
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    height: '100%',
  },
}); 