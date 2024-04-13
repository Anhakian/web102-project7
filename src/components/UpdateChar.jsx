import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from '../client'
import NavigationBar from "./NavigationBar";
import "./UpdateChar.css"

const UpdateChar = () => {
    const { id } = useParams();
    const [char, setChar] = useState({name: "", description: "", unit: ""});
    useEffect(() => {
        const fetchCharInfo = async () => {
            try {
                const response = await supabase
                    .from("characters")
                    .select()
                    .eq("id", id)
                    .single();
        
                if (response.error) {
                    throw response.error;
                }
        
                console.log("Character data:", response.data);
                setChar(response.data);
            } catch (error) {
                console.error("Error fetching character:", error.message);
            }
        }

        fetchCharInfo();
    }, [id]);


    const handleChange = (event) => {
        const {id, value} = event.target;
        
        setChar ((prev) => {
            return {
                ...prev,
                [id]: value,
            }
        })
    }

    const handleUnitChange = (event) => {
        const { value } = event.target;
        setChar((prev) => ({
            ...prev,
            unit: value
        }));
    };

    const updateChar = async (event) => {
        event.preventDefault();

        try {
            await supabase
                .from('characters')
                .update({ name: char.name, description: char.description,  unit: char.unit, popularity: 0 })
                .eq('id', id);

            console.log('Character updated successfully!');
            window.location = "/";
        } catch (error) {
            console.error('Error updating character:', error.message);
        }
    };

    const getUnitFullName = (shortName) => {
        switch (shortName) {
            case "Leoni":
                return "Leo/need";
            case "VBS":
                return "Vivid BAD SQUAD";
            case "Niigo":
                return "Nightcord at 25:00";
            case "MMJ!":
                return "MORE MORE JUMP!";
            case "WxS":
                return "Wonderlands x Showtime";
            default:
                return "";
        }
    }

    return (
        <div>
            <NavigationBar />
            <div>
                <div className="charInfo">
                    <h2>Current Character</h2>
                    <div className="currentCard">
                        <h3>Name: {char.name}</h3>
                        <p>Description: {char.description}</p>
                        <h3>Unit: {getUnitFullName(char.unit)}</h3>
                    </div>
                </div>
                <div className="UpdateChar">
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
                            id="MMJ!"
                            value="MMJ!"
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
                </div>
               
                <input type="submit" value="Submit" onClick={updateChar} />
            </div>
        </div>
    )
}

export default UpdateChar;