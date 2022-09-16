import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: #e84a5f;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function AuthNav () {
    return(
        <Box>
            <Link to="/register">Registration</Link>
            <Link to="/login">Login</Link>
        </Box>
    )
};