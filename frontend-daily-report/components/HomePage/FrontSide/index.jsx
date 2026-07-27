import Emotions from "./Emotions"
import ReportForm from "./ReportForm"
import FrontSideStyles from "./FrontSide.module.css"

function frontSide() {
    return(
        <div className={FrontSideStyles.frontSide}>
            <h2>Как прошёл ваш день?</h2>
            <Emotions />
            <ReportForm />
        </div>
    )
}

export default frontSide