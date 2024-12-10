const FormInput = ({ label, name, type, value, onChange, error }) => (
  <div>
    <label>{label}</label>
    <input
      className="input"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
    {error && <p className="error-text">{error}</p>}
  </div>
);

export default FormInput;
