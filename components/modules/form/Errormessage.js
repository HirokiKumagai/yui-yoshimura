export default function ErrorMessage({error, type, message}){
  const judge = (error && error.type === type && message);
  const test = judge? "":"hidden"
  return(
      <span className={test}>{message}</span>
  );
}
