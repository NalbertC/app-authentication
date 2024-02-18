import { StyleSheet, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps { }

export function Input({ ...rest }: InputProps) {
    return (
        <TextInput
            className="bg-white w-full h-10 rounded-md px-4 text-base justify-center"
            style={styles.input}
            {...rest}
        />
    );
}
const styles = StyleSheet.create({
    input: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 2, // Esta propriedade é específica do Android para elevar a sombra
    },
});
