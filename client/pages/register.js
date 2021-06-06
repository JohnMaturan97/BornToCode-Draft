import { useState } from "react";
import axios from "axios";

const Register = () => {
        const [name, setName] = useState('');
        const [email, setEmail]= useState('');
        const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        //console.log({name, email, password});
        const { data } = await axios.post(`http://localhost:8000/api/register`, {
            name, 
            email, 
            password,
        });
        console.log('REGISTERED RESPONSE', data);
    };

    return (
        <> 
            <h1 className="jumbotron text-center bg-info square">Register</h1>
            <div page-container-Register>
            <div className='container col-md-4 offset-md-4 pd-5'>
                <form onSubmit={handleSubmit}>
                    
                    <input 
                    type="name" 
                    className='form-control mb-4 p-4' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter Legal Name' 
                    required
                    />

                    <input 
                    type="email" 
                    className='form-control mb-4 p-4' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Valid Email' 
                    required
                    />

                    <input 
                    type="password" 
                    className='form-control mb-4 p-4' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter Proper Password' 
                    required
                    />   

                    <button type='submit' className='button btn-block btn-info p-2'>Submit</button>   
                </form>
            </div>
            </div>
        </>      
    );
};

export default Register;