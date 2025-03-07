import { Text, View, StyleSheet, Image, TextInput, Pressable, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Register() {
  const [fontsLoaded] = useFonts({
    "RedditSans-Regular": require("@/assets/fonts/RedditSans-Regular.ttf"),
    "RedditSans-SemiBold": require("@/assets/fonts/RedditSans-SemiBold.ttf"),
  });

  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    language: "English",
    reasons: "",
  });

  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const languages = ["English", "French", "Spanish", "Italian", "Portuguese"];

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

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
        <Pressable style={styles.logoWrap} onPress={() => router.push("")}>
        <Image source={require("@/assets/images/filmraft-logo1.png")} style={styles.logo} />
        </Pressable>
        {/* Registration Form */}
        <ScrollView contentContainerStyle={styles.formContainer}>
          <Text style={styles.welcomeText}>Create an Account</Text>

          <TextInput style={styles.input} placeholder="Username" value={form.username} onChangeText={(text) => handleChange("username", text)} />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry value={form.password} onChangeText={(text) => handleChange("password", text)} />
          <View style={{ marginTop: 15 }}>
          <TextInput style={styles.input} placeholder="First Name" value={form.firstName} onChangeText={(text) => handleChange("firstName", text)} />
          <TextInput style={styles.input} placeholder="Last Name" value={form.lastName} onChangeText={(text) => handleChange("lastName", text)} />

          </View>
          <View style={{ marginTop: 15 }}>

          <TextInput style={styles.input} placeholder="Email Address" value={form.email} onChangeText={(text) => handleChange("email", text)} />
          <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" value={form.phone} onChangeText={(text) => handleChange("phone", text)} />
          <TextInput style={styles.input} placeholder="Address" value={form.address} onChangeText={(text) => handleChange("address", text)} />
</View>
          <Text style={styles.label}>Preferred Language</Text>
          <TouchableOpacity style={styles.dropdown} onPress={() => setLanguageDropdownVisible(!languageDropdownVisible)}>
            <Text style={styles.dropdownText}>{form.language}</Text>
          </TouchableOpacity>
          {languageDropdownVisible && (
            <View style={styles.dropdownMenu}>
              {languages.map((lang, index) => (
                <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => {handleChange("language", lang); setLanguageDropdownVisible(false);}}>
                  <Text style={styles.dropdownItemText}>{lang}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TextInput
            style={styles.inputMultiline}
            placeholder="Reasons for preserving film (Optional)"
            multiline
            value={form.reasons}
            onChangeText={(text) => handleChange("reasons", text)}
          />

          <View style={styles.buttonContainer}>
            <Pressable style={styles.registerButton} onPress={() => router.push("")}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  backgroundImage: { position: "absolute", width: "100%", height: "100%", resizeMode: "cover" },
  overlay: { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20, 59, 85, 0.7)" },
  logo: { width: "60%", height: 100, resizeMode: "contain", marginTop: 8, marginBottom: 6 },
    logoWrap: {alignItems: "center", width: "100%" },

  formContainer: { width: "90%", backgroundColor: "white", borderRadius: 10, padding: 20, alignItems: "center" },
  welcomeText: { fontSize: 26, fontWeight: "bold", color: "#484848", marginBottom: 15 },
  input: { width: 300, height: 50, borderWidth: 1, borderColor: "#bdbdbd", borderRadius: 8, paddingHorizontal: 15, fontSize: 16, marginBottom: 10 },
  inputMultiline: { width: "100%", height: 80, borderWidth: 1, borderColor: "#bdbdbd", borderRadius: 8, paddingHorizontal: 15, fontSize: 16, marginBottom: 10, textAlignVertical: "top" },
  label: { color: "#484848", fontSize: 16, marginBottom: 5, alignSelf: "flex-start" },
  dropdown: { width: "100%", height: 50, borderWidth: 1, borderColor: "#bdbdbd", borderRadius: 8, justifyContent: "center", paddingHorizontal: 15, marginBottom: 10 },
  dropdownText: { fontSize: 16, color: "#484848" },
  dropdownMenu: { width: "100%", backgroundColor: "#cccccc", borderRadius: 8, borderWidth: 1, borderColor: "#bdbdbd", position: "absolute", bottom: 100, zIndex: 10 },
  dropdownItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  dropdownItemText: { fontSize: 16, color: "#484848" },
  buttonContainer: { width: "100%", alignItems: "center" },
  registerButton: { backgroundColor: "#5a5a5a", padding: 12, borderRadius: 8, alignItems: "center", width: "100%" },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
