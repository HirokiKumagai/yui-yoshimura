import React from "react";
export default function TableContent({
  content,
}){
  const replaceContent = replaceBrContents(content);
  return (
    <td
      className="
    border
    block
    w-full
    h-full
    px-8 py-4
    md:table-cell
    md:w-2/3
    "
    >
      {replaceContent}
    </td>
  );
}

function replaceBrContents (string){
  let contents = string.split("\\n");
  const contentsLength = contents.length;
  contents = contents.map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item}
        {contentsLength-1? <br/>:""}
      </React.Fragment>
    );
  });
  return (
    <p>{contents}</p>
  );
}
