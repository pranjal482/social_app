import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

import { images } from '../../constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

const SignIn = () => {

  const [form , setForm] = useState({
    email: "",
    password: ''
  })

  return (
    <SafeAreaView style={tw`bg-[#161622] h-full`}>
      <ScrollView>
        <View style={tw`w-full  justify-center min-h-[85vh] px-4 my-6`}>
          <Image source={images.logo} resizeMode='contain' style={tw`w-[115px] h-[35px]`} />

          <Text style={tw`text-2xl text-white mt-10 font-semibold`}>Log in to Aora</Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
            />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
            />

            <CustomButton  />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn