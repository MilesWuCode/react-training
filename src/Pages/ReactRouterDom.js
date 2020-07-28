import React from "react";
import styled from "styled-components";

// styled-components create element with style
const Title = styled.h3`
  color: red;
`;
//

const ReactRouterDom = () => {
  return (
    <div>
      <Title className="text-2xl">React Router Dom</Title>
    </div>
  );
}

export default ReactRouterDom;
