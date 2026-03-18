import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
export default function CreateStudent(){
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [validation,setValidation] = useState(false);
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const studentData={id,name,phone};
        console.log(studentData);
        fetch("http://localhost:8000/students",{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(studentData)
        })
        .then((res)=>{
            alert("Student Data saved successfully");
            navigate("/");
        })
        .catch((err)=>console.log(err.message))
    }
    return(
        <div className="container">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" required value={id} onChange={e=>setId(e.target.value)}/>
                {id.length===0 && validation && <span className="errMsg">Please enter your Id</span>}

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required value={name} onChange={e=>setName(e.target.value)}/>
                {name.length===0 && validation && <span className="errMsg">Please enter your name</span>}


                <label htmlFor="phone">Phone:</label>
                <input type="number" id="phone" name="phone" required value={phone}  onChange={e=>setPhone(e.target.value)}/>
                {phone.length===0 && validation && <span className="errMsg">Please enter your phone</span>}

                <div>
                    <button className="btn btn-save">Save</button>
                    <Link to="/" className="btn btn-back">Back</Link>

                </div>
            </form>
        </div>

    )

}