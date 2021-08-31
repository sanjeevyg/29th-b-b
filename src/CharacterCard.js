import React from 'react'

export default function CharacterCard({character}) {
    return (
        <div className="character-card">
            <h3>{character.name}</h3>
            <img src={character.image} alt="character" height="200" width="200"/>
            
        </div>
    )
}
