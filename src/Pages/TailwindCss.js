import React from "react";
import styled from "styled-components";

// styled-components create element with style
const Btn = styled.button`
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
      <Btn className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Button
      </Btn>
    </div>
  );
}

export default TailwindCss;
