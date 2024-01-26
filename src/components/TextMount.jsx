import React from 'react'
import { Text, View } from 'react-native'

const MountInfo = ({ text, mount }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>{text}</Text>
      <Text>{mount}</Text>
    </View>
  )
}

export default MountInfo
