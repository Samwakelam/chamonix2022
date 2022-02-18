import React from "react";
import styled from "styled-components";
import "jest-styled-components";

const Button = styled.button`
  color: red;
`;

describe("it works", () => {
  const tree = render.create(<Button />).toJSON();

  it("", () => {
    expect(tree).toMatchSnapshot();
  });
});
