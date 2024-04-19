import { Section, SectionText, SectionTitle } from "../..";
import Button from "../../Button";
import { LeftSection } from "./HeroStyles";

function Hero() {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          My Personal Portofolio
        </SectionTitle>
        <SectionText>
          {` I'm passionate about crafting innovative solutions and bringing
          ideas to life. With expertise in both frontend and backend
          development, I thrive on creating seamless user experiences and
          robust, scalable applications. Explore my projects to see how I tackle
          challenges and bring value to every endeavor`}
        </SectionText>
        <Button onClick={() => (window.location = "https://google.com")}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
