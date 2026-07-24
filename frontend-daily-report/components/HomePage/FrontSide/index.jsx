import Emotions from "./Emotions"
import ReportForm from "./ReportForm"

function frontSide() {
    return(
        <div className='frontSide'>
            <h2>Как прошёл ваш день?</h2>
            <Emotions />
            <ReportForm />
        </div>
    )
}

export default frontSide