import { Redirect, Route, Switch } from "react-router-dom";
import AddFurniture from "../../FurnitureArea/AddFurniture/AddFurniture";
import FurnitureList from "../../FurnitureArea/FurnitureList/FurnitureList";

function Routing(): JSX.Element {
    return (
        <>
           <Switch>
               <Route path="/furniture" component={FurnitureList} exact />;
               <Route path="/add-furniture" component={AddFurniture} exact />;
               <Redirect  from="/" to="/furniture" exact />;
           </Switch>
        </>
    );
}

export default Routing;
