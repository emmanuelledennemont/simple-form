const Form = ({
  title,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirm,
  setpasswordConfirm,
  errorMessage,
  setErrorMessage,
  setResult,
}) => {
  const verifyPassword = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      setErrorMessage("Votre mot de passe n'est pas identique !");
    } else {
      setErrorMessage("");
      setResult(true);
    }
    // alert("Formulaire validé !");
  };

  return (
    <>
      <div className="app">
        <form onSubmit={verifyPassword}>
          <h1>{title}</h1>
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>

            <input
              className={errorMessage && "red"}
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
          <div className="form-input">
            <label htmlFor="passwordConfirm">Confirm Password</label>

            <input
              className={errorMessage && "red"}
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              placeholder="Confirm your password"
              onChange={(event) => setpasswordConfirm(event.target.value)}
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
          <div className="form-input">
            <button
              onClick={() => {
                setResult(false);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
