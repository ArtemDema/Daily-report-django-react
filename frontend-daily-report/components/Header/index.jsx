import headerStyles from "./Header.module.css"

function Header() {
    return(
        <header>
            <a href="http://localhost:5173/">Домашняя страница</a>
            <a href="http://localhost:5173/myreports/">Мои записи</a>
            <button type="button" id={headerStyles.exitButton}>Выход</button>
        </header>

    )
}

export default Header