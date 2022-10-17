import PropTypes from "prop-types";
import styled from "@emotion/styled";

const propTypes = {
  slide: PropTypes.instanceOf(Object).isRequired
};

export default function Slide({ slide }) {
  return (
    <SlideDiv key={slide.id} className="animate__animated animate__fadeIn" slide={slide}>
      <main />
      <Aside>
        <Title>{slide.title}</Title>
        <Text>{slide.text}</Text>
      </Aside>
    </SlideDiv>
  );
}

Slide.propTypes = propTypes;

const SlideDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 16fr 9fr;
  border-radius: 8px;
  width: 67vw;
  height: calc(67vw * (9 / 16)); // maintains 16:9 ratio
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${({ slide }) => slide.image});

  @media (max-width: 576px) {
    width: 100%;
    height: calc(100vw * (9 / 16)); // maintains 16:9 ratio
  }
`;

const Aside = styled.aside`
  display: grid;
  grid-gap: .5em;
  align-content: start;
  border-radius: 0 8px 8px 0;
  padding: 1em;
  background-color: var(--bg-opac-50);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3.2vw;
`;

const Text = styled.p`
  margin: 0;
  font-size: 2vw;
`;
