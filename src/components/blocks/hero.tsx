import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Button } from "@blueprintjs/core";

const Container = styled.div`
  align-items: center;
  background-image: url("https://res.cloudinary.com/dyx4yhvoq/image/upload/c_fill,f_auto,q_auto/v1587410829/5e9c790d1a20a610174acc16/btfswvu2f3uqflsnaj3e.jpg");
  border-bottom: 2px solid #102a43;
  display: flex;
  height: 500px;
  justify-content: space-around;
  padding: 10px 20px;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  color: #f0f4f8;
  display: flex;
  flex-direction: column;
  min-height: 250px;
  min-width: 500px;
  padding: 20px;
  text-align: center;
`;

const Input = styled.textarea`
  background: none;
  border: none;
  box-shadow: none;
  color: #f0f4f8;
  font-family: "Open Sans", sans;
  resize: none;
`;

const Title = styled(Input)`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const SubTitle = styled(Input)`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  background-color: #d64545 !important;
  background-image: none !important;
  box-shadow: none !important;
  color: #f0f4f8 !important;
  font-weight: bold;
  margin: 15px auto 0;
  width: 30%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  span{
    color: #f0f4f8;
    position: relative;
    z-index: 5;
    transition: color 750ms ease;
  }
  &:hover {
    &:before{
      transform: translateX(0);
      transition: transform 750ms ease;
    }
  }
  &::before{
    content: " ";
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    background: #a92c2c;
    z-index: -1;
    transform: translateX(-100%);
    z-index: 1;
    transition: transform 750ms ease;
    margin-right: 0px;
  }
`;

interface HeroProps {
  data: {
    title?: string;
    subtitle?: string;
  },
  sidebarDisabled: boolean;
}

const Hero: React.FunctionComponent<HeroProps> = ({ data, sidebarDisabled }): JSX.Element => {
  const [title, setTitle] = useState(data?.title || "Title");
  const [subtitle, setSubtitle] = useState(data?.subtitle || "Subtitle");

  useEffect(() => {
    setTitle(data?.title)
    setSubtitle(data?.subtitle)
  }, [data]);

  return (
    <Container data-testid="hero">
      <Overlay>
        <Title
          disabled={sidebarDisabled}
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <SubTitle
          disabled={sidebarDisabled}
          value={subtitle}
          onChange={(e) => setSubtitle(e.currentTarget.value)}
        />
        <StyledButton> Order Now! </StyledButton>
      </Overlay>
    </Container>
  );
}

export default Hero;
