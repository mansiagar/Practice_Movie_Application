import "react";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Create";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // useContext
  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: `https://frill-shard-licorice.glitch.me/login`,
        method: "POST",
        data: {
          username: username,
          password: password,
        },
      });
      if (response.data.success) {
        console.log(response.data.token);
        const { token } = response.data;
        login(token);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div>
      {error && <h1>{error}</h1>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
