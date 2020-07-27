import React from "react";
import styled from "styled-components";

// styled-components create element with style
const Btn = styled.button`
  color: green;
  ::after {
    content: "...";
    color: yellow;
  }
`;
//

function TailwindCss() {
  return (
    <div>
      <h3>Tailwind CSS</h3>
      <Btn className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </Btn>
    </div>
  );
}

export default TailwindCss;
