import { forwardRef } from "react";

export function EmojiPicker(props, ref) {
    const [isOpen, setIsOpen] = useState(false);

    function EmojiPickerContainer() {
        return (
            <div>
                {data.map((emoji) => (
                    <div key={emoji.symbol}>{emoji.symbol}</div>
                ))}
            </div>
            );
    };
    
    return (<div>
        <button>😁</button>
        {isOpen ? <div></div> : ""}
    </div>
    );
}
export default forwardRef(EmojiPicker);