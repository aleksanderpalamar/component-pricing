import { Heading as ChakraHeading, Stack, Text } from "@chakra-ui/react";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <ChakraHeading
      fontWeight={["semibold", "bold"]}
      bg="blue.1"      
      p="4"
      textAlign="center"
      h="50vh"
    >
      <Text fontSize="5xl" fontWeight="bold" color="white" mt="20">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        <Text fontSize="2xl" fontWeight="light" color="white">
        {subtitle}
        </Text>
      </Stack>
    </ChakraHeading>
  );
}
