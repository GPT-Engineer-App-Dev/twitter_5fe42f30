import React from "react";
import { ChakraProvider, Box, Flex, VStack, Heading, Text, Input, IconButton, StackDivider, Avatar, useColorModeValue, Button, useColorMode } from "@chakra-ui/react";
import { FaTwitter, FaMoon, FaSun, FaRegComment, FaRetweet, FaHeart, FaShareSquare } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.700");
  const secondaryText = useColorModeValue("gray.600", "gray.400");

  // This is a mock function to simulate posting a tweet
  const handlePostTweet = () => {
    // In a real application, this would involve setting up state, handling form submission, etc.
    console.log("Tweet Posted!");
  };

  // This is a mock list of tweets to display
  const tweets = [
    {
      id: 1,
      username: "@john_doe",
      name: "John Doe",
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmlsZXxlbnwwfHx8fDE3MTIzODU4MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      content: "Just setting up my twttr clone!",
      comments: 1,
      retweets: 1,
      likes: 5,
    },
    // Add more tweets as needed for the UI
  ];

  return (
    <ChakraProvider>
      <Flex bg={bg} minH="100vh" align="center" justify="center" p={4}>
        <VStack spacing={6} w="full" maxW="md" divider={<StackDivider borderColor="gray.200" />}>
          <Flex justify="space-between" w="full">
            <Heading size="md">
              <FaTwitter />
            </Heading>
            <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
          </Flex>
          <Input placeholder="What's happening?" />
          <Button leftIcon={<FaTwitter />} onClick={handlePostTweet}>
            Tweet
          </Button>
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch" w="full">
            {tweets.map((tweet) => (
              <Box key={tweet.id} p={4} bg={useColorModeValue("white", "gray.800")} borderRadius="md" boxShadow="sm">
                <Flex mb={2}>
                  <Avatar size="sm" name={tweet.name} src={tweet.avatar} />
                  <Box ml={2}>
                    <Text fontWeight="bold">
                      {tweet.name}{" "}
                      <Text as="span" fontWeight="normal" color={secondaryText}>
                        {tweet.username}
                      </Text>
                    </Text>
                    <Text fontSize="sm" color={secondaryText}>
                      {tweet.content}
                    </Text>
                  </Box>
                </Flex>
                <Flex mt={2} justify="space-between" color={secondaryText}>
                  <IconButton size="sm" aria-label="Comment" icon={<FaRegComment />} variant="ghost" />
                  <IconButton size="sm" aria-label="Retweet" icon={<FaRetweet />} variant="ghost" />
                  <IconButton size="sm" aria-label="Like" icon={<FaHeart />} variant="ghost" />
                  <IconButton size="sm" aria-label="Share" icon={<FaShareSquare />} variant="ghost" />
                </Flex>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
