import { ComponentProps } from 'react';
import { Box, Text, CodePane, codePaneThemes } from 'spectacle';

type Props = Omit<ComponentProps<typeof CodePane>, 'language'> & {
  description?: string;
};

export function CodeLayout({ description, ...codePaneProps }: Props) {
  return (
    <Box>
      {description && (
        <Text margin={4} fontSize={32}>
          {description}
        </Text>
      )}
      <CodePane
        {...codePaneProps}
        showLineNumbers={false}
        theme={codePaneThemes.dracula}
        language="tsx"
      />
    </Box>
  );
}
