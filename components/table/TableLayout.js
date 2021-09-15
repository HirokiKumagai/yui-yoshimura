export default function TableLayout({
  children
}){
  return (
    <table
      className="
          border border-solid
          border-collapse
          mx-auto
          table-fixed          z
          "
    >
      <tbody>
        {children}
      </tbody>
    </table>
  );
}
