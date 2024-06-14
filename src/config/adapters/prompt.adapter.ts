import { AlertButton, KeyboardType, Platform } from "react-native";
import prompt from "react-native-prompt-android";

type PromptType = "default" | "plain-text" | "secure-text";
type PromptTypeIOS = "login-password";
type PromptTypeAndroid = "numeric" | "email-address" | "phone-pad";

type PromptButton = {
  text?: string;
  onPress?: (message: string) => void;
  /** @platform ios */
  style?: "default" | "cancel" | "destructive";
};

type PromptCallback =
  | ((value: string) => void)
  | Array<PromptButton>
  | AlertButton[];

export interface PromptOptions {
  type?: PromptType | PromptTypeIOS | PromptTypeAndroid;
  defaultValue?: string;
  /** @platform android */
  placeholder?: string;
  /** @platform android */
  cancelable?: boolean;
  keyboardType?: KeyboardType;
}

function getType(type: PromptType | PromptTypeIOS | PromptTypeAndroid) {
  if (typeof type === "PromptType") return type;
  if (Platform.OS === "android" && typeof type === "PromptTypeAndroid") {
    return type;
  }
  if (Platform.OS === "ios" && typeof type === "PromptTypeIOS") {
    return type;
  }
}

export function showPrompt(
  title?: string,
  message?: string,
  callbackOrButtons?: PromptCallback,
  options?: PromptOptions,
) {
  prompt(title, message, callbackOrButtons, {
    ...options,
    type: options?.type ? getType(options.type) : "plain-text",
  });
}
