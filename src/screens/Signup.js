import React,{useState} from 'react'
import { Link } from 'react-router-dom'



export default function Signup() {
    
    const [credentials, setcredentials] = useState({name:"", password:"",email:"",location:"",phone:""}) // we will set use state snippet

    const handlSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",
            {
                method:'POST', //since our request is post in createuser
                headers:{
                    'Content-Type':'application/json' //since our data format is json
                },
                body:JSON.stringify({name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.location, number: credentials.phone})
            }
        );

        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("enter valid credentials");
        }
    }

    const onChange =(events)=>
        {
            setcredentials({...credentials, [events.target.name]:events.target.value})
        }

    return (
        <>
        <div className="container">
            <form onSubmit={handlSubmit}>
                <div className="mb-3">
                        <label htmlFor="name" className="form-label">name</label>
                        <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange}/>
                    </div>
                <div className="mb-3">
                        <label htmlFor="phone" className="form-label">phone</label>
                        <input type="phone" className="form-control" id="phone" name='phone' value={credentials.phone} onChange={onChange}/>
                </div>
                <div className="mb-3">
                        <label htmlFor="location" className="form-label">location</label>
                        <input type="text" className="form-control" id="location" name='location' value={credentials.location} onChange={onChange}/>
                    </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to='/login' className='btn btn-danger m-3' aria-describedby="emailHelp">Login</Link>
                
            </form>
        </div>
        </>
    )
}
