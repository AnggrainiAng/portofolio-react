import { Section, SectionDivider, SectionText, SectionTitle } from "../..";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechStyles";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

function Technologies() {
  return (
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        {`I've worked with a range a technologies in the web development world.
          From Back-End to Design`}
      </SectionText>
      <List>
        <ListItem>
          <DiFirebase size="3rem" style={{ color: "white" }} />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js, Javascript, Typescript, Redux, Next.js, TailwindCSS,
              Chakra UI
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiReact size="3rem" style={{ color: "white" }} />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js, Express, MySQL, MongoDB, Prisma
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiZend size="3rem" style={{ color: "white" }} />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
}

export default Technologies;
