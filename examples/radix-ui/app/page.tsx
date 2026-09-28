"use client";

import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Menu,
  RadioGroup,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const shortcuts = [
  { label: "New tab", keys: "⌘ T" },
  { label: "New window", keys: "⌘ N" },
  { label: "New private window", keys: "⇧ ⌘ N", disabled: true },
];

const contributors = [
  { label: "Pedro Sanchez", value: "pedro" },
  { label: "Pablo Sanchez", value: "pablo" },
];

function MenuIcon() {
  return (
    <Icon aria-hidden="true" boxSize="5" viewBox="0 0 24 24">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Icon>
  );
}

function ArrowIcon() {
  return (
    <Icon aria-hidden="true" boxSize="4" viewBox="0 0 24 24">
      <path
        d="m9 18 6-6-6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Icon>
  );
}

function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      align="center"
      bg="purple.100"
      borderRadius="xl"
      color="purple.700"
      fontSize="xl"
      h="11"
      justify="center"
      w="11"
    >
      {children}
    </Flex>
  );
}

export default function Home() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <Box
      bg="gray.950"
      color="white"
      minH="100vh"
      overflow="hidden"
      position="relative"
    >
      <Box
        bg="purple.500"
        borderRadius="full"
        filter="blur(120px)"
        h={{ base: "72", md: "96" }}
        left="-32"
        opacity="0.28"
        position="absolute"
        top="-32"
        w={{ base: "72", md: "96" }}
      />
      <Box
        bg="cyan.400"
        borderRadius="full"
        bottom="-48"
        filter="blur(140px)"
        h="96"
        opacity="0.18"
        position="absolute"
        right="-32"
        w="96"
      />

      <Container maxW="6xl" position="relative" py={{ base: "8", md: "12" }}>
        <Flex align="center" justify="space-between">
          <HStack gap="3">
            <Flex
              align="center"
              bg="purple.400"
              borderRadius="lg"
              color="gray.950"
              fontWeight="bold"
              h="9"
              justify="center"
              w="9"
            >
              C
            </Flex>
            <Text fontSize="sm" fontWeight="semibold" letterSpacing="wide">
              CHAKRA EXAMPLE
            </Text>
          </HStack>
          <Badge
            bg="whiteAlpha.100"
            borderColor="whiteAlpha.300"
            borderRadius="full"
            borderWidth="1px"
            color="purple.200"
            px="3"
            py="1"
          >
            Next.js App Router
          </Badge>
        </Flex>

        <Grid
          alignItems="center"
          gap={{ base: "12", lg: "20" }}
          minH={{ base: "auto", lg: "calc(100vh - 132px)" }}
          py={{ base: "20", md: "28" }}
          templateColumns={{ base: "1fr", lg: "1.08fr 0.92fr" }}
        >
          <Stack gap="8">
            <Stack gap="5">
              <Badge
                alignSelf="flex-start"
                bg="purple.400"
                borderRadius="full"
                color="gray.950"
                px="3"
                py="1"
              >
                Tailwind-free
              </Badge>
              <Heading
                fontSize={{ base: "5xl", md: "7xl" }}
                letterSpacing="tight"
                lineHeight="0.98"
                maxW="3xl"
              >
                Build polished interfaces with{" "}
                <Box as="span" color="purple.300">
                  Chakra UI.
                </Box>
              </Heading>
              <Text
                color="whiteAlpha.700"
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight="tall"
                maxW="2xl"
              >
                A complete migration showing responsive layout, accessible
                controls, design tokens, and stateful components in one focused
                Next.js example.
              </Text>
            </Stack>

            <HStack flexWrap="wrap" gap="3">
              <Menu.Root>
                <Menu.Trigger asChild>
                  <Button
                    bg="purple.400"
                    color="gray.950"
                    size="lg"
                    _hover={{ bg: "purple.300" }}
                  >
                    <MenuIcon />
                    Open command menu
                  </Button>
                </Menu.Trigger>
                <Menu.Positioner>
                  <Menu.Content
                    bg="gray.900"
                    borderColor="whiteAlpha.200"
                    borderWidth="1px"
                    color="white"
                    minW="72"
                    p="2"
                  >
                    {shortcuts.map((shortcut) => (
                      <Menu.Item
                        key={shortcut.label}
                        disabled={shortcut.disabled}
                        value={shortcut.label}
                      >
                        <Flex justify="space-between" w="full">
                          <Text>{shortcut.label}</Text>
                          <Text color="whiteAlpha.500" fontSize="xs">
                            {shortcut.keys}
                          </Text>
                        </Flex>
                      </Menu.Item>
                    ))}
                    <Menu.Root positioning={{ placement: "right-start" }}>
                      <Menu.TriggerItem>
                        More tools
                        <ArrowIcon />
                      </Menu.TriggerItem>
                      <Menu.Positioner>
                        <Menu.Content
                          bg="gray.900"
                          borderColor="whiteAlpha.200"
                          borderWidth="1px"
                          color="white"
                        >
                          <Menu.Item value="save-page">
                            Save page as…
                          </Menu.Item>
                          <Menu.Item value="shortcut">
                            Create shortcut…
                          </Menu.Item>
                          <Menu.Item value="developer-tools">
                            Developer tools
                          </Menu.Item>
                        </Menu.Content>
                      </Menu.Positioner>
                    </Menu.Root>
                    <Menu.Separator />
                    <Menu.CheckboxItem
                      checked={bookmarksChecked}
                      onCheckedChange={setBookmarksChecked}
                      value="bookmarks"
                    >
                      <Menu.ItemIndicator />
                      Show bookmarks
                      <Menu.ItemCommand>⌘ B</Menu.ItemCommand>
                    </Menu.CheckboxItem>
                    <Menu.CheckboxItem
                      checked={urlsChecked}
                      onCheckedChange={setUrlsChecked}
                      value="full-urls"
                    >
                      <Menu.ItemIndicator />
                      Show full URLs
                    </Menu.CheckboxItem>
                    <Menu.Separator />
                    <Menu.RadioItemGroup
                      onValueChange={(details) => setPerson(details.value)}
                      value={person}
                    >
                      {contributors.map((contributor) => (
                        <Menu.RadioItem
                          key={contributor.value}
                          value={contributor.value}
                        >
                          <Menu.ItemIndicator />
                          {contributor.label}
                        </Menu.RadioItem>
                      ))}
                    </Menu.RadioItemGroup>
                  </Menu.Content>
                </Menu.Positioner>
              </Menu.Root>
              <Button
                asChild
                color="white"
                size="lg"
                variant="outline"
                _hover={{ bg: "whiteAlpha.100" }}
              >
                <a
                  href="https://chakra-ui.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Explore Chakra UI
                </a>
              </Button>
            </HStack>
          </Stack>

          <Card.Root
            bg="whiteAlpha.100"
            borderColor="whiteAlpha.200"
            borderRadius="3xl"
            borderWidth="1px"
            boxShadow="0 32px 80px rgba(0, 0, 0, 0.35)"
            color="white"
            overflow="hidden"
          >
            <Card.Header pb="4">
              <Flex align="center" justify="space-between">
                <Box>
                  <Card.Title fontSize="xl">Interface preferences</Card.Title>
                  <Card.Description color="whiteAlpha.600">
                    Controls composed with Chakra primitives
                  </Card.Description>
                </Box>
                <HStack gap="1.5">
                  {["red.400", "yellow.400", "green.400"].map((color) => (
                    <Box
                      key={color}
                      bg={color}
                      borderRadius="full"
                      h="2.5"
                      w="2.5"
                    />
                  ))}
                </HStack>
              </Flex>
            </Card.Header>
            <Separator borderColor="whiteAlpha.200" />
            <Card.Body gap="7">
              <Stack gap="5">
                <Text
                  color="whiteAlpha.500"
                  fontSize="xs"
                  fontWeight="semibold"
                  letterSpacing="widest"
                >
                  BROWSER OPTIONS
                </Text>
                <Checkbox.Root
                  checked={bookmarksChecked}
                  onCheckedChange={(details) =>
                    setBookmarksChecked(!!details.checked)
                  }
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>Show bookmarks bar</Checkbox.Label>
                </Checkbox.Root>
                <Checkbox.Root
                  checked={urlsChecked}
                  onCheckedChange={(details) =>
                    setUrlsChecked(!!details.checked)
                  }
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>Always show full URLs</Checkbox.Label>
                </Checkbox.Root>
              </Stack>

              <Separator borderColor="whiteAlpha.200" />

              <Stack gap="4">
                <Text
                  color="whiteAlpha.500"
                  fontSize="xs"
                  fontWeight="semibold"
                  letterSpacing="widest"
                >
                  ACTIVE CONTRIBUTOR
                </Text>
                <RadioGroup.Root
                  onValueChange={(details) => setPerson(details.value)}
                  value={person}
                >
                  <Stack gap="3">
                    {contributors.map((contributor) => (
                      <RadioGroup.Item
                        key={contributor.value}
                        value={contributor.value}
                      >
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>
                          {contributor.label}
                        </RadioGroup.ItemText>
                      </RadioGroup.Item>
                    ))}
                  </Stack>
                </RadioGroup.Root>
              </Stack>
            </Card.Body>
          </Card.Root>
        </Grid>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap="4" pb="10">
          {[
            {
              icon: "01",
              title: "Style props",
              description: "Responsive values live beside the components.",
            },
            {
              icon: "02",
              title: "Accessible by default",
              description: "Keyboard and screen reader behavior is built in.",
            },
            {
              icon: "03",
              title: "Composable",
              description: "Small primitives combine into complete interfaces.",
            },
          ].map((feature) => (
            <HStack
              key={feature.title}
              align="flex-start"
              bg="whiteAlpha.50"
              borderColor="whiteAlpha.200"
              borderRadius="2xl"
              borderWidth="1px"
              gap="4"
              p="5"
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <Box>
                <Text fontWeight="semibold">{feature.title}</Text>
                <Text color="whiteAlpha.600" fontSize="sm" mt="1">
                  {feature.description}
                </Text>
              </Box>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
