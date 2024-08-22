import '../../../assets/css/elements/overlaypopup.css';

export const OverlayPopup = (props) => {

    return(
        <div className={"popup " + props.className}>
            <div className="window">
                <div className="content">
                    {props.content}
                </div>
            </div>
        </div>
    )
}