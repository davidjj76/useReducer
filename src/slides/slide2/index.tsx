import { Box, FlexBox, Heading, Notes, Quote, Slide, Text } from 'spectacle';
import { CodeLayout } from '../../components/CodeLayout';

export default function () {
  return (
    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="h3">useReducer</Heading>
        <Quote fontSize={32}>
          Hook that lets you add a reducer to your component (React docs)
        </Quote>
        <Box marginX="auto">
          <Text fontSize={28}>How it works</Text>
          <CodeLayout>
            {`
            // define the reducer as a pure function of state and action
            const reducer = (state, action) => newState

            // call to useReducer to create the state, passing the reducer and initial value
            const [state, dispatch] = useReducer(reducer, initialArg, init?)

            // dispatch an action to change the state (no other way to change state)
            dispatch({ type: "MY_ACTION" })
            `}
          </CodeLayout>
        </Box>
      </FlexBox>
      <Notes>
        <ul>
          <li>
            <em>init</em> argument less you pass a function to initialize state.
          </li>
          <li>Whenever state changes, component will rerender</li>
          <li>
            Component does not need to know about state to dispatch actions,
            just dispatch and reducer will change the state
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}
