import { Button as NativeButton, View } from "react-native";


export default function Button({ yoButton }){
    return (
        <View>
            <NativeButton
                color="#DAF7A6"
                title={yoButton}
            />
        </View>
    )
}


