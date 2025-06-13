# Public good design system with Svelte TypeScript

This is a demonstration work in progress of a public good design system with implementation using Svelte and TypeScript.

## Prerequisites

Node JavaScript runtime environment:

```sh
node --version
v23.5.0
```

Node Package eXecute:

```sh
npx --version
10.9.2
```

## How to create this project from scratch

Run:

```sh
npm create vite@latest public-good-design-system-with-svelte-typescript -- --template svelte-ts
cd public-good-design-system-with-svelte-typescript
npm install
npm run dev
```

You should see output such as:

```stdout
  VITE v6.3.5  ready in 305 ms

  ➜  Local: http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

To see the results, browse <http://localhost:5173/>

## git

Run:

```sh
git init
git add --all
git commit -m "Create project"
```

## Components

Work in progress.

* Accordion
* ActionLink
* Alert
* AlertDialog
* AspectRatio
* Avatar
* BackLink
* Badge
* Breadcrumb
* Button
* Calendar
* Card
* CareCard
* Carousel
* Chart
* Character
* Checkbox
* Collapsible
* Combobox
* Command
* ContentsList
* ContextMenu
* DataTable
* DateInput
* DateField
* DatePicker
* DateRangeField
* Details
* Dialog
* DoList
* DoNotList
* Drawer
* DropdownMenu
* ErrorMessage
* ErrorSummary
* Expander
* Fieldset
* Footer
* Form
* ForwardLink
* Header
* HintText
* HoverCard
* Image
* InsetText
* Input
* InputOTP
* InputPIN
* Label
* Menubar
* Meter
* NavigationMenu
* Pagination
* Panel
* Popover
* Progress
* RadioButton
* RadioGroup
* RangeCalendar
* RatingGroup
* Resizable
* ReviewDate
* ScrollArea
* Select
* Separator
* Sheet
* Sidebar
* Skeleton
* SkipLink
* Slider
* Sonner
* SummaryList
* Switch
* Table
* Tabs
* Tag
* TaskList
* TextFieldInput
* TextAreaInput
* Toast
* Toggle
* ToggleGroup
* Tooltip
* WarningCallout

## Component initialization

We provide a simple component initialization script that creates each component.

Run:

```sh
bin/component-init
```

The output is many component files in the directory [`src/lib/`](src/lib/)

Each output file is a simple placeholder with three sections:

1. A script section for TypeScript code.

2. A middle section for HTML markup

3. A styles section for Cascading Style Sheet code.

You will customize these components as you wish.

## Notes about Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

### Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

### Technical considerations

**Why use this over SvelteKit?**

- SvelteKit brings its own routing solution which might not be preferable for some users.

- SvelteKit is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
