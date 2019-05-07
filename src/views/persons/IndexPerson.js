import React from 'react'
import ListPerson from './ListPerson'
import AddPerson from './AddPerson'
import Swal from 'sweetalert2'

const Welcome = () => {
    const Data = ({ app1, app2 }) => <h1>Application using <b>{app1}</b> and (soon) <b>{app2}</b>...!</h1>;

    return (
        <div>
            <Data app1="React" app2="Redux" />
            <hr />
            <br />
        </div>
    )
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    type: 'success'
})

class IndexPerson extends React.Component {
    state = {
        data: []
    }

    AddPersonFunction = stateDictPerson => {
        this.setState({ data: [...this.state.data, stateDictPerson] })
    }

    UpdatePersonFunction = index => {
        const { data } = this.state;
        Swal.fire({
            title: 'Modificar Datos',
            html:
                '<br/>' +
                '<form>' +
                '<div class="form-group row">' +
                '<label class="col-sm-3 col-form-label font-weight-bold">Nombre:</label>' +
                '<div class="col-sm-9">' +
                '<input id="upf-nom" class="form-control" placeholder="Nombre" type="text" />' +
                '</div>' +
                '</div>' +
                '<div class="form-group row">' +
                '<label class=" col-sm-3 col-form-label font-weight-bold">Apellido:</label>' +
                '<div class="col-sm-9">' +
                '<input id="upf-ape" class="form-control" placeholder="Apellido" type="text" />' +
                '</div>' +
                '</div>' +
                '</form>',
            focusConfirm: false,
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonText: 'Modificar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.value) {
                const nom = document.getElementById('upf-nom').value
                const ape = document.getElementById('upf-ape').value

                this.setState({
                    data: data.map((item, i) => {
                        var aux = Object.assign({}, item);
                        if (i === index) {
                            aux.nombre = nom
                            aux.apellido = ape
                        }
                        return aux;
                    })
                });

                Toast.fire({
                    title: ' Registro actualizado'
                })
            }
        })
    }

    RemovePersonFunction = index => {
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
                    data: data.filter((_, i) => i !== index)
                })

                Toast.fire({
                    title: ' Registro eliminado'
                })
            }
        })
    }

    render() {
        const { data } = this.state
        const height = {
            height: '100vh',
            marginBottom: 0
        };

        return (
            <div className="jumbotron" style={height}>
                <div className="container">
                    <Welcome />
                    <AddPerson AddPersonHandle={this.AddPersonFunction} />
                    <br />
                    <ListPerson Information={data} RemovePersonHandle={this.RemovePersonFunction} UpdatePersonHandle={this.UpdatePersonFunction} />
                </div>
            </div>
        )
    }
}

export default IndexPerson