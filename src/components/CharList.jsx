import { useEffect, useState } from 'react';
import { supabase } from '../client';
import CharCard from './CharCard';
import NavigationBar from './NavigationBar';

const CharList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const { data } = await supabase
                .from('characters')
                .select();

            setCharacters(data);
        }

        fetchCharacters();
    }, []);

    return (
        <div>
            <NavigationBar />
            <div className="CharList">
                {characters && characters.length > 0 ? (
                    characters.map((character, index) => (
                        <CharCard key={character.id} character={character} />
                    ))
                ) : (
                    <h2>{"Let's find some new friends!"}</h2>
                )}
            </div>
        </div>
        
    );
}

export default CharList;