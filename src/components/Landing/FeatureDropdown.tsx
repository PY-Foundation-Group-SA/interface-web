import React from "react";

import { FlexProps, Icon, Stack, Text, useTheme } from "@chakra-ui/core";
import { AnimatePresence, MotionProps } from "framer-motion";

import BaseCheckbox from "../Shared/atoms/checkbox";
import MotionBox from "../Motion/Box";
import MotionFlex from "../Motion/Flex";

import { PetCodeTheme } from "../../theme";

export type FeatureDropDownProps = {
  name: string;
  description: string;
  open: boolean;
  onClick?: () => void;
} & FlexProps &
  MotionProps;

const FeatureDropDown: React.FC<FeatureDropDownProps> = ({
  name,
  description,
  open,
  onClick = () => {},
  ...props
}) => {
  const theme = useTheme() as PetCodeTheme;

  return (
    <MotionFlex direction="column" {...props}>
      <Stack isInline alignItems="center" marginBottom={2} spacing={3}>
        <BaseCheckbox
          isChecked
          color={theme.colors.petcode.blue[400]}
          isDisabled
          _hover={{}}
        />
        <Text fontSize={{ base: "3xl", md: "2xl" }}>{name}</Text>
        <Icon
          name="dropdown-arrow"
          cursor="pointer"
          size="20px"
          paddingTop={3}
          paddingLeft={open ? 3 : 0}
          paddingBottom={1}
          onClick={onClick}
          transform={open ? null : "rotate(-90deg)"}
          transition="0.2s all"
        />
      </Stack>
      <AnimatePresence>
        {open && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Text
              marginLeft={6}
              fontSize={{ base: "2xl", sm: "xl", md: "lg" }}
              fontWeight="thin"
            >
              {description}
            </Text>
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionFlex>
  );
};

export default FeatureDropDown;
