import { Image, SafeAreaView, ScrollView,Text, View } from "react-native";
import {Redirect,router} from 'expo-router'
import { StatusBar } from "expo-status-bar";
import tw from 'twrnc';

import {images} from '../constants';
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView style={tw`bg-[#161622] h-full`}>
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View style={tw`w-full flex-1 justify-cente items-center min-h-[85vh] px-4 mt-20`}>
          <Image source={images.logo} style={tw`w-[150px] h-[100px]`} resizeMode="contain" />

          <Image source={images.cards} style={tw`max-w-[480px]  h-[350px]`} resizeMode="contain" />

          <View style={tw`relative mt-5 mb-3 `}>
            <Text style={tw`text-3xl text-white font-bold text-center`}>
              Discover Endless Possibilities with
              <Text style={tw`text-[#FF8E01]`} > Aora</Text>
            </Text>
            <Image source={images.path} style={tw`w-[136px] h-[15px] absolute -bottom-2 -right-8`} resizeMode="contain" />
          </View>

          <Text style={tw`text-sm text-gray-100 mt-7 text-center`}>Where creativity meets innovation: embark on a journey of limitless exploration with Aora.</Text>

          <CustomButton 
              title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyles="w-full mt-7"
              />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}


