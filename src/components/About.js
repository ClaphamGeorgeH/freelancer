import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons';
import './style/About.css';

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaProveedores : [],
            proveedorSeleccionado:'',
            proveedorBusqueda:''
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

    seleccionarProveedor(itemProveedor){
        console.log(itemProveedor);
        if(this.state.proveedorSeleccionado !== ""){
            //document.getElementById("tr-proveedor" + this.state.proveedorSeleccionado.idproveedor).classList.remove("active");
        }
        this.setState({
            proveedorSeleccionado: itemProveedor
        })
        //document.getElementById("tr-proveedor-" + itemProveedor.idproveedor).classList.add("active");
    }


    dibujarTabla(datosTabla){

        return(
            <table className="table" id="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Labour</th>
                        <th>Company</th>
                        <th>Adress</th>
                    </tr>
                </thead> 
                <tbody>
                    {datosTabla.map(itemProveedor =>
                        <tr key={itemProveedor.idproveedor}
                        onClick={() => this.seleccionarProveedor(itemProveedor)}
                        id={"tr-proveedor"+itemProveedor.idproveedor}>
                            <td>{itemProveedor.nombrecontacto}</td>
                            <td>{itemProveedor.cargocontacto}</td>
                            <td>{itemProveedor.nombreempresa}</td>
                            <td>{itemProveedor.direccion}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    /*handleClick(lista) {
        console.log(document.getElementById("SupplierInput").value);
        var proveedor = document.getElementById("SupplierInput").value;
        
        if(lista.includes(proveedor)){
            console.log("Valor encontrado");
        }else{
            console.log("Valor no encontrado");
        }
        

      }*/


    render() {

        let contenidoTabla = this.dibujarTabla(this.state.listaProveedores);
        
        return (
            <section id="About">
                <div className='container'>
                    <div className="row">
                        <div className='col'>
                            <h1>About</h1>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className='col'>
                            <div class="input-group input-group-lg">
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Write the supplier name..." aria-label="Recipient's username" aria-describedby="button-addon2" id="SupplierInput"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2" >Find</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-8">
                            {contenidoTabla}
                        </div>
                        <div className="col-4">
                        <div className="card">
                            <FontAwesomeIcon icon={faAddressCard} className="direccionTabla" id="AdressCardIcon"/>
                                <div className="card-body">
                                    <h2 className="card-title">{this.state.proveedorSeleccionado.nombrecontacto}</h2>
                                    <p className="card-text">
                                        <h3>{this.state.proveedorSeleccionado.nombreempresa}</h3>
                                        <p>{this.state.proveedorSeleccionado.direccion}</p>
                                    </p>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
