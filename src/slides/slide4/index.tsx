import { Grid, Heading, Notes, Slide, Text } from 'spectacle';
import { CodeLayout } from '../../components/CodeLayout';
import left from './left?raw';
import right from './right?raw';

export default function () {
  return (
    <Slide>
      <Heading fontSize="h3" textAlign="left">
        Example: Traffic lights
      </Heading>
      <Text fontSize={28}>
        Sometimes you just have one action, so we can forget about in the
        reducer
      </Text>
      <Grid
        gridRowGap={1}
        gridColumnGap={1}
        gridTemplateColumns={`1fr 1fr`}
        maxWidth="100%"
      >
        <CodeLayout>{left}</CodeLayout>
        <CodeLayout>{right}</CodeLayout>
      </Grid>
      <Notes>
        <ul>
          <li>
            The dispatch method has stable reference, take advantage of that,
            you will use less "useCallback" and reduce dependencies in effects
          </li>
          <li>Possible states are finite and predictable</li>
        </ul>
      </Notes>
    </Slide>
  );
}
