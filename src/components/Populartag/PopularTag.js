import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./populartag.css";

export default function PopularTags() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/category");
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="populartag">
            <div className="populartagItem">
                <span className="populartagTitle">Popular Tags</span>
                <ul className="populartagList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="popularListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}