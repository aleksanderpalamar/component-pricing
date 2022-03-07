import { Box, Button, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { tiers } from "./pricing";
import { CheckIcon } from "@heroicons/react/outline";

export function Pricing() {
  return (
    <Flex>
      <Box maxW="7xl" mx="auto" my={["auto", "-40"]} >
        <Box maxW="7xl" mx="auto" >
          <Box>
          <Stack
            flex="grid"
            flexDirection={["column", "row"]}
            gap="6"
            maxW="7xl"
            mx="auto"
            alignItems="center"
            p='4'
          >
            {tiers.map((tier) => (
              <>
                <SimpleGrid 
                  key={tier.name}
                  rounded="lg"
                  bg="white"
                >
                  <Box 
                    p="4"                    
                    maxH="100%"
                  >
                    <Text
                      as="h2"
                      fontSize="3xl"
                      fontWeight="bold"
                      textColor="gray.2"                      
                      p="4"
                    >
                     {tier.name}                        
                    </Text>
                    <Text as="p">
                      <Text
                        as="span"
                        fontSize="6xl"
                        fontWeight="extrabold"
                        textColor="gray.2"
                      >
                        R$ {tier.priceMonthly}<Text as="span" fontSize="20">,00</Text>
                      </Text>
                      <Text as="span" ml="2" fontSize="md" fontWeight="medium" textColor="gray.1">
                        /mês
                      </Text>
                    </Text>
                    <Text
                      as="p"
                      mt="4"
                      fontSize="sm"
                      fontWeight="medium"
                      textColor="gray.1"
                    >
                      {tier.description}
                    </Text>                  
                  </Box>
                  <Box pt="4" pb="8" px="4">                    
                    <Stack spacing="4" >
                      {tier.includedFeatures.map((feature) => (
                        <Box key={feature} d="flex" p="2">
                          <Box
                            position="absolute"
                            h="6"
                            w="6"
                            textColor="green.1"
                            aria-hidden="true"
                          >
                            <CheckIcon />
                          </Box>
                          <Box
                            as="p"
                            ml="9"
                            fontSize="lg"
                            fontWeight="medium"
                            textColor="gray.1"
                          >
                            {feature}
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                    <Button
                      as="a"                     
                      w="full"                      
                      colorScheme="blue"                      
                      rounded="md"
                      mt="4"
                      size="lg"
                      fontSize="lg"                      
                      fontWeight="semibold"
                      variant="solid"
                      textColor="white"
                      textAlign="center"                      
                      href={tier.href}
                    >
                      Assinar
                    </Button>
                  </Box>
                </SimpleGrid>
              </>
            ))}
          </Stack>
          </Box>          
        </Box>
      </Box>
    </Flex>
  );
}
