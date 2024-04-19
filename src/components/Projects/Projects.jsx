import { Section, SectionDivider, SectionTitle } from "../..";
import { projects } from "../../constants/Constants";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyle";

function Projects() {
  return (
    <>
      <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
          {projects.map(
            ({ id, image, title, description, tags, source, visit }) => (
              <BlogCard key={id}>
                <Img src={image} />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks
                    to={visit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </ExternalLinks>
                  <ExternalLinks
                    to={source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </ExternalLinks>
                </UtilityList>
              </BlogCard>
            )
          )}
        </GridContainer>
      </Section>
    </>
  );
}

export default Projects;
