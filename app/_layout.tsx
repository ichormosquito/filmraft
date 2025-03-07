import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
  <Stack.Screen name="home" options={{ headerShown: false }} />
  <Stack.Screen name="register" options={{ headerShown: false }} />
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="archive" options={{ headerShown: false }} />
    <Stack.Screen name="archive2" options={{ headerShown: false }} />

  </Stack>;
}
