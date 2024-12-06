import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';

import {icons} from '../constants' ;

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={tw`space-y-2 ${otherStyles}`}>
      <Text style={tw`text-base text-gray-100 font-medium mb-2`}>{title}</Text>

      <View style={tw`border-2 border-black-100 w-full h-16 px-4 bg-[#1E1E2D]  rounded-2xl focus:border-white items-center flex-row`}>
            <TextInput
             style={tw`flex-1 text-white font-semibold text-base`}
             value={value}
             placeholder={placeholder}
             placeholderTextColor="#7b7b8b"
             onChange={handleChangeText}
             secureTextEntry={title === 'Password' && !showPassword}
            />

            {title === 'Password' && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image source={!showPassword ? icons.eye : icons.eyeHide} style={tw`w-6 h-6`} />
                </TouchableOpacity>
            )}
      </View>
    </View>
  )
}

export default FormField