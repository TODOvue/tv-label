import Color from "./demos/color.vue?raw";
import Color2 from "./demos/color2.vue?raw";
import Color3 from "./demos/color3.vue?raw";
import Default from "./demos/default.vue?raw";
import DefaultProps from "./demos/defaultProps.vue?raw";
import WithIcon from "./demos/withIcon.vue?raw";
import WithIconLeft from "./demos/withIconLeft.vue?raw";
import Large from "./demos/large.vue?raw";
import Small from "./demos/small.vue?raw";
import Outline from "./demos/outline.vue?raw";
import OutlineSmall from "./demos/outlineSmall.vue?raw";

const clickHandler = (label) => {
  console.log("clicked", label);
};

export const demos = [
  {
    id: 1,
    title: "Default",
    propsData: {
      textLabel: "Default",
      onClick: clickHandler
    },
    description: "This demo showcases the TvLabel component used as a chip-style label, ideal for displaying statuses, tags, or categorized information with various styles and color variants.",
    html: Default,
  },
  {
    id: 2,
    title: "Default using props instead of slot",
    propsData: {
      textLabel: "Default",
      textColor: "#000000",
      color: "#FFFFFF",
      onClick: clickHandler,
    },
    description: "This demo showcases the TvLabel component used as a chip-style label, ideal for displaying statuses, tags, or categorized information with various styles and color variants.",
    html: DefaultProps,
  },
  {
    id: 3,
    title: "With color (Short Hex)",
    propsData: { textLabel: "Vue", color: "#4FC08D", onClick: clickHandler },
    description: "This demo showcases the TvLabel component used as a chip-style label, ideal for displaying statuses, tags, or categorized information with various styles and color variants.",
    html: Color,
  },
  {
    id: 4,
    title: "Large Size",
    propsData: {
      textLabel: "Large Label",
      color: "#4FC08D",
      size: "lg",
      onClick: clickHandler,
    },
    description: "Demonstrating the large size variant.",
    html: Large,
  },
  {
    id: 5,
    title: "Small Size",
    propsData: {
      textLabel: "Small Label",
      color: "#4FC08D",
      size: "sm",
      onClick: clickHandler,
    },
    description: "Demonstrating the small size variant.",
    html: Small,
  },
  {
    id: 6,
    title: "Outlined",
    propsData: {
      textLabel: "Tailwind",
      color: "#38B2AC",
      isOutline: true,
      onClick: clickHandler,
    },
    description: "Demonstrating the default size variant with outline.",
    html: Outline,
  },
  {
    id: 7,
    title: "Outline small",
    propsData: {
      textLabel: "NPM",
      color: "#CB3837",
      isOutline: true,
      size: "sm",
      onClick: clickHandler,
    },
    description: "Demonstrating the small size variant with outline.",
    html: OutlineSmall,
  },
  {
    id: 8,
    title: "With icon edit (default right)",
    propsData: {
      textLabel: "Javascript",
      isEdit: true,
      color: "#F0DB4F",
      onClick: clickHandler,
    },
    description: "This demo showcases the TvLabel component used as a chip-style label, ideal for displaying statuses, tags, or categorized information with various styles and color variants.",
    html: WithIcon,
  },
  {
    id: 9,
    title: "With icon remove - Position: left",
    propsData: {
      textLabel: "CSS",
      isRemove: true,
      color: "#1572B6",
      iconPosition: "left",
      onClick: clickHandler,
    },
    description: "This demo showcases the TvLabel component used as a chip-style label, ideal for displaying statuses, tags, or categorized information with various styles and color variants.",
    html: WithIconLeft,
  },
  {
    id: 10,
    title: "With color 2",
    propsData: { textLabel: "HTML", color: "#E34F26", onClick: clickHandler },
    description: "This demo showcases the TvLabel component used as a chip-style label, ideal for displaying statuses, tags, or categorized information with various styles and color variants.",
    html: Color2,
  },
  {
    id: 11,
    title: "With color 3",
    propsData: {
      textLabel: "Git - GitHub",
      color: "#F05032",
      onClick: clickHandler,
    },
    description: "This demo showcases the TvLabel component used as a chip-style label, ideal for displaying statuses, tags, or categorized information with various styles and color variants.",
    html: Color3,
  },
];
