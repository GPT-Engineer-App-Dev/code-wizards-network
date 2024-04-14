import { Box, Button, Container, Flex, Heading, Image, Input, Link, Stack, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.50">
      <Container maxW="container.lg" py={16}>
        <Flex align="center" direction={{ base: "column", md: "row" }} justify="space-between">
          <Box flex={1} pr={{ md: 12 }}>
            <Heading as="h1" size="2xl" mb={4}>
              Hire Top Software Developers
            </Heading>
            <Text fontSize="xl" mb={8}>
              Particles connects companies with the best software talent specializing in modern web technologies. Search and contact developers directly to build your team.
            </Text>

            <Stack direction={{ base: "column", md: "row" }} mb={8} maxW="md" spacing={4}>
              <Input placeholder="Search developers by skill..." size="lg" />
              <Button colorScheme="blue" leftIcon={<FaSearch />} size="lg">
                Search
              </Button>
            </Stack>

            <Button as={Link} to="/developers" colorScheme="teal" size="lg">
              View Developer Listings
            </Button>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nfGVufDB8fHx8MTcxMzA0ODY0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Developers working" />
          </Box>
        </Flex>
      </Container>

      <Box bg="blue.600" color="white" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex={1} pr={{ md: 12 }}>
              <Heading as="h2" size="xl" mb={4}>
                Access Top Developer Talent
              </Heading>
              <Text fontSize="lg" mb={8}>
                Our network includes highly-skilled developers across a range of web technologies. Quickly find the expertise you need to build your software projects.
              </Text>
            </Box>
            <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjBjb2Rpbmd8ZW58MHx8fHwxNzEzMDUxNTQyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer coding" maxW="sm" />
          </Flex>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwcm9maWxlJTIwcGFnZXxlbnwwfHx8fDE3MTMwNTE1NDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer profile" maxW="sm" mr={{ md: 12 }} />
            <Box flex={1}>
              <Heading as="h2" size="xl" mb={4}>
                Search Developers by Skill
              </Heading>
              <Text fontSize="lg" mb={8}>
                Our advanced search lets you filter developers by their technology specializations. Whether you need a React, Node or Python expert, you can find the right fit.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="teal.600" color="white" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex={1} pr={{ md: 12 }}>
              <Heading as="h2" size="xl" mb={4}>
                Contact Developers Directly
              </Heading>
              <Text fontSize="lg" mb={8}>
                With our built-in messaging system, you can reach out to developers directly to discuss opportunities. Build relationships and grow your team.
              </Text>
            </Box>
            <Image src="https://images.unsplash.com/photo-1521931961826-fe48677230a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZXNzYWdpbmclMjBhcHAlMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzEzMDUxNTQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Messaging interface" maxW="sm" />
          </Flex>
        </Container>
      </Box>

      <Box py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Start Hiring Top Developers
        </Heading>
        <Text fontSize="lg" mb={8}>
          Join Particles today and access our network of skilled software experts
        </Text>
        <Button colorScheme="blue" size="lg">
          View Developer Listings
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
