import { Text, View, StyleSheet, Image, TextInput, Pressable, ScrollView, SafeAreaView } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded] = useFonts({
    "RedditSans-Regular": require("../assets/fonts/RedditSans-Regular.ttf"),
    "RedditSans-SemiBold": require("../assets/fonts/RedditSans-SemiBold.ttf"),
  });

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("@/assets/images/login-bg.jpg")} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        {/* Logo */}
        <Image source={require("@/assets/images/filmraft-logo1.png")} style={styles.logo} />

        {/* Login Form */}
        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#7a7a7a"
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#7a7a7a"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.forgotPassword}>Forgot your password?</Text>

          <View style={styles.buttonContainer}>
            <Pressable style={styles.loginButton} onPress={() => router.push("home")}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Pressable style={styles.registerButton} onPress={() => router.push("register")}>
              <Text style={styles.buttonTextDisabled}>Register</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(20, 59, 85, 0.7)", // Dark overlay effect
  },
  logo: {
    width: "90%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  formContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#484848",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  forgotPassword: {
    color: "#7a7a7a",
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  loginButton: {
    flex: 1,
    backgroundColor: "#5a5a5a",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },
  registerButton: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextDisabled: {
    color: "#7a7a7a",
    fontSize: 18,
    fontWeight: "bold",
  },
});

//test
