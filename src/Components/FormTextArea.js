const FormTextArea = ({ label, name, value, onChange }) => (
  <div>
    <label>{label}</label>
    <textarea
      className="input"
      rows="6"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormTextArea;
