import '../../assets/css/common/header.css';
import backIcon from '../../assets/images/back.svg';

export const Header = (props) => {

    return (
        <div className="navigate-header">
            <div className="navigate-header-backbtn" onClick={props.onClickBackBtn}>
                <img src={backIcon} alt={"Back"} />
            </div>
            <div className="back-label">{props.title}</div>
        </div>
    );

}