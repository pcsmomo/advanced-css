# Advanced-css Summary

Advanced CSS and Sass: Flexbox, Grid, Animations and More! by Jonas Schmedtmann

---

# Details

<details open>
  <summary>Click to Contract/Expend</summary>

### 3. Setting up Our Tools

[VSCode Setup used in the course](https://github.com/jonasschmedtmann/advanced-css-course/blob/master/vscode-setup.md)

[CSS clip-path maker](https://bennettfeely.com/clippy/)

[Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

### 6. Building the Header - Part 1

clip-path : It creates a clipping region that sets what part of an element should be shown

### 11. Section 3: How CSS Works, Intro

1. Responsive Design
   - Fluid layouts
   - Media queries
   - Responsive images
   - Correct units
   - Desktop-first vs mobile-first
2. Maintainable and scalable code
   - Clean
   - Easy-to-understand
   - Growth
   - Reusable
   - How to organize files
   - How to name classes
   - How to structure HTML
3. Web performance
   - Less HTTP requests
   - Less code
   - Compress code
   - Use a CSS preprocessor
   - Less images
   - Compress images

### 20. CSS Architecture, Components and BEM

[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

[BEM](http://getbem.com/)

[SASS Guideline](https://sass-guidelin.es/)

[The 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)

### 23. What is Sass?

Main SASS Features

- Variables: for reusuable values such as colors, font-sizes, spacing, etc;
- Nesting: to nest selectors inside of one another, allowing us to write less code;
- Operators: for mathematical operations right inside of CSS;
- Partials and imports: to write CSS in different files and importing them all into one single file;
- Mixins: to write reusable pieces of CSS code;
- Functions: similar to mixins, with the difference that they produce a value that can than be used;
- Extends: to make different selectors inherit declarations that are common to all of them;
- Control directives: for writing complex code using conditionals and loops

### 27. NPM Packages: Let's Install Sass Locally

```sh
npm install node-sass --save-dev
npm run compile:sass
```

### 29. The Easiest Way of Automatically Reloading a Page on File Changes

```sh
npm install -g live-server
live-server
```

### 36. Building the About Section - Part 2

[HTML Glyphs](https://css-tricks.com/snippets/html/glyphs/)

### 38. Building the Features Section

[Live Sass Compiler Settings](https://ritwickdey.github.io/vscode-live-sass-compiler/docs/settings.html)

Using Live Sass Compiler extension instead of node-sass which does not watch sometimes.

### 41. Building the Tours Section - Part 3

```css
/* Position Horizontally Vertically Center */
center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

</details>

---
