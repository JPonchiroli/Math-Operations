import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home(){

    const navigation = useNavigation();

    return(
        <View>
            <Text>Choose a Operation</Text>
            
            <TouchableOpacity onPress={() => navigation.navigate('Sum')}>
                <Text>Sum</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Subtract')}>
                <Text>Subtract</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Multiplication')}>
                <Text>Multiplication</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Division')}>
                <Text>Division</Text>
            </TouchableOpacity>
        </View>
    );
}