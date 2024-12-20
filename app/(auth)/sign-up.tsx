import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Link, router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {

  const [form , setForm] = useState({
    username: "",
    email: "",
    password: ''
  });

 const [isSubmitting, setIsSubmitting] = useState(false);

 const submit = async () => {
    if (!form.username || !form.email || !form.password) {
        return Alert.alert('Error', 'Please fill in all fields.');
    }

    setIsSubmitting(true);

    try {
        const result = await createUser(form.username, form.email, form.password);
        console.log('Sign-up successful:', result);

        router.replace('/home');
    } catch (error) {
        Alert.alert('Error', error.message);
    } finally {
        setIsSubmitting(false);
    }
};


  return (
    <SafeAreaView style={tw`bg-[#161622] h-full`}>
      <ScrollView>
        <View style={tw`w-full  justify-center min-h-[85vh] px-4 my-24 `}>
          <Image source={images.logo} resizeMode='contain' style={tw`w-[115px] h-[35px]`} />

          <Text style={tw`text-2xl text-white mt-10 font-semibold`}>Sign up to Aora</Text>

          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({...form, username: e})}
            otherStyles="mt-7"
            />

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
              title="Sign Up"
              handlePress={submit}
              containerStyles="mt-10"
              isLoading={isSubmitting}
            />

            <View style={tw`justify-center pt-5 flex-row gap-2`}>
              <Text style={tw`text-lg text-gray-100 font-regular`}>
                  Have an account already?
              </Text>
              <Link href="/sign-in" style={tw`text-lg font-semibold text-[#FF9C01]`}>
                Sign In
              </Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp