import React, { Component } from 'react'
import ListPerson from './ListPerson'
import RemovePerson from './RemovePerson'

const Welcome = () => {
    const Data = ({ nombre, apellido }) => <h1>Bienvenido {nombre} {apellido}...!</h1>;

    return (
        <div className="h1">
            <Data nombre="Javier" apellido="Avilés" />
        </div>
    )
}

const IndexPerson = () => {
    state = {
        info: [
            {
                nombre: 'Maryuri',
                apellido: 'Rivas',
            },
        ]
    }
    const { info } = state

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <Welcome />
                <br /><br />
                <ListPerson Information={info} RemovePerson_={RemovePerson} />
            </div>
        </div>
    )
}

export default IndexPerson