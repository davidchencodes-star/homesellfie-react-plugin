import CloseBtn from "../../assets/close_white.svg";
import { useTotalContext } from "../../context/TotalContext";
const FullScreen3DTour = () => {
    const { homedata } = useTotalContext();
    const parseData = JSON.parse(homedata);
    const closeFullscreen = () => {
        document.getElementById("fullscreen-iframe").style.display = "none";
    }
    return (
        <div id="fullscreen-iframe" className="fullscreen-container">
            <div className="fullscreen-background" onClick={closeFullscreen}></div>
            <iframe src={parseData["360GradRundgang"]} className="fullscreen-iframe" />
            <img src={CloseBtn} width={20} height={20} className="fullscreen-close" onClick={closeFullscreen} />
        </div>
    )
}

export default FullScreen3DTour;