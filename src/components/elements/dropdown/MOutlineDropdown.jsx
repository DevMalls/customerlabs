import { useEffect, useState } from "react";
import '../../../assets/css/elements/moutlinedropdown.css';
export const MOutlineDropdown = (props) => {

    //=========================================

    const [selectedvalue, setSelectedvalue] = useState("");

    useEffect(() => {
        setSelectedvalue(props.defaultValue);
    }, [props.list])

    //=========================================


    //=========================================

    const onChangeHandler = (event) => {
        setSelectedvalue(event.target.value)
        props.onChangeDropdown(event.target.value)
    }

    //=========================================

    return (
        <div className="moutline-dropdown">
            <select className="moutline-dropdown-select" 
                value={selectedvalue} onChange={onChangeHandler}>
                <option className="moutline-dropdown-option"
                    value={""} disabled>{props.label}</option>
                {props.list.map((item, index) => {
                    return <option className="moutline-dropdown-option"
                        key={index} value={item.label}>{item.label}</option>
                })
                }
            </select>
        </div>
    )
}