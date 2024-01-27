import { Box, FlexBox, Heading, Notes, Slide, Text } from 'spectacle';
import { CodeLayout } from '../../components/CodeLayout';

import useState from './useState?raw';

export default function () {
  return (
    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="h3">A last thing</Heading>
        <Box marginX="auto">
          <Text fontSize={28}>
            If <em>setState</em> did not exist...
          </Text>
          <CodeLayout>{useState}</CodeLayout>
        </Box>
      </FlexBox>
      <Notes>
        In reverse, is possible to create a useReducer from useState, but is
        needed useCallback to keep dispatch reference.
      </Notes>
    </Slide>
  );
}
