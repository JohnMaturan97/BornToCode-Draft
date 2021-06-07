import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import {Context} from "../context";
import {useRouter} from "next/router";

const Login = () => {
  const [email, setEmail] = useState("evo101@gmail.com");
  const [password, setPassword] = useState("1234567");
  const [loading, setLoading] = useState(false);

  //State access
  const {state, dispatch} = useContext(Context);
  const {user} = state

  //router
  const router = useRouter();

  useEffect(() => {
      if(user !== null) router.push("/");
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      //console.log("LOGIN RESPONSE", data);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      //Save in local storage
      window.localStorage.setItem('user', JSON.stringify(data));
      //Refirect
      router.push("/");
      // setLoading.success(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-info square"></h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Valid Email"
            required
          />

          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Proper Password"
            required
          />

          <button
            type="submit"
            className="btn btn-block btn-info"
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>

        <p className="text-center p-3">
          Not Registered? Click Here!{" "}
          <Link href="/register">
            <a>Register</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;