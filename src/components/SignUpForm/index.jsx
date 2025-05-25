import { useState } from "react";

const SignUpForm = () => {
    //getter y setter para los estados
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');

    function handleClearClick(){
        setName ('');
        setAge ('');
        setAddress ('');
        setZipCode ('');
        setPhone ('');
        
    }

    function hanbleSubmitForm(event){
        event.preventDefault();
        console.log("2submit", {
            name,
            age,
            zipCode,
            address,
            phone
        });
        
    }

    return (
        <form onSubmit={hanbleSubmitForm}>
            <label >
                Name
                <input value={name} onChange={(event) => setName(event.target.value)} required/>
            </label>
            <br />
            <label >
                Age
                <input value={age} onChange={(event) => setAge(event.target.value)} required/>
            </label>
            <br />
            <label >
                Address
                <input value={address} onChange={(event) => setAddress(event.target.value)} required/>
            </label>
            <br />
            <label >
                Zip Code
                <input value={zipCode} onChange={(event) => setZipCode(event.target.value)} required/>
            </label>
            <br />
            <label >
                Phone
                <input value={phone} onChange={(event) => setPhone(event.target.value)} required/>
            </label>

            <div>
                <button type="Button" onClick={handleClearClick}>Clear</button>
                <button type="Submit">Submit</button>
            </div>

        </form>
    );
};

export default SignUpForm;