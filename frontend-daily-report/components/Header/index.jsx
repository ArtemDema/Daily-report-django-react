import headerStyles from "./Header.module.css"

function Header() {
    return(
        <header>
            <h1 id={headerStyles.username}>Имя аккаунта</h1>
            <h1 id={headerStyles.myReports}>Мои записи</h1>
            <button type="button" id={headerStyles.exitButton}>Выход</button>
        </header>

    )
}

export default Header