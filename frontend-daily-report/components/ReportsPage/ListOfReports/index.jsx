import listOfReportsStyles from "./ListOfReports.module.css"

function ListOfReports({day, month, year, emotion, text}) {
  const monthYear = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
    return(
      <>
        <h4>{day} {monthYear[month - 1]} {year} года</h4>

        <div className={listOfReportsStyles.report}>
          <div className={listOfReportsStyles.reportEmotion}>
            <div className={listOfReportsStyles.emotion} id={emotion}></div>
          </div>

          <div className={listOfReportsStyles.reportText}>
            <h5>{text}</h5>
          </div>

          {/* <div className={listOfReportsStyles.reportEdit}>
            <div className={listOfReportsStyles.reportDeleteButton}></div>
            <div className={listOfReportsStyles.reportEditButton}></div>
          </div> */}
        </div>
      </>
    )
}

export default ListOfReports