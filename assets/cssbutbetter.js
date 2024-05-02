import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    words: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'HelloHeadlineW00Regular',
        },
    coolerwords: function(siize) {
        return {
        color: '#000000',
        textAlign: 'center',
        fontSize: siize,
        fontFamily: 'HelloHeadlineW00Regular'
        }
    },
    container: {
        backgroundColor: '#8BD6F9',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
  },
    buttonbackgroundstyle: {
        backgroundColor: '#000000',
        borderRadius: 50,
        padding: 20
    }
    }
)

export default styles;