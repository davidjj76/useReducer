import { Grid, Heading, Notes, Slide, Text } from 'spectacle';
import { CodeLayout } from '../../components/CodeLayout';
import left from './left?raw';
import right from './right?raw';

export default function () {
  return (
    <Slide>
      <Heading fontSize="h3" textAlign="left">
        Example: Login form inputs
      </Heading>
      <Text fontSize={28}>
        The action can be anything, not "object with type" constraints, so you
        can go a little further
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
            When you think in useReducer, maybe you think in "redux", actions
            with types..., but useReducer does not enforce you to follow that
            convention. An action can be anything, and can take advantage of
            dispatch stability. That makes useReducer great even for very simple
            state cases, just change your mental model about useReducer.
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}
