import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import NavigationBar from "./NavigationBar";
import "./CharView.css"

const CharView = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({name: "", description: "", unit: ""});
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
                setCharacter(response.data);
            } catch (error) {
                console.error("Error fetching character:", error.message);
            }
        }

        fetchCharInfo();
    }, [id]);


    const getUnitFullName = (shortName) => {
        switch (shortName) {
            case "Leoni":
                return "Leo/need";
            case "VBS":
                return "Vivid BAD SQUAD";
            case "Niigo":
                return "Nightcord at 25:00";
            case "MMJ":
                return "MORE MORE JUMP!";
            case "WxS":
                return "Wonderlands x Showtime";
            default:
                return "";
        }
    }

    const categorizePopularity = (popularity) => {
        if (popularity > 10) {
            return "This Character is pretty popular!"
        }
        else {
            return "Oops, too bad this character is not very well-known. Can you help them become more famous?"
        }
    }

    const handleDelete = async () => {
        try {
            const { error } = await supabase
                .from("characters")
                .delete()
                .eq("id", id);

            if (error) {
                throw error;
            }

            console.log("Character deleted successfully!");
            window.location = "/";
        } catch (error) {
            console.error("Error deleting character:", error.message);
        }
    }

    return (
        <div>
            <NavigationBar />
            <div>
                <div className={`card ${character.unit}`}>
                    <h3 className="name">{character.name}</h3>
                    <p className="description">Description: {character.description}</p>
                    <h3 className="unit">Unit: {getUnitFullName(character.unit)}</h3>
                </div>
                
                <h3>{categorizePopularity(character.popularity)}</h3>
                <Link to={`/char/${id}/update`}><button>Update this Character</button></Link> <br />
                <button onClick={handleDelete}>Delete Character</button>
            </div>
        </div>
    );
}

export default CharView;