import React, { Component } from 'react';
import './style/Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons';

export default class Service extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaProveedores : []
        }
    }
    
    componentDidMount() {
        const rutaServicio = "https://servicios.campus.pe/servicioproveedores.php";
        fetch(rutaServicio)
            .then(
                res => res.json()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        listaProveedores: result
                    })
                }
            )
    }

    dibujarTabla(datosTabla) {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {datosTabla.map(itemProveedor =>
                <div className="col" key={itemProveedor.idproveedor}>
                    <div className="card">
                        <FontAwesomeIcon icon={faAddressCard} className="botonTabla" id="AdressCardIcon"/>
                        <div className="card-body">
                            <h5 className="card-title">{itemProveedor.cargocontacto}</h5>
                            <p className="card-text">
                                {itemProveedor.nombrecontacto} {itemProveedor.nombreempresa} {itemProveedor.direccion}
                            </p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        )
    }


    
    render() {
        let contenidoTabla = this.dibujarTabla(this.state.listaProveedores);

        return (    
        <section id ="Service">
            <header>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <h1>Service</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="container-fluid" id="Suppliers">
            <div className = "row" id = "text0">
                <div className="row" id="text1">
                    <div className="col" >
                        <p>Recognized Suppliers</p>
                    </div>
                </div>
                <div className="row" id="text2">
                    <div className="col">
                        <p>Recognized Suppliers</p>
                    </div>
                </div>
                <div className="row" id="text3">
                    <div className="col">
                        <p>There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.</p>
                    </div>
                </div>
            </div>
            <br/><br/>
            {contenidoTabla}
            </div>
        </section>
        )
    }
}

