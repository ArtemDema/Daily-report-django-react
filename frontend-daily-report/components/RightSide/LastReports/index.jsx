import lastReportsStyles from "./LastReports.module.css"

function LastReports({emotion, monthNumber, monthNumberDay}) {

    const month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
    return(
        <div className={lastReportsStyles.lastReportsDiv}>
            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id={emotion}></div>
                <h4>Посмотреть запись за {monthNumberDay} {month[monthNumber - 1]}</h4>
            </div>
        </div>
    )
}

export default LastReports