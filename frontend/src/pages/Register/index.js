import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import "./styles.css"

import logoImg from '../../assets/logo.svg'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [fu, setFu] = useState('');

    const history = useHistory();

    async function handleRegister(e){
      e.preventDefault();

      

      const data = {
          name,
          email,
          whatsapp,
          city,
          fu,
      };
      try{
      const response = await api.post('ongs', data);

      alert(`Your ID of access: ${response.data.id}`)
      history.push('/');
      } catch(err){
          alert('error in the register, try again.')
      }
    }
    return (
        <div className= "register-container">

            <div className= "content">
                <section>
                <img src= {logoImg} alt="Be The Hero" />
                <h1>Register</h1>
                <p>make your register, login on the website and help people to find the cases of your NGO.</p>
               
                <Link className="back-link" to= "/">
              <FiArrowLeft size={16} color='#E02041' />
           Register
             </Link>
                </section>

            <form onSubmit={handleRegister}>
                <input 
            placeholder='Name of NGO' 
            value={name}
            onChange={e => setName(e.target.value)}/>
                <input type='email' 
                placeholder='E-mail'
                value={email}
            onChange={e => setEmail(e.target.value)}/>
            
                <input placeholder='Whatsapp'
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}/> 
                

                <div className= "input-group">
                <input 
                 placeholder="city" 
                 value={city}
            onChange={e => setCity(e.target.value)}/>
                 
                <input placeholder="fu"
                 style={{width: 80, }}
                 value={fu}
            onChange={e => setFu(e.target.value)}/>
                
                   </div>


                   <button className= "button" type="submit">Register</button>
            </form>
            </div>
        </div>
    );
}