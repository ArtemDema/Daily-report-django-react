import rightSideStyles from "./RightSide.module.css"
import LastReports from "./LastReports"

function rightSide() {
    return(
        <div className='rightSide'>
            <div className='nameRightDiv'>
              <h3>Последние записи</h3>
            </div>
            <LastReports emotion={"good"} monthNumber={7} monthNumberDay={27} />
            <LastReports emotion={"terrible"} monthNumber={7} monthNumberDay={26} />
            <LastReports emotion={"notBad"} monthNumber={7} monthNumberDay={25} />
            <LastReports emotion={"good"} monthNumber={7} monthNumberDay={24} />
            <LastReports emotion={"fine"} monthNumber={7} monthNumberDay={23} />
            <LastReports emotion={"good"} monthNumber={7} monthNumberDay={22} />
            <LastReports emotion={"good"} monthNumber={7} monthNumberDay={21} />
            <LastReports emotion={"good"} monthNumber={7} monthNumberDay={20} />
          </div>
    )
}

export default rightSide