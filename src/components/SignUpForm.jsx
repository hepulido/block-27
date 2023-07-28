import { useState } from "react";

export default function SignUpForm({ token, setToken}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault()
 
    try { 
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
        method: "POST",
        body: JSON.stringify({userName, password})
    });
    const result = await response.json();
    setToken(result.token)
    console.log(result);
    } catch (error) {
      setError(error.message);
    }
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={userName} onChange={(event) => setUserName(event.target.value)}/>
        </label>
        <label>
          Password: <input value={password} onChange={(event) => setPassword(event.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
