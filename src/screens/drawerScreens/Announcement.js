import { View, Text } from 'react-native'
import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native';
const Announcement = () => {
  return (
    <TailwindProvider>
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    </TailwindProvider>
  )
}

export default Announcement