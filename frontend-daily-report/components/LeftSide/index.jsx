import leftSideStyles from "./LeftSide.module.css"
import SelectDate from "./SelectDate"

function leftSide() {
    return(
        <div className='leftSide'>
            <div className='nameLeftDiv'>
                <h3>Выбрать дату</h3>
                <SelectDate />
            </div>
        </div>
    )
}

export default leftSide