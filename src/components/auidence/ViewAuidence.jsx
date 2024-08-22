import { useState } from "react";
import { Header } from "../common/Header";
import { OverlayPopup } from "../elements/overlaypopup/OverlayPopup";
import { SaveSegment } from "./SaveSegment";
import '../../assets/css/auidence/viewauidence.css';

export const ViewAudience = (props) => {

    //======================================================

    const [showSegmentPopup, setShowSegmentPopup] = useState(false);


    //======================================================

    const onClickSaveSegment = () => {
        setShowSegmentPopup(true);
    }

    const onClickBackHandler = () => {
        setShowSegmentPopup(false);
    }

    //======================================================

    return (
        <div className="view-auidence">
            <div className="view-auidence-header">
                <Header title="View Auidence" />
            </div>
            <div className="view-auidence-content">
                <button className="save-segment-btn" onClick={onClickSaveSegment}>Save Segment</button>
            </div>
            {showSegmentPopup ?
                <OverlayPopup className={"save-segment-popup"} content={<SaveSegment onClickBack={onClickBackHandler} />} />
                :
                ''
            }
        </div>
    );
}