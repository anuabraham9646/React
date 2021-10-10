import React from 'react'

export default function Hero({name}) {
    if(name ==="Joker")
        throw new Error("Not a Hero")
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}
