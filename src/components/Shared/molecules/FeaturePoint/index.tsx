import React from "react";

import { Stack, StackProps, Text } from "@chakra-ui/core";

import BaseCheckbox, { BaseCheckboxProps } from "../../atoms/checkbox";

export type FeaturePointProps = {
  checkBoxProps?: BaseCheckboxProps;
} & StackProps;

const FeaturePoint: React.FC<FeaturePointProps> = ({
  children,
  checkBoxProps = {},
  ...props
}) => (
  <Stack
    isInline
    spacing={2}
    alignItems="center"
    fontSize="xl"
    color="petcode.neutral.600"
    fontWeight="thin"
    {...props}
  >
    <BaseCheckbox
      isChecked
      size={22.5}
      color="white"
      isDisabled
      {...checkBoxProps}
    />
    <Text>{children}</Text>
  </Stack>
);

export default FeaturePoint;
