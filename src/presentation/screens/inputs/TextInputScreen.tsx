import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import ContainerView from "@/presentation/components/ui/ContainerView";
import Title from "@/presentation/components/ui/Title";
import Card from "@/presentation/components/ui/Card";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { colors } from "@/config/theme/theme";
import { SpaceSeparator } from "@/presentation/components/ui/Separator";

export default function TextInputScreen() {
  const [form, onChangeForm] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <ContainerView margin>
          <Title text="Text Inputs" />
          <Card>
            <TextInput
              style={[styles.input]}
              value={form.name}
              onChangeText={(value) => onChangeForm({ ...form, name: value })}
              placeholder="Full Name"
              autoCapitalize="words"
              autoCorrect={false}
            />
            <TextInput
              style={[styles.input]}
              value={form.email}
              onChangeText={(value) => onChangeForm({ ...form, email: value })}
              placeholder="Email"
              keyboardType="email-address"
              inputMode="email"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={[styles.input]}
              value={form.phone}
              onChangeText={(value) => onChangeForm({ ...form, phone: value })}
              placeholder="Number"
              keyboardType="phone-pad"
              inputMode="tel"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Card>
          <SpaceSeparator />
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <SpaceSeparator />
          <Card>
            <TextInput
              style={[styles.input]}
              value={form.phone}
              onChangeText={(value) => onChangeForm({ ...form, phone: value })}
              placeholder="Number"
              keyboardType="phone-pad"
              inputMode="tel"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Card>
        </ContainerView>
        {Platform.OS === "ios" && <View style={{ height: 80 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.3)",
    color: colors.text,
  },
});
