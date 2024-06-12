import ContainerView from "@/presentation/components/ui/ContainerView";
import Card from "@/presentation/components/ui/Card";
import { Button } from "@/presentation/components/ui/buttons";

export default function SwitchScreen() {
  return (
    <ContainerView withMarginView styleInnerView={{ paddingVertical: 10 }}>
      <Card>
        <Button text="Click me" onPress={() => {}} />
      </Card>
    </ContainerView>
  );
}
