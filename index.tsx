import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, Slide, FlexBox, Heading } from 'spectacle';
import Slide1 from './src/slides/slide1';
import Slide2 from './src/slides/slide2';
import Slide3 from './src/slides/slide3';
import Slide4 from './src/slides/slide4';
import Slide5 from './src/slides/slide5';
import Slide6 from './src/slides/slide7';
import Slide7 from './src/slides/slide6';

const Presentation = () => (
  <Deck template={<DefaultTemplate color="green" />}>
    <Slide1 />
    <Slide2 />
    <Slide3 />
    <Slide4 />
    <Slide5 />
    <Slide6 />
    <Slide7 />

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Thanks, any question?</Heading>
      </FlexBox>
    </Slide>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);
