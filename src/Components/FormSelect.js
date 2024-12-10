const FormSelect = ({ label, name, value, onChange, options, error }) => (
    <div className="custom-select-wrapper">
      <label>{label}</label>
      <select
        className="custom-select input"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
  
  export default FormSelect;
  