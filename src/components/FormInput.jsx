export default function FormInput({
  type,
  id,
  text,
  placeHolder,
  handleChange,
  value,
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
          handleChange(
            type === "number" ? Number(e.target.value) : e.target.value
          )
        }
      />
    </>
  );
}
