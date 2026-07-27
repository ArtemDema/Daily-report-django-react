import registrationStyles from "./Registration.module.css"
import RegistrationForm from "../FormFormik/RegistrationForm/Register"
import ConfirmEmailForm from "../FormFormik/RegistrationForm/ConfirmEmail"
import AuthForm from "../FormFormik/RegistrationForm/Auth"


function RegistrationPage() {
    return(
        <div className='mainDiv'>
            <header className={registrationStyles.header}>
                <h1>Войдите в аккаунт</h1>
            </header>

            <div className='contentDiv'>
                <div className='leftSide'></div>

                <div className='frontSide'>

                    <div className={registrationStyles.formDiv}>
                        <div className={registrationStyles.RegistrationForm}>
                            <RegistrationForm />
                        </div>
                        
                        {/* <div className={registrationStyles.ConfirmEmailForm}>
                            <ConfirmEmailForm />
                        </div> */}
                        
                        {/* <div className={registrationStyles.AuthForm}>
                            <AuthForm />
                        </div> */}
                    </div>
                </div>

                <div className='rightSide'></div>

            </div>
      </div>
    )
}

export default RegistrationPage