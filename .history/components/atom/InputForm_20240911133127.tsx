import { TextInput, View } from "react-native";
import Button from "./Button";
import Label from "./Label";


export default function InputForm({ textForButton, labelText, playHolderText }){
    return (
        <View
            style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center"
            }}
        >
            <Label labelText={labelText} />
            <TextInput 
                defaultValue={playHolderText}
            />
            <Button yoButton={textForButton} />
        </View>
    )
}


