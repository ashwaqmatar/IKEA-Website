import { NavLink } from "react-router-dom";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<h1> IKEA Website</h1>

            <NavLink to="/furniture" exact>Furniture List</NavLink>
            <span> | </span>
            <NavLink to="/add-furniture" exact >Add Furniture</NavLink>

            <hr />

            <Routing />


        </div>
    );
}

export default Layout;
