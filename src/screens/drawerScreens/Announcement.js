import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const Announcement = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Announcement</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 500,
    fontSize: 20,
  },
});
export default Announcement