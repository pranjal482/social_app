import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Link } from 'expo-router';

import { images } from '../../constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

const SignIn = () => {

  const [form , setForm] = useState({
    email: "",
    password: ''
  });

 const [isSubmitting, setIsSubmitting] = useState(false);

 const submit = () => {

 }

  return (
    <SafeAreaView style={tw`bg-[#161622] h-full`}>
      <ScrollView>
        <View style={tw`w-full  justify-center min-h-[85vh] px-4 my-36 `}>
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

            <CustomButton 
              title="Sign In"
              handlePress={submit}
              containerStyles="mt-10"
              isLoading={isSubmitting}
            />

            <View style={tw`justify-center pt-5 flex-row gap-2`}>
              <Text style={tw`text-lg text-gray-100 font-regular`}>
                  Don't have account?
              </Text>
              <Link href="/sign-up" style={tw`text-lg font-semibold text-[#FF9C01]`}>
                Sign Up
              </Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn