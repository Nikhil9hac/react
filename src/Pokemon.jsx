import React from 'react'

export const Pokemon = (props) => {
    return (
        <>
        <div className="pokemon_container text-center mt-3">
            <div className="id mt-2 text-primary">Id : {props.id}</div>
            <div className="name mt-2 text-danger">Name : {props.name}</div>
            <div className="height mt-2 text-success">Height : {props.height}</div>
            <div className="weight mt-2 text-info">Weight : {props.weight}</div>

        </div>
        </>
    )
}
