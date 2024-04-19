import { Section, SectionTitle } from "../..";
import { AccomplishmentsData } from "../../constants/Constants";
import { Box, BoxNum, BoxText, Boxes } from "./AccomplishmentsStyles";

function Accomplishments() {
  return (
    <Section>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes>
        {AccomplishmentsData.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
}

export default Accomplishments;
