import lastReportsStyles from "./LastReports.module.css"

            // <div className={emotionsStyles.emotion} id="excellent"></div>
            // <div className={emotionsStyles.emotion} id="fine"></div>
            // <div className={emotionsStyles.emotion} id="good"></div>
            // <div className={emotionsStyles.emotion} id="notBad"></div>
            // <div className={emotionsStyles.emotion} id="bad"></div>
            // <div className={emotionsStyles.emotion} id="terrible"></div>
// временно реализованы пустышки. В них нет никакой информации и они нужны только для того, что бы показать будущие 
// стили и смысл компонента
function LastReports() {
    return(
        <div className={lastReportsStyles.lastReportsDiv}>
            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id="good"></div>
                <h4>Посмотреть запись за n месяц</h4>
            </div>

            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id="terrible"></div>
                <h4>Посмотреть запись за n месяц</h4>
            </div>

            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id="excellent"></div>
                <h4>Посмотреть запись за n месяц</h4>
            </div>

            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id="excellent"></div>
                <h4>Посмотреть запись за n месяц</h4>
            </div>
                
            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id="notBad"></div>
                <h4>Посмотреть запись за n месяц</h4>
            </div>

            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id="good"></div>
                <h4>Посмотреть запись за n месяц</h4>
            </div>

            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id="good"></div>
                <h4>Посмотреть запись за n месяц</h4>
            </div>

            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id="bad"></div>
                <h4>Посмотреть запись за n месяц</h4>
            </div>

            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id="bad"></div>
                <h4>Посмотреть запись за n месяц</h4>
            </div>

            <div className={lastReportsStyles.lastReport}>
                <div className={lastReportsStyles.emotion} id="bad"></div>
                <h4>Посмотреть запись за n месяц</h4>
            </div>

        </div>
    )
}

export default LastReports