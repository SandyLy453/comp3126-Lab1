import { View } from "react-native";
import Button from "@/components/atom/Button";
import Label from "@/components/atom/Label";
import InputForm from "@/components/atom/InputForm";


export default function Index() {
  return(
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Button yoButton="This is a Button :]]~" />
      <Label labelText="This is Button's label" />

      <InputForm 
        labelText="This is a form"
        textForButton="This is a form's button"
        playHolderText="Here is a placeholder"
      />
    </View>
  )
}


