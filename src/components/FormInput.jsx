export default function FormInput({
  type,
  id,
  text,
  placeHolder,
  handleChange,
  value,
  isNumber,
}) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        id={id}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) =>
          handleChange(isNumber ? Number(e.target.value) : e.target.value)
        }
      />
    </>
  );
}
