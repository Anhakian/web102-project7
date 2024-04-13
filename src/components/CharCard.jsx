import React from 'react'
import { useState } from 'react'
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import "./CharCard.css";


const CharCard = ({ character }) => {
    const { id, name, description, unit, popularity } = character;
    const [popularityCount, setPopularityCount] = useState(character.popularity);

    const updateCount = async (event) => {
        event.preventDefault();
        
        await supabase 
            .from('characters')
            .update({ popularity: popularityCount + 1 })
            .eq('id', id)

        setPopularityCount(popularityCount + 1);
    }

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
                return "Unknown";
        }
    }

    return (
        <div className={`CharCard ${unit}`}>
            <h2 className="name">{name}</h2>
            <p className="description">{"Description: " + description}</p>
            <h3 className="unit">{"Unit: " + getUnitFullName(unit)}</h3>
            <h4>Character's Popularity: <button className="voteButton" onClick={updateCount}>{popularityCount}</button> </h4>
            <Link to={`/char/${id}`}><button>View More</button></Link>
        </div>
    );
};

export default CharCard;