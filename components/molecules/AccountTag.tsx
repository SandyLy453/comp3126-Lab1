import { View } from "react-native";
import Photo from "@/components/atom/Photo";


export default function AccountTag({name}) {
    return (
        <View
            style={{
                flexDirection: "row",
                gap: 15,
                alignItems: "flex-start",
            }}
        >
            <Photo/>
            <div>
                <h4>{name}</h4>
            </div>
        </View>
    )
}



