---
title: React
excerpt: React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
image: react.png
isFeatured: true
date: '2022-10-27'
---

React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]

React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9]

### Basic usage

The following is a rudimentary example of using React for the web, written in JSX and JavaScript.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';

/** A pure component that displays a message */
const Greeting = () => {
  return (
    <div className="hello-world">
      <h1>Hello, world!</h1>
    </div>
  );
};

/** The main app component */
const App = () => {
  return <Greeting />;
};

/** React is rendered to a root element in the HTML page */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
