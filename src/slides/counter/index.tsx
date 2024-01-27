import { Box, Grid, Heading, Slide } from 'spectacle';
import { CodeLayout } from '../../components/CodeLayout';

import useState from './useState?raw';
import useReducer from './useReducer?raw';

export default function Counter() {
  return (
    <Slide>
      <Box>
        <Heading>Counter</Heading>
        <Grid
          gridRowGap={1}
          gridColumnGap={1}
          gridTemplateColumns={`1fr 1fr`}
          maxWidth="100%"
        >
          <CodeLayout
            description="useState"
            language="tsx"
          >
            {useState}
          </CodeLayout>
          <CodeLayout
            description="useReducer"
            language="tsx"
          >
            {useReducer}
          </CodeLayout>
        </Grid>
      </Box>
    </Slide>
  );
}
