import { accordionAnatomy as parts } from "@chakra-ui/anatomy"
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/styled-system"

const baseStyleContainer: SystemStyleObject = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px",
  },
}

const baseStyleButton: SystemStyleObject = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "1rem",
  _focusVisible: {
    boxShadow: "outline",
  },
  _hover: {
    bg: "blackAlpha.50",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  px: 4,
  py: 2,
}

const baseStylePanel: SystemStyleObject = {
  pt: 2,
  px: 4,
  pb: 5,
}

const baseStyleIcon: SystemStyleObject = {
  fontSize: "1.25em",
}

const baseStyle: PartsStyleObject<typeof parts> = {
  root: {},
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon,
}

export default {
  parts: parts.keys,
  baseStyle,
}
