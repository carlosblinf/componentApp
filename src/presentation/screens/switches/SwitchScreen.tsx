import ContainerView from "@/presentation/components/ui/ContainerView";
import Card from "@/presentation/components/ui/Card";
import { Button } from "@/presentation/components/ui/buttons";
import CustomSwitch from "@/presentation/components/ui/CustomSwitch";
import { useState } from "react";
import { LinearSeparator } from "@/presentation/components/ui/Separator";

export default function SwitchScreen() {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const handleOnChange = (value) => setState({ ...state, value });
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ContainerView withMarginView styleInnerView={{ paddingVertical: 10 }}>
      <Card>
        <CustomSwitch
          text="Is active ??"
          isOn={state.isActive}
          onChange={(value) => setState({ ...state, isActive: value })}
        />
        <LinearSeparator />

        <CustomSwitch
          text="Are hungry ??"
          isOn={state.isHungry}
          onChange={(value) => setState({ ...state, isHungry: value })}
        />
        <LinearSeparator />

        <CustomSwitch
          text="Is happy ??"
          isOn={state.isHappy}
          onChange={(value) => setState({ ...state, isHappy: value })}
        />
        {/* <Button text="Click me" onPress={() => {}} /> */}
      </Card>
    </ContainerView>
  );
}
