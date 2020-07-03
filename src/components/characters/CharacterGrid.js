import React from 'react'
import CharacterItem from '../characters/CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid =({items,isLoading}) => { 
    return isLoading ? (<Spinner></Spinner>) : <section className="cards" >
        {items.map(item => (
            <CharacterItem key={item.char_id} item={item}>{item.name}</CharacterItem>
        ))}

    </section>
}

export default CharacterGrid
