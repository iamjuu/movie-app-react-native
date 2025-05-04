import { StyleSheet, Text, View } from 'react-native';

export default function ServiceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
}); 