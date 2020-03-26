import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import heroes_image from "../../assets/heroes.png";
import logo_image from "../../assets/logo.svg"

export default function Logon(){
    const history = useHistory();
    const [id, setId] = useState();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post("/session",{id});

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName', response.data.name);
            
            history.push('/profile');
        }catch(e){
            alert("Falha no Login");
        }
    }

    return(
        <div className="logon_container">
            <section className="form">
                <img src = {logo_image} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder = "Sua ID"
                        value= {id}
                        onChange={e => setId(e.target.value)}
                        />
                    <button className = "button" type="submit">Entrar</button>

                    <Link className = "back-link" to="/register">
                        <FiLogIn size={16} color = "#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroes_image} alt="Heroes"/>
        </div>

    );
}