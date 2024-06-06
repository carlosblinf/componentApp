import { Pressable, Text } from "react-native";

export default function AnimateButton({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) {
  return (
    <Pressable
      onPress={action}
      style={{
        backgroundColor: "purple",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "white" }}>{text}</Text>
    </Pressable>
  );
}
