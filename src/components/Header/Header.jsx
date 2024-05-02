import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  Span,
  StyledLink,
} from "./HeaderStyles";
import { DiCssdeck } from "react-icons/di";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Header() {
  return (
    <Container>
      <Div1>
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size={"3rem"} /> <Span>Portofolio</Span>
        </a>
      </Div1>
      <Div2>
        <li style={{ padding: "0.5rem" }}>
          <a href="#projects" style={{ textDecoration: "none" }}>
            <NavLink>Projects</NavLink>
          </a>
        </li>
        <li style={{ padding: "0.5rem" }}>
          <a href="#tech" style={{ textDecoration: "none" }}>
            <NavLink>Technologies</NavLink>
          </a>
        </li>
        <li style={{ padding: "0.5rem" }}>
          <a href="#aboutme" style={{ textDecoration: "none" }}>
            <NavLink>About</NavLink>
          </a>
        </li>
      </Div2>
      <Div3>
        <StyledLink
          to="https://github.com/AnggrainiAng"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="3rem" />
        </StyledLink>
        <StyledLink
          to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size="3rem" />
        </StyledLink>
        <StyledLink
          to="https://www.instagram.com/itsbayidomba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram size="3rem" />
        </StyledLink>
      </Div3>
    </Container>
  );
}

export default Header;
