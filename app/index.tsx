import { ImageBackground, StyleSheet,Text, View } from "react-native";
import {Link} from 'expo-router'
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <ImageBackground style={styles.bgImage} source={{uri : "https://imgcdn.stablediffusionweb.com/2024/9/16/7832a91e-5594-4c8b-8ebf-c7e9e1e0234c.jpg"}}>
    
    <View
      style={styles.container}
    >
        <Text style={{color: 'white', fontSize: '44px', fontWeight: '900'}}>Aora</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color: 'blue'}}>Go to Profile</Link>
    </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container : {
    display: 'flex',
    flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
    padding: 20,

  },
  bgImage : {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%'
  }
})
