import React from 'react'

class AddPerson extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: '',
            apellido: ''
        }
    }

    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    AddPersonLocal = () => {
        this.props.AddPersonHandle(this.state)
        this.setState({
            nombre: '',
            apellido: ''
        })
    }

    render() {
        const { nombre, apellido } = this.state;
        const marginLeft = {
            marginLeft: 10
        };

        return (
            <form>
                <div>
                    <span className="badge badge-pill badge-primary">1</span>
                    <b style={marginLeft}>Por favor, ingresa los datos correspondientes:</b>
                </div>
                <br/>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label font-weight-bold">Nombre:</label>
                    <div className="col-sm-3">
                        <input className="form-control" placeholder="Nombre" type="text" name="nombre" value={nombre} onChange={this.onChangeValue} />
                    </div>
                    <label className="col-sm-1 col-form-label font-weight-bold">Apellido:</label>
                    <div className="col-sm-3">
                        <input className="form-control" placeholder="Apellido" type="text" name="apellido" value={apellido} onChange={this.onChangeValue} />
                    </div>
                    <button type="button" className="col-sm-1 btn btn-primary" onClick={this.AddPersonLocal}>Agregar</button>
                </div>
                <br/>
                <hr/>
            </form>
        );
    }
}

export default AddPerson;