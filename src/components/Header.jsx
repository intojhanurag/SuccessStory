function Header(){

    return (
        <header className="header">
            <nav className="navbar">

                <div className="nav-left">
                    <Link to="/home">
                        <img src="" alt="" />
                        
                    </Link>
                    <Link to="/home">
                        Motivate.Ai
                    </Link>

                </div>
                <div className="nav-right">
                    <div>
                        <ul>
                            <li>
                                <Link to="/story">Add Yours</Link>
                            </li>
                            <li>
                                <button>Sing In</button>
                                <button>Register</button>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>

        </header>
    )

}

export default Header