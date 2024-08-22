import { useEffect, useState } from "react";
import { MOutlineDropdown } from "../elements/dropdown/MOutlineDropdown";
import { segment } from "../../common/constants";
import { filterschemadropdown, filterunselecteddropdownschema } from "../../functions/schema";
import '../../assets/css/auidence/selectedschema.css';

export const SelectedSchema = (props) => {

    //=======================================

    const [schemadropdownlist, setSchemadropdownlist] = useState([]);


    useEffect(() => {
        setSchemadropdownlist(filterunselecteddropdownschema(segment.schema, props.selected))
    }, [props.selected])

    //========================================

    const onChangeDropdown = (value) => {
        // props.onChangeDropdown(value);
    }
    //========================================

    return (
        <div className="selected-schema">
            {props.selected.map((item, index) => {
                let schemalist = filterunselecteddropdownschema(segment.schema, props.selected,item)
                return (
                    <div key={index} className="selected-schema-dropdown">
                        <MOutlineDropdown label={"Add schema to segment"} defaultValue={item}
                            list={schemalist}
                            onChangeDropdown={onChangeDropdown} />
                    </div>);
            })}
        </div>
    )
}