import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const Register_user = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  async function collectData(e) {
    e.preventDefault();

    const userData = { name, email, pass };
    console.log(userData);

    try {
      const res = await fetch(`${API_URL}/user/register`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log("Response from backend:", data);
      alert(data.message);

    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  }

  return (
    <div>
      <form onSubmit={collectData} className="bg-amber-500">
        <input
          type="text"
          className="bg-amber-50"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          className="bg-amber-600"
          placeholder="Enter email please!"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className='bg-blue-300'
          placeholder="Enter password"
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit" className="bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register_user;
