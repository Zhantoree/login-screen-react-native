import React, {useState} from 'react';
import {TextInput} from "react-native";

const Input = () => {
    const [text, setText] = useState('')

    return (
        <>
            <TextInput
                value={text}
                onChangeText={newText => setText(newText)}

                placeholder={'Type something'}
                style={{width: 200, height: 20}}
            ></TextInput>
        </>
    );
};

export default Input;