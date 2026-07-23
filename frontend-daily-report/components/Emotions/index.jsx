import emotionsStyles from "./Emotions.module.css"

function Emotions() {
    return(
        <div className={emotionsStyles.emotionsDiv}>
            <div className={emotionsStyles.emotion} id="excellent"></div>
            <div className={emotionsStyles.emotion} id="fine"></div>
            <div className={emotionsStyles.emotion} id="good"></div>
            <div className={emotionsStyles.emotion} id="notBad"></div>
            <div className={emotionsStyles.emotion} id="bad"></div>
            <div className={emotionsStyles.emotion} id="terrible"></div>
        </div>
    )
}

export default Emotions