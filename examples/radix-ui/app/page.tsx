"use client";
import { useState } from "react";
import {
  Box,
  Heading,
  IconButton,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const MenuContent = chakra(DropdownMenu.Content);
const MenuItem = chakra(DropdownMenu.Item);
const MenuCheckboxItem = chakra(DropdownMenu.CheckboxItem);
const MenuItemIndicator = chakra(DropdownMenu.ItemIndicator);
const MenuSeparator = chakra(DropdownMenu.Separator);
const MenuSubTrigger = chakra(DropdownMenu.SubTrigger);
const MenuSubContent = chakra(DropdownMenu.SubContent);
const MenuLabel = chakra(DropdownMenu.Label);
const MenuRadioItem = chakra(DropdownMenu.RadioItem);

const interactiveItemStyles = {
  alignItems: "center",
  bg: "white",
  borderRadius: "sm",
  color: "gray.800",
  cursor: "default",
  display: "flex",
  fontSize: "xs",
  h: "7",
  outline: "none",
  pe: "2",
  ps: "7",
  position: "relative",
  userSelect: "none",
  _highlighted: {
    bg: "blue.600",
    color: "white",
  },
  _disabled: {
    color: "gray.400",
    pointerEvents: "none",
  },
};

function RightSlot({ children }) {
  return (
    <Box as="span" color="currentColor" ms="auto" ps="4" opacity="0.7">
      {children}
    </Box>
  );
}

function DropdownMenuItem({ children, ...props }) {
  return (
    <MenuItem {...interactiveItemStyles} {...props}>
      {children}
    </MenuItem>
  );
}

function DropdownMenuCheckboxItem({ children, ...props }) {
  return (
    <MenuCheckboxItem {...interactiveItemStyles} {...props}>
      {children}
    </MenuCheckboxItem>
  );
}

function DropdownMenuItemIndicator({ children, ...props }) {
  return (
    <MenuItemIndicator
      {...props}
      alignItems="center"
      display="inline-flex"
      insetStart="0"
      justifyContent="center"
      position="absolute"
      w="7"
    >
      {children}
    </MenuItemIndicator>
  );
}

function Separator() {
  return <MenuSeparator bg="gray.200" h="1px" m="1" />;
}

function DropdownMenuRadioItem({
  children,
  ...props
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <MenuRadioItem {...interactiveItemStyles} {...props}>
      {children}
    </MenuRadioItem>
  );
}

export default function Home() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");
  return (
    <VStack
      bg="blue.600"
      color="white"
      gap="5"
      justifyContent="center"
      minH="100dvh"
      px="6"
      textAlign="center"
    >
      <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight="semibold">
        Radix UI + Chakra UI
      </Heading>
      <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="semibold">
        Click me!
      </Text>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <IconButton
            aria-label="Customize options"
            bg="white"
            borderRadius="full"
            color="gray.800"
            shadow="lg"
            size="md"
            _hover={{ bg: "gray.100" }}
          >
            <HamburgerMenuIcon />
          </IconButton>
        </DropdownMenu.Trigger>

        <MenuContent
          sideOffset={5}
          bg="white"
          borderRadius="md"
          color="gray.800"
          minW="56"
          p="1"
          shadow="xl"
        >
          <DropdownMenuItem>
            New Tab <RightSlot>⌘+T</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window <RightSlot>⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            New Private Window <RightSlot>⇧+⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenu.Sub>
            <MenuSubTrigger {...interactiveItemStyles}>
              More Tools
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </MenuSubTrigger>
            <MenuSubContent
              sideOffset={2}
              alignOffset={-5}
              bg="white"
              borderRadius="md"
              color="gray.800"
              minW="48"
              p="1"
              shadow="xl"
            >
              <DropdownMenuItem>
                Save Page As… <RightSlot>⌘+S</RightSlot>
              </DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
              <DropdownMenuItem>Name Window…</DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </MenuSubContent>
          </DropdownMenu.Sub>
          <Separator />
          <DropdownMenuCheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenuItemIndicator>
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenuItemIndicator>
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>
          <Separator />
          <MenuLabel color="gray.600" fontSize="xs" lineHeight="7" ps="7">
            Contributors
          </MenuLabel>

          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem value="pedro">
              <DropdownMenuItemIndicator>
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Pedro Sanchez
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pablo">
              <DropdownMenuItemIndicator>
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Pablo Sanchez
            </DropdownMenuRadioItem>
          </DropdownMenu.RadioGroup>
        </MenuContent>
      </DropdownMenu.Root>
    </VStack>
  );
}
