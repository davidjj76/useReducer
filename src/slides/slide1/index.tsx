import { FlexBox, Heading, Notes, Slide, Text } from 'spectacle';

export default function () {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h1">useReducer</Heading>
        <Text>The forgotten state hook</Text>
      </FlexBox>
      <Notes>The swiss knife, the Thor hammer...</Notes>
    </Slide>
  );
}
