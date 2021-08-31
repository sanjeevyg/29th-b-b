import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterContainer({characters}) {
    const showCharacters = () => {
        return characters.map(character => {
            return <CharacterCard key={character.id} character={character}/>
        })
    }
    return (
        <div className="character-container">
            {showCharacters()}
        </div>
    )
}
