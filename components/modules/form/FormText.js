export default function FormText({name, placeholder}) {
  return (
    <input
      id="name"
      name={name}
      type="text"
      className=""
      placeholder={placeholder}
    />
  );
}
