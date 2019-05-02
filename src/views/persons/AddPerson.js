import React from 'react'

class AddPerson extends React.Component {
    constructor(props) {
        super(props)

        this.initialState = {
            nombre: '',
            apellido: '',
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitPersonData = () => {
        this.props.AddPersonHandle(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { nombre, apellido } = this.state;

        return (
            <form>
                <div>
                    <span className="badge badge-pill badge-primary">1</span>
                    <b className="">Por favor, ingresa los datos correspondientes:</b>
                </div>
                <br/>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-1 col-form-label font-weight-bold">Nombre:</label>
                    <div className="col-sm-3">
                        <input className="form-control" placeholder="Nombre" type="text" name="nombre" value={nombre} onChange={this.handleChange} />
                    </div>
                    <label for="inputPassword" className="col-sm-1 col-form-label font-weight-bold">Apellido:</label>
                    <div className="col-sm-3">
                        <input className="form-control" placeholder="Apellido" type="text" name="apellido" value={apellido} onChange={this.handleChange} />
                    </div>
                    <button type="button" className="col-sm-1 btn btn-primary" onClick={this.submitPersonData}>Agregar</button>
                </div>
                <br/>
                <hr/>
            </form>
        );
    }
}

export default AddPerson;