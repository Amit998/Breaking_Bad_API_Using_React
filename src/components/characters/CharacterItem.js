import React from 'react'


const CharacterItem = ({item}) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.img} alt=''>
                    </img>
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                    <li>
                        <strong>ACTOR NAME:</strong>{item.portrayed}
                    </li>
                    <li>
                        <strong>NickName:</strong>{item.nickname}
                    </li>
                    <li>
                        <strong>BirthDay:</strong>{item.birthday}
                    </li>
                    <li>
                        <strong>Status:</strong>{item.status}
                    </li>
                    
                </ul>
                </div>
                
            </div>    
        </div>
    )
    
}

export default CharacterItem
