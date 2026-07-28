import selectDateStyles from "./SelectDate.module.css"

// временно реализованы пустышки. В них нет никакой информации и они нужны только для того, что бы показать будущие 
// стили и смысл компонента
function SelectDate({countSkip, countDays, monthId}) {
    const daysArray = Array.from({length: countDays + countSkip}).map((_, index) =>{
      if (index >= countSkip){
        return index + 1 - countSkip
      }
      return null
    })
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    return(
      <>
        <h2 className={selectDateStyles.monthName} >{months[monthId - 1]}</h2>
        <div className={selectDateStyles.month}>
          {daysArray.map((day, index) => (
            <div key={index} className={`${day === null ? selectDateStyles.monthDayNull : selectDateStyles.monthDay} ${index % 7 == 5 || index % 7 === 6 ? "weekend" : "workDay"}`}>
                <h2 className={selectDateStyles.numberOfDay}>{day}</h2>
            </div>
          ))}
        </div>
      </>
    )
}

export default SelectDate