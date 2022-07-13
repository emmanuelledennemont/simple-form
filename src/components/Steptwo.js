const StepTwo = ({ title, name, email, password, setResult }) => {
  return (
    <>
      <div className="result">
        <h2>{title}</h2>
        <div className="grp">
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
        </div>
        <button
          onClick={() => {
            setResult(false);
          }}
        >
          Edit your information
        </button>
      </div>
    </>
  );
};
export default StepTwo;
