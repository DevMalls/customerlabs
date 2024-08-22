import { useEffect, useState } from 'react';
import { Header } from '../common/Header';
import { MOutlineDropdown } from '../elements/dropdown/MOutlineDropdown';
import { SelectedSchema } from './SelectedSchema';
import { segment } from '../../common/constants';
import { filterschemadropdown, filterunselecteddropdownschema, getSelectedSchema } from '../../functions/schema';
import '../../assets/css/auidence/savesegment.css';

export const SaveSegment = (props) => {

    //=======================================================

    const [segmentTxtboxvalue, setSegmentTxtboxvalue] = useState("");
    const [schemaDropdownlist, setSchemaDropdownlist] = useState([]);
    const [selectedDropdown, setSelectedDropdown] = useState("");
    const [addedSchemalist, setAddedSchemalist] = useState([]);

    //=======================================================

    useEffect(() => {
        setSchemaDropdownlist(segment.schema);
    }, [])

    //=======================================================

    const onClickBackButton = () => {
        props.onClickBack();
    }

    const onChangeSegmentInputbox = (event) => {
        setSegmentTxtboxvalue(event.target.value);
    }

    const onChangeDropdown = (value) => {
        setSelectedDropdown(value);
    }

    const onClickAddSchema = () => {
        if (addedSchemalist.length !== segment.schema.length) {
            setAddedSchemalist(prev => [...prev, selectedDropdown]);
            setSchemaDropdownlist(filterschemadropdown(segment.schema, addedSchemalist, selectedDropdown));
        }
        else{
            alert("No More schema to add");
        }
    }

    const onClickSaveSegment = () => {
        const reqobj = {
            "segment_name" :segmentTxtboxvalue,
            "schema": getSelectedSchema(segment.schema,addedSchemalist)
        }
        console.log({reqobj});
        onClickBackButton();
    }

    //=======================================================

    return (
        <div className="save-segment">
            <div className="save-segment-header">
                <Header title={"Saving Segment"} onClickBackBtn={onClickBackButton} />
            </div>
            <div className="save-segment-content">
                <div className="segment-label">
                    Enter the Name of the Segment
                </div>
                <div className="segment-input">
                    <input className="segment-input-textbox"
                        onChange={onChangeSegmentInputbox}
                        placeholder="Name of the segment"
                        type="text"
                        value={segmentTxtboxvalue}
                    />
                </div>
                <div className="segment-label">
                    To save your segment, you need to add the schemas to build the query
                </div>
                <SelectedSchema selected={addedSchemalist} />
                <div className="segment-input-container">
                    <MOutlineDropdown label={"Add schema to segment"} list={schemaDropdownlist}
                        defaultValue={""} onChangeDropdown={onChangeDropdown} />
                    <div className="add-new-schema-btn" onClick={onClickAddSchema}>
                        + Add new schema
                    </div>
                </div>
            </div>
            <div className="save-segment-footer">
                <button className="save-btn" onClick={onClickSaveSegment}>Save the segment</button>
                <button className="cancel-btn" onClick={onClickBackButton}>Cancel</button>
            </div>
        </div>
    );

}