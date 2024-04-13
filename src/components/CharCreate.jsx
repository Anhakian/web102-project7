import { useState } from "react";
import { supabase } from '../client'
import NavigationBar from "./NavigationBar";
import "./CharCreate.css";

const CharCreate = () => {
    const [char, setChar] = useState({name: "Unknown", description: "Unknown", unit: "Unknown"});

    const handleChange = (event) => {
        const { id, value } = event.target;
    
        setChar((prev) => {
            return {
                ...prev,
                [id]: value !== "" ? value : "No Information",
            };
        });
    };

    const handleUnitChange = (event) => {
        const { value } = event.target;
        setChar((prev) => ({
            ...prev,
            unit: value
        }));
    };

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('characters')
            .insert({name: char.name, description: char.description, unit: char.unit})
            .select();

        window.location = "/";
    }

    return (
        <div>
            <NavigationBar />
            <div className="CharCreate">
                <div className="nameInput">
                    <label className="bigLabel">Character's Name</label>
                    <input type="text" id="name" onChange={handleChange} />
                </div>
                <div className="descriptionInput">
                    <label className="bigLabel">Character's Brief Description</label>
                    <input type="text" id="description" onChange={handleChange} />
                </div>
                <div className="unitInput">
                    <label className="bigLabel">Character's Unit</label> <br />
                    <input
                        type="radio"
                        id="Leoni"
                        value="Leoni"
                        name="unit"
                        onChange={handleUnitChange}
                    />
                    <label>Leo/need</label> <br />
                    <input
                        type="radio"
                        id="VBS"
                        value="VBS"
                        name="unit"
                        onChange={handleUnitChange}
                    />
                    <label>Vivid BAD SQUAD</label> <br />
                    <input
                        type="radio"
                        id="Niigo"
                        value="Niigo"
                        name="unit"
                        onChange={handleUnitChange}
                    />
                    <label>Nightcord at 25:00</label> <br />
                    <input
                        type="radio"
                        id="MMJ"
                        value="MMJ"
                        name="unit"
                        onChange={handleUnitChange}
                    />
                    <label>MORE MORE JUMP!</label> <br />
                    <input
                        type="radio"
                        id="WxS"
                        value="WxS"
                        name="unit"
                        onChange={handleUnitChange}
                    />
                    <label>Wonderlands x Showtime</label>
                </div>
                <button onClick={createPost}>Submit</button>
            </div>
        </div>
    )
}

export default CharCreate;