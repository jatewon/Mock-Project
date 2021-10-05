import {useContext} from 'react'
import "./navabar.css"
import { Context } from "../../context/Context";
import {Link} from "react-router-dom"
export default function Navabar() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="top">
            
            <div className="topCeter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                          WRITE
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings" className="link">
                        Setting
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/signin">
                               Signin
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/signup">
                                Signup
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}
