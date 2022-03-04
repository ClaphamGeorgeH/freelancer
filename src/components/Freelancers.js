import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons';
import MainNavFreelancer from '../common/MainNavFreelancer';
import MainFooter from '../common/MainFooter';

export default class Freelancers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaFreelancers : [],
            freelancerSeleccionado:'',
            freelancerBusqueda:''
        }
    }

    

    componentDidMount() {
    const rutaServicio = "https://servicios.campus.pe/servicioproveedores.php";
            fetch(rutaServicio,)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        listaFreelancers: result
                    })
                }
            )
    }

    seleccionarFreelancer(itemFreelancer){
        console.log(itemFreelancer);
        if(this.state.freelancerSeleccionado !== ""){
            //document.getElementById("tr-proveedor" + this.state.proveedorSeleccionado.idproveedor).classList.remove("active");
        }
        this.setState({
            freelancerSeleccionado: itemFreelancer
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
                    {datosTabla.map(itemFreelancer =>
                        <tr key={itemFreelancer.idfreelancer}
                        onClick={() => this.seleccionarFreelancer(itemFreelancer)}
                        id={"tr-freelancer"+itemFreelancer.idfreelancer}>
                            <td>{itemFreelancer.nombrecontacto}</td>
                            <td>{itemFreelancer.cargocontacto}</td>
                            <td>{itemFreelancer.nombreempresa}</td>
                            <td>{itemFreelancer.direccion}</td>
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

        let contenidoTabla = this.dibujarTabla(this.state.listaFreelancers);
        
        return (
            <section id="Freelancers">
                <MainNavFreelancer></MainNavFreelancer>
                    <div className='container'>
                        <div className="row">
                            <div className='col'>
                                <h1>Freelancers</h1>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className='col'>
                                <div className="input-group input-group-lg">
                                    <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Write the supplier name..." aria-label="Recipient's username" aria-describedby="button-addon2" id="SupplierInput"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" >Find</button>
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
                                        <h2 className="card-title">{this.state.freelancerSeleccionado.nombrecontacto}</h2>
                                        <p className="card-text">
                                            {/*<h3>{this.state.freelancerSeleccionado.nombreempresa}</h3>*/}
                                            {/*<p>{this.state.freelancerSeleccionado.direccion}</p>*/}
                                        </p>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                <MainFooter></MainFooter>
            </section>
        )
    }
}

