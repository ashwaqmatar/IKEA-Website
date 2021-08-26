import FurnitureModel from "../../../Models/FurnitureModel";
import "./FurnitureCard.css";

interface FurnitureCardProps {
	furniture : FurnitureModel;
}

function FurnitureCard(props: FurnitureCardProps): JSX.Element {
    return (
        <div className="FurnitureCard">
            Name: {props.furniture.name};
            <br />
            Dimensions :{props.furniture.size};
            <br />
            Color :{props.furniture.color};
            <br />
            Price :{props.furniture.price};

			
        </div>
    );
}

export default FurnitureCard;
