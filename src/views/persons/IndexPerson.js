import React from 'react'
import ListPerson from './ListPerson'
import AddPerson from './AddPerson'
import Swal from 'sweetalert2'

const Welcome = () => {
    const Data = ({ nombre, apellido }) => <h1>Bienvenido {nombre} {apellido}...!</h1>;

    return (
        <div>
            <Data nombre="Edison" apellido="Avilés" />
            <hr />
            <br />
        </div>
    )
};

class IndexPerson extends React.Component {
    state = {
        data: []
    }

    AddPersonHandle = dataPerson => {
        this.setState({ data: [...this.state.data, dataPerson] })
    }

    RemovePersonHandle = index => {
        const { data } = this.state;
        Swal.fire({
            title: 'Eliminar Registro',
            text: "¿Estás seguro que deseas eliminar este registro?",
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                this.setState({
                    data: data.filter((character, i) => {
                        return i !== index;
                    })
                });

                Swal.fire({
                    position: 'top-end',
                    title: 'Eliminado',
                    text: 'El registro fue eliminado satisfactoriamente',
                    type: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    render() {
        const { data } = this.state

        return (
            <div className="jumbotron">
                <div className="container">
                    <Welcome />
                    <AddPerson AddPersonHandle={this.AddPersonHandle} />
                    <br />
                    <ListPerson Information={data} RemovePersonHandle={this.RemovePersonHandle} />
                </div>
            </div>
        )
    }
}

export default IndexPerson