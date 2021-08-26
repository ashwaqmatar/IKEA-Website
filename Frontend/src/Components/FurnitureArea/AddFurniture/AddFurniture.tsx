import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import FurnitureModel from "../../../Models/FurnitureModel";
import TypeModel from "../../../Models/TypeModel";
import "./AddFurniture.css";

function AddFurniture(): JSX.Element {

    const history = useHistory();
    const [types, setTypes] = useState<TypeModel[]>([]);

    useEffect(() => {
        axios.get<TypeModel[]>("http://localhost:3001/api/types")
            .then(response => setTypes(response.data))
            .catch(err => alert(err.message));
    });

    const { register, handleSubmit, formState } = useForm<FurnitureModel>();

    async function send(furniture: FurnitureModel) {
        try {
            const response = await axios.post<FurnitureModel>("http://localhost:3001/api/furniture", furniture);
            alert("Furniture added. ID: " + response.data.furnitureId); // presenting id is only for testing, not for end user!
            history.push("/furniture");
        }
        catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="AddFurniture">
            <h2>Add Furniture</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <select {...register("typeId", { min: 1 })}>
                    <option disabled selected value="0">Select Furniture Type</option>
                    {types.map(t => <option key={t.typeId} value={t.typeId}>{t.name}</option>)}
                </select>
                {formState.errors.typeId?.type === "min" && <span>Missing name</span>}

                <label>Size:</label>
                <input type="text" {...register("size", { required: true })} />
                {formState.errors.size?.type === "required" && <span>Missing size</span>}

                <label>Color:</label>
                <input type="text" {...register("color", { required: true })} />
                {formState.errors.color?.type === "required" && <span>Missing color</span>}

                <label>Price:</label>
                <input type="number" step="0.01" {...register("price", { required: true })} />
                {formState.errors.price?.type === "required" && <span>Missing price</span>}

                <button>Add</button>

            </form>

        </div>
    );
}

export default AddFurniture;
