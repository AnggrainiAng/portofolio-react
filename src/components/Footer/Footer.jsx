import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { StyledLink } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

function Footer() {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem
            to="https://wa.me/1111111111"
            target="_blank"
            rel="noopener noreferrer"
          >
            1111-1111-1111
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem
            to="mailto: anggi3296@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            anggi3296@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
}

export default Footer;
