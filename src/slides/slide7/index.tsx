import {
  Box,
  FlexBox,
  Heading,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from 'spectacle';

export default function () {
  return (
    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="h3">Summary</Heading>
        <UnorderedList fontSize={32}>
          <ListItem>
            State logic goes outside of component
            <Text fontSize={28}>- Reducers are pure and testable</Text>
          </ListItem>
          <ListItem>
            The only way to change state is dispatch a predefined action
            <Text fontSize={28}>
              - No option for <em>illegal</em> state values
            </Text>
          </ListItem>
          <ListItem>
            Each action should describe a single event and can change several
            things in state
            <Text fontSize={28}>
              - Less actions, less state changes, less renders
            </Text>
          </ListItem>
          <ListItem>
            Manage related pieces of state together and don't mix unrelated
            things
          </ListItem>
          <ListItem>
            It's not a magic wand, if your state is complex, management will
            still be complex
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  );
}
