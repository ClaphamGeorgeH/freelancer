import React, { Component } from 'react';
import './style/Blocks.css'

export default class Blocks extends Component {
    constructor(props){
        super(props)
        this.state={
            listaPaises: [],
            nombreAgregar: "",
            presidenteAgregar: "",
            poblacionAgregar:"",
        }
    }

    componentDidMount(){
        this.leerPaises()
    }

    leerPaises() {
        const rutaServicio = "https://estudioarquitectonico.000webhostapp.com/php/paises.php"
        fetch(rutaServicio)
        .then(
            res => res.json()
        )
        .then(
            (result) =>{
                console.log(result);
                this.setState({
                    listaPaises : result
                })
            }
        )
    }

    dibujarTabla(datosTabla){
        return(
            <table className="table" id="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Presidente</th>
                        <th>Poblacion</th>
                    </tr>
                </thead> 
                <tbody>
                    {datosTabla.map(itemPais =>
                        <tr key={itemPais.Id}>
                            <td>{itemPais.Id}</td>
                            <td>{itemPais.Nombre}</td>
                            <td>{itemPais.Presidente}</td>
                            <td>{itemPais.Poblacion}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    dibujarFormularioAgregar() {
        return (
            <div id="InsertForm">
                <div className="mb-3">
                    <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample">Nuevo pais</button>
                </div>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <form onSubmit={this.paisesInsertar}>
                            <div className="mb-3">
                                <input type="text" placeholder="Nombre" className="form-control"
                                    minLength="2" required
                                    value={this.state.nombreAgregar}
                                    onChange={(e) => this.setState({ nombreAgregar: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Presidente" className="form-control"
                                    minLength="2" required
                                    value={this.state.presidenteAgregar}
                                    onChange={(e) => this.setState({ presidenteAgregar: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Poblacion" className="form-control"
                                    minLength="2" required
                                    value={this.state.poblacionAgregar}
                                    onChange={(e) => this.setState({ poblacionAgregar: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample">Agregar</button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample">Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    paisesInsertar = (e) => {
        e.preventDefault();//Evita que el evento onSubmit vuelva a cargar la página
        console.log(this.state.nombreAgregar);
        console.log(this.state.presidenteAgregar);
        console.log(this.state.poblacionAgregar);
       

        const rutaServicio = "https://estudioarquitectonico.000webhostapp.com/php/paises-insertar.php"
        var formData = new FormData();
        formData.append("nombre", this.state.nombreAgregar)
        formData.append("presidente", this.state.presidenteAgregar)
        formData.append("poblacion", this.state.poblacionAgregar)

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then(
                res => res.text()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.leerPaises();
                    this.setState({
                        nombreAgregar: "",
                        presidenteAgregar: "",
                        poblacionAgregar:"",
                    })
                }
            )
    }

    render(){
        let contenidoTabla = this.dibujarTabla(this.state.listaPaises);
        let contenidoFormularioAgregar = this.dibujarFormularioAgregar();
        

        return (
            <section className="padded" id="Paises">
                <div className ="container">
                    <div className="row">
                        <div className="col">
                            <h1>Paises</h1>
                            {contenidoFormularioAgregar}
                            {contenidoTabla}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
