
# Dynamic Island Navbar

A modern, responsive, and dynamic navbar component inspired by the Dynamic Island design. Built with TypeScript and React, this package uses **GSAP** for animations and is easy to integrate into any React project.

---

## Features

- Fully customizable navbar with dynamic animation effects.
- Responsive design with automatic shrinking and expanding.
- Built-in **GSAP** animations for smooth transitions.
- Written in **TypeScript** for type safety and easy integration.

---

## Installation

To install the package, use the following command:

```bash
npm install dynamic-island-navbar
```

---

## Usage

Import the component into your React application:

```tsx
import React from "react";
import { DynamicIslandNavbar } from "dynamic-island-navbar";
import "dynamic-island-navbar/dist/DynamicIslandNavbar.css";

function App() {
  return (
    <div>
      <DynamicIslandNavbar />
      <div style={{ height: "200vh" }}>Scroll to see the animation!</div>
    </div>
  );
}

export default App;
```

---

## Props

The `DynamicIslandNavbar` component currently doesn't take any props but can be customized by editing the CSS file.

---

## CSS Customization

You can override or modify the styles provided in the package by editing the `DynamicIslandNavbar.css` file:

```css
.din-dynamic-island-container {
  background-color: #444; /* Change the background color */
}

.din-link-item {
  color: #fff; /* Change the text color */
}

.din-navbar-icon {
  font-size: 1.5rem; /* Adjust the icon size */
}
```
---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements or report bugs.

---

## Acknowledgments

- Built using [React](https://reactjs.org/) and [GSAP](https://greensock.com/gsap/).
- Inspired by Apple's **Dynamic Island** design.

---

Feel free to tweak this README to suit your project needs! 🚀