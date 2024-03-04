import React, { useState } from 'react'

const Register = () => {

  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [address,setAddress] = useState("")
  const [number,setNumber] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://65d71bba27d9a3bc1d7a32ba.mockapi.io/name/Users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ 
        userName: name,
        email: email,
        password: password,
        address: address,
        number: number

       }),
    })
    .then(response => {
      e.target.reset();
      if (response.ok) {
        alert("Data submitted successfully");
      } else {
        alert("Failed to submit data");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });

    setName('')
    setEmail('')
    setPassword('')
    setAddress('')
    setNumber('')
  }

  return (
    <div className="mt-6 ml-[700px] bg-gray-300 w-[500px] h-[400px] rounded-[10px]">
        <form onSubmit={handleSubmit} className='p-11'>
            <label>UserName : </label><input type='text' className='rounded-full float-right mr-[80px]' placeholder=' Enter your UserName' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <label>Email : </label><input type='email' className='rounded-full float-right mr-[80px]' placeholder=' Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)}/><br /><br />
            <label>Password : </label><input type='password' className='rounded-full float-right mr-[80px]' placeholder=' Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />
            <label>Address : </label><input type='textarea' className='rounded-full float-right mr-[80px]' placeholder=' Enter your Address' value={address} onChange={(e) => setAddress(e.target.value)}/><br /><br />
            <label>Phone Number : </label><input type='text' className='rounded-full float-right mr-[80px]' placeholder=' Enter your Phone Number' value={number} onChange={(e) => setNumber(e.target.value)}/><br /><br />
            <button type='submit' className='bg-gray-700 text-white p-2 rounded-full ml-[150px]'>Submit</button>
        </form>
    </div>
  )
}

export default Register