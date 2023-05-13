import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MenuContainer = ({title, icon}) => {
  return (
    <TouchableOpacity className="items-center justify-center space-y-2">
        <View>
            <Text className="text-[#00BCC9] text-xl font-semibold">
              {title}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default MenuContainer