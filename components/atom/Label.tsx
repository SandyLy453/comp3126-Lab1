import { Text, View} from "react-native";

export default function Label({ labelText} ){
    return(
        <View>
            <Text
            style={{color: "green"}}
            >
                {labelText}
            </Text>
        </View>
    )
}



