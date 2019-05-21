import { StyleSheet, Dimensions } from 'react-native'

export const dime = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#05C3DE'
    },
    imagePreview: { 
        flex: 6,
    },
    textInput: {
        flex: 1, 
        //backgroundColor: 'gray',
        fontSize: 18,
        fontFamily: 'Ubuntu',
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingBottom: 2
    },
    buttonContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textButton: {
        color: 'white', 
        fontSize: 30,
        fontFamily: 'Ubuntu'
    },
    categoriaPicker: {
        height: 50,
        flex: 1,
        backgroundColor: '#05C3DE',
        color: 'white',
        fontFamily: 'Ubuntu',
        paddingLeft: 20
    }
})