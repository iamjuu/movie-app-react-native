import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import OTPInput from '../../components/OTPInput';

export default function OtpScreen() {
  const [timer, setTimer] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isCounting && timer > 0) {
      interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsCounting(false);
    }
    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [isCounting, timer]);

  const handleResend = () => {
    setTimer(35);
    setIsCounting(true);
    // Add your resend logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.subtitle}>We sent a code to your email</Text>
        <OTPInput length={4} />
        <Button title="Verify" style={styles.button} onPress={() => {}} />
        <Text style={styles.resendText}>
          Didn&apos;t receive the code?{' '}
          {isCounting && timer > 0 ? (
            <Text style={styles.timer}>{timer}s</Text>
          ) : (
            <TouchableOpacity onPress={handleResend} disabled={isCounting}>
              <Text style={styles.resendLink}>Resend</Text>
            </TouchableOpacity>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e40af',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    marginTop: 8,
    marginBottom: 8,
  },
  resendText: {
    color: '#6b7280',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 16,
  },
  resendLink: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
  timer: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
}); 