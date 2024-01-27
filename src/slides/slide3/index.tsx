import { Grid, Heading, Notes, Slide, Text } from 'spectacle';
import { CodeLayout } from '../../components/CodeLayout';
import left from './left?raw';
import right from './right?raw';

export default function () {
  return (
    <Slide>
      <Heading fontSize="h3" textAlign="left">
        Example: fetching data
      </Heading>
      <Text fontSize={28}>
        <em>isLoading</em>, <em>data</em> and <em>error</em> change together, so
        we can manage them together
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
            One action can change several parts of state, think in action as
            "events", instead of having setIsLoading, setData, setError actions,
            you will have events ("pending", "fulfilled", "rejected")
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}
