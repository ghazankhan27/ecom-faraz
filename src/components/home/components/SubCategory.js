import React, { useState } from "react";

export default function SubCategory({ title, list }) {
  const [show, setShow] = useState("hidden");

  const clickHandler = () => {
    if (show === "hidden") setShow("");
    else setShow("hidden");
  };

  return (
    <li className="border-b border-gray-200 pt-4">
      {list.length > 0 ? (
        <p
          className="hover:underline cursor-pointer select-none"
          onClick={clickHandler}
        >
          {title}
        </p>
      ) : (
        <a href="#">
          <p
            className="hover:underline cursor-pointer select-none"
            onClick={clickHandler}
          >
            {title}
          </p>
        </a>
      )}
      {list.length > 0 && (
        <ul className={"list-inside list-decimal text-sm indent-4 " + show}>
          {list.map((item, index) => (
            <li key={index}>
              <a className="hover:underline" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
