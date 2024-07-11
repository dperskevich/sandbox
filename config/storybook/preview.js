import { addDecorator } from "@storybook/react"
import { StyleDecorator } from "../../src/shared/config/storybook/style-decorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/theme-decorator";
import { Theme } from "../../src/app/providers/theme-provider"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.Light));