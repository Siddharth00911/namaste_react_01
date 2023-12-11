import React from "react";
import ReactDOM from "react-dom/client";

//React Function Componant
const Function1 = () => {
  return (
    <>
      <h1>I am in Function 1</h1>
      <Function2 />
      <Function2></Function2>
      {Function2()}
      <div>-----------------------------------------------------</div>
      {element2}
    </>
  );
};

const Function2 = () => {
  return (
    <>
      <div>I am in Function 2</div>
    </>
  );
};

//React Element
const element1 = (
  <div>
    <div>I am in Element 1</div>
  </div>
);

const element2 = (
  <div>
    {element1}
    <div>I am in Element 2</div>
  </div>
);

const newElement = (
  <div>
    <Function1 />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Function1 />);         To access: React Functional Componant
root.render(newElement); /*-------------To access: React Element */
