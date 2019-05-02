import React from 'react'

const Container = () => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <Welcome />
            <br/><br/>
            <Switch />
            <MyTable />
        </div>
    </div>
);

const Greetings = ({ nombre, apellido }) => <h1>Bienvenido {nombre} {apellido}...!</h1>;
const Welcome = () => (
    <div className="h1">
        <Greetings nombre="Edison" apellido="Avilés" />
    </div>
    
);

const Switch = () => (
    <div className="form-group">
        <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
            <label className="custom-control-label" htmlFor="customSwitch1">Ejemplo de Switch</label>
        </div>
    </div>
);

const MyTable = () => (
    <table className="table table-hover table-dark">
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>
    </table>
);

export default Container