import rightSideStyles from "./RightSide.module.css"
import LastReports from "./LastReports"

function rightSide() {
    return(
        <div className='rightSide'>
            <div className='nameRightDiv'>
              <h3>Последние записи</h3>
            </div>
            <LastReports />
          </div>
    )
}

export default rightSide