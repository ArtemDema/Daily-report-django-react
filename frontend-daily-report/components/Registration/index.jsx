import registrationStyles from "./Registration.module.css"
import RegistrationForm from "../FormFormik/RegistrationForm/Register"

function RegistrationPage() {
    return(
        <div className='mainDiv'>
            <header className={registrationStyles.header}>
                <h1>Войдите в аккаунт</h1>
            </header>

            <div className='contentDiv'>
                <div className='leftSide'></div>

                <div className={registrationStyles.frontSide}>

                    <div className={registrationStyles.formDiv}>
                        <div className={registrationStyles.RegistrationForm}>
                            <RegistrationForm />
                        </div>
                    </div>
                </div>

                <div className='rightSide'></div>

            </div>
      </div>
    )
}

export default RegistrationPage