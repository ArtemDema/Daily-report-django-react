import leftSideStyles from "./LeftSide.module.css"
import SelectDate from "./SelectDate"

function leftSide() {
    return(
        <div className='leftSide'>
            <div className='nameLeftDiv'>
                <h3>Выбрать дату</h3>
            </div>
            <div className={leftSideStyles.monthDiv}>
                <SelectDate countSkip={0} countDays={31} monthId={8} />
                <SelectDate countSkip={3} countDays={30} monthId={9} />
            </div>
        </div>
    )
}

export default leftSide