import { Link } from "react-router-dom"
import './Header.css'

function Header(){

    return (
        <header className="header  pt-2 pr-2 bg-gradient-to-b from white to-orange-100">
            <nav className="flex navbar">

                <div className="flex left-0 ml-6 mr-auto nav-left">
                    <Link to="/home">
                        <img src="" alt="" />
                        
                    </Link>
                    <Link className="pl-0 text-[25px]" to="/home">
                        <span className="font-bold text-black">Motivate</span><span className="text-sky-500">Ai</span>
                    </Link>

                </div>
                <div className="flex lef nav-right gap-2">
                    <div>
                        <ul>
                            <li>
                                <Link to="/story">Add Yours</Link>
                                

                                <button className="pl-4 pr-4 pt-2 pb-2 m-2  border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-sm">Sign In</button>
                                <button className="pl-4 pr-4 pt-2 pb-2 m-2 bg-blue-400  border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-sm">Get Started</button>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>

        </header>
    )

}

export default Header