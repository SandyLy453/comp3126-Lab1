import { View } from "react-native";
import Button from "@/components/atom/Button";
import Label from "@/components/atom/Label";
import InputForm from "@/components/molecules/InputForm";
import Post from "@/components/molecules/Post";

export default function Index() {
  return(
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <InputForm 
        labelText="This is a form"
        textForButton="This is a form's button"
        playHolderText="Here is a placeholder"
      />

      <Post/>
    </View>
  )
}


