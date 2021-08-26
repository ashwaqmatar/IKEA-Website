import axios from "axios";
import { Component } from "react";
import FurnitureModel from "../../../Models/FurnitureModel";
import FurnitureCard from "../FurnitureCard/FurnitureCard";
import "./FurnitureList.css";

interface FurnitureListState {
    furniture: FurnitureModel[];
	
}

class FurnitureList extends Component<{}, FurnitureListState> {

    public constructor(props: {}) {
        super(props);
        this.state = {furniture: []};
    }

    public async componentDidMount(){
        try{
            const response = await axios.get<FurnitureModel[]>("http://localhost:3001/api/furniture");
            this.setState({furniture : response.data});
        }
        catch(err){
            alert(err.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="FurnitureList">
                <h2>Furniture List</h2>

                {this.state.furniture.map(f => <FurnitureCard key={f.furnitureId} furniture={f} /> )};
				
            </div>
        );
    }
}

export default FurnitureList;
