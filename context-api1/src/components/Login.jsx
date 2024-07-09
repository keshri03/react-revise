import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

//useContext hook- to get access of data(used for fetching data in useContext)



function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

//acces of setUser from UserContextprovider
// for data bhejna
const {setUser}= useContext(UserContext);

 const handleSubmit=(e)=>{
    e.preventDefault();
    //data bhejna :
    setUser({username,password});
    // setUsername()
 }
  return (
    <div>
      <h2> Login</h2>
      <input
        type="text"
        val={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        val={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
}

export default Login