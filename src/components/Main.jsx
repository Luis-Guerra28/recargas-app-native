import React, { useState } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { RadioButton, TextInput, Checkbox } from 'react-native-paper'
import MountInfo from './TextMount'

// const CompanyRadioGroup = () => {
//   return (
//     <View>
//       <RadioButton.Group onValueChange={newCompany => setCompany(newCompany)}>
//         <RadioButton value='Digitel' />
//         <Text>Digitel</Text>
//         <RadioButton value='Movistar' />
//         <Text>Movistar</Text>
//       </RadioButton.Group>
//     </View>
//   )
// }

const Main = () => {
  const [inputValue, setInputValue] = useState('')
  const [checked, setChecked] = useState('')
  const [company, setCompany] = useState('Movistar')

  const handleInputChange = (text) => {
    setInputValue(text)
  }

  const handleButtonPress = () => {
    Alert.alert('Inputs', `${inputValue} ${checked} ${company}`)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', padding: 20 }}>
      <TextInput value={inputValue} onChangeText={handleInputChange} />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => { setChecked(!checked) }}
        />
        <Text>Valor maximo</Text>
      </View>

      <RadioButton.Group onValueChange={newCompany => setCompany(newCompany)} value={company}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value='Digitel' />
          <Text>Digitel</Text>
          <RadioButton value='Movistar' />
          <Text>Movistar</Text>
        </View>
      </RadioButton.Group>

      {/* <CompanyRadioGroup />  */}
      <MountInfo text='Valor de la recarga (por arriba)' mount='00.00' />
      <MountInfo text='20%' mount='00.00' />
      <MountInfo text='Total a pagar' mount='00.00' />
      <Text>Combination</Text>

      <MountInfo text='Valor de la recarga (por abajo)' mount='00.00' />
      <MountInfo text='20%' mount='00.00' />
      <MountInfo text='Total a pagar' mount='00.00' />
      <Text>Combination</Text>
      <Button
        title='Calcular'
        onPress={handleButtonPress}
      />
    </View>
  )
}

export default Main
