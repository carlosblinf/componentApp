import {
  View,
  Text,
  Image,
  StyleProp,
  ImageStyle,
  Animated,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useAnimation } from "@/presentation/hooks/useAnimation";

type ImageProps = {
  uri: string;
  style: StyleProp<ImageStyle>;
};
export default function FadeInImage({ uri, style }: ImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isLoading && (
        <ActivityIndicator
          color="grey"
          size={30}
          style={{ position: "absolute" }}
        />
      )}
      <Animated.Image
        source={{ uri }}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
        style={[style, { opacity: animatedOpacity }]}
      />
    </View>
  );
}
