import { TextInput, View } from "react-native";
import Button from "../atom/Button";
import Label from "../atom/Label";


export default function InputForm({ textForButton, labelText, playHolderText }){
    return (
        <View
            style={{
                flexDirection: "row",
                gap: 15,
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


