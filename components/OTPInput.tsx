import React, { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function OTPInput({ length = 4, onChangeOTP }: { length?: number; onChangeOTP?: (otp: string) => void }) {
  const [otp, setOtp] = React.useState(Array(length).fill(''));
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, idx: number) => {
    if (!/^[0-9]?$/.test(text)) return; // Only allow single digit
    const newOtp = [...otp];
    newOtp[idx] = text;
    setOtp(newOtp);
    onChangeOTP && onChangeOTP(newOtp.join(''));
    if (text && idx < length - 1) {
      inputs.current[idx + 1]?.focus();
    }
    if (!text && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  };

  return (
    <View style={styles.otpContainer}>
      {otp.map((digit, idx) => (
        <TextInput
          key={idx}
          ref={ref => (inputs.current[idx] = ref)}
          style={styles.otpBox}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={text => handleChange(text, idx)}
          autoFocus={idx === 0}
          textAlign="center"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 20,
  },
  otpBox: {
    width: 48,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#f7f7f7',
    fontSize: 24,
    color: '#222',
    textAlign: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 2,
  },
}); 