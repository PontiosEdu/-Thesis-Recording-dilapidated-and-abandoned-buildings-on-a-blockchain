import { useState } from "react";
import Card from "../components/Card";
import classes from "../css/Login.module.css";
import Imgmetamask from '../img/loading.gif'; 

const Login = (props) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("No Ethereum browser detected! Check out MetaMask");
    }
    return provider;
  };

  const onLoginHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallet installed ?"
        );
      }
      setIsConnecting(true);
      await provider.request({
        method: "eth_requestAccounts",
      });
      setIsConnecting(false);
    }
    props.onLogin(provider);
  };

  return (
    <Card className={classes.login}>
      <img src={Imgmetamask} alt="metamask.io"  className="center"></img>
      <button onClick={onLoginHandler} className={classes.button} type="button">
        {!isConnecting && "Connect"}
        {isConnecting && "Loading..."}
      </button>
</Card>
  );
};

export default Login;
