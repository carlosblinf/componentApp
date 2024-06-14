import { showPrompt } from "@/config/adapters/prompt.adapter";
import ContainerView from "@/presentation/components/ui/ContainerView";
import { SpaceSeparator } from "@/presentation/components/ui/Separator";
import Title from "@/presentation/components/ui/Title";
import { Button } from "@/presentation/components/ui/buttons";
import { Alert, Platform } from "react-native";

export default function AlertScreen() {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert 1", "with 2 butons", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert 2", "with 3 butons", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createCancelableAlert = () =>
    Alert.alert(
      "Alert 3",
      "with cancel alert",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog.",
          ),
      },
    );

  const createPromptAlert = () => {
    if (Platform.OS == "ios") {
      Alert.prompt(
        "Personal Information",
        "enter your number",
        (value: string) => console.log(value),
        "secure-text",
        "default text input",
        "number-pad",
      );
    } else if (Platform.OS == "android") {
      showPrompt(
        "Personal Information",
        "enter your number",
        (value: string) => console.log(value),
        {
          type: "secure-text",
          placeholder: "default text input",
          keyboardType: "number-pad",
        },
      );
    }
  };

  const createPromptInput = () => {
    showPrompt(
      "Subscribe newsletter",
      "Enter your email",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: (text: string) => console.log("OK Pressed, email: " + text),
        },
      ],
      {
        type: "email-address",
        cancelable: false,
        // defaultValue: "you@example.com",
        placeholder: "you@example.com",
      },
    );
  };

  return (
    <ContainerView margin>
      <Title text="Alerts" />
      <Button text="Alert - 2 Buttons" onPress={createTwoButtonAlert} />
      <SpaceSeparator />
      <Button text="Alert - 3 Buttons" onPress={createThreeButtonAlert} />
      <SpaceSeparator />
      <Button text="Alert with cancel" onPress={createCancelableAlert} />
      <SpaceSeparator />
      <Button text="Alert with Prompt" onPress={createPromptAlert} />
      <SpaceSeparator />
      <Button text="Prompt - Input" onPress={createPromptInput} />
    </ContainerView>
  );
}
