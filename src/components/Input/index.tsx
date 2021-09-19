type InputPropsModal = {
  type: string;
  label: string;
};

const Input: React.FC<InputPropsModal> = ({ type, label }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} />
    </>
  );
};

export default Input;
