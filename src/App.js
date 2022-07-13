import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/Steptwo";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState(false);
  return (
    <>
      {result ? (
        <StepTwo
          title="Result"
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirm={passwordConfirm}
          setpasswordConfirm={setpasswordConfirm}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          setResult={setResult}
        />
      ) : (
        <Form
          title="Create Account"
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirm={passwordConfirm}
          setpasswordConfirm={setpasswordConfirm}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          setResult={setResult}
        />
      )}
  <Footer
        title="Made with"
        title2="React"
        title3="Le Reacteur"
        title4="at"
        title6="by"
        title5="Manue"
      />
    </>
  );
}

export default App;
