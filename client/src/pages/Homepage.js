import React from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Box, Button } from "@mui/material";
import styled from "styled-components";
import Students from "../assets/students.svg";
import { LightPurpleButton } from "../components/buttonStyles";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <StyledContainer>
        <Grid style={{ alignItems: "center" }} container spacing={0}>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <StyledTitle className="text-red-500">
                Welcome to School Management System
              </StyledTitle>
              <StyledText>
                Streamline school management, class organization, and add
                students and faculty. Seamlessly track attendance, assess
                performance, and provide feedback. Access records, view marks,
                and communicate effortlessly.
              </StyledText>

              <StyledBox>
                <StyledLink to="/choose">
                  <LightPurpleButton variant="contained" fullWidth>
                    Login
                  </LightPurpleButton>
                </StyledLink>
                {/* <StyledLink to="/chooseasguest">
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: 2,
                      mb: 3,
                      color: "#7f56da",
                      borderColor: "#7f56da",
                    }}
                  >
                    Login as Guest
                  </Button>
                </StyledLink> */}
                <Link to={"/Adminregister"}>
                  <button
                    style={{
                      backgroundColor: "#33A3D3",
                      color: "rgb(255, 255, 255)",
                      border: "none",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    CREATE NOW
                  </button>
                </Link>
              </StyledBox>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://img.freepik.com/premium-photo/group-college-students-with-backpacks-books-vector-illustration-flat-style_941097-35742.jpg?w=740"
              alt="students"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  ${"" /* height: 100vh; */}
`;

const StyledBox = styled(Box)`
  display: flex;

  ${"" /* flex-direction: column; */}
  align-items: center;
  ${"" /* justify-content: center; */}
  gap: 16px;
  padding: 14px;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 10px;
  margin-bottom: 10px;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
