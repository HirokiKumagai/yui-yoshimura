export default function TableHeader({
  title
}){
  return (
    <th
      className="
      block
      border
      whitespace-nowrap
      w-full
      px-8 py-4
      text-left
      bg-gray-100
      md:table-cell
      md:w-1/3
      "
    >
      {title}
    </th>
  );
}
