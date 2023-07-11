import {useRef} from "react";
import EmojiPicker from "./emojiPicker";
export default function EmojiPickerInput() {
    const refInput = useRef();//Permite obtener la referencia de un nodo html para jugar con diferentes aspectos de ese elemento

    return (
        <div>
            <input ref={refInput}/>
            <EmojiPicker ref={refInput}/>
        </div>
    );
};