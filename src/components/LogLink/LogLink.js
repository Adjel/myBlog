import React from "react";
import Link from "next/link";
import { IoCarSportSharp } from "react-icons/io5";
import styled from "styled-components";

function LogLink() {
  return (
    <HomeLinkIcon href="Home">
      <Icon />
    </HomeLinkIcon>
  );
}

const Icon = styled(IoCarSportSharp)`
  width: ${50 / 16}rem;
  height: ${50 / 16}rem;
`;

const HomeLinkIcon = styled(Link)`
  * {
    color: black;
    text-decoration: none;
  }
`;

export default LogLink;
