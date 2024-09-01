import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
// import Greeting from "./components/Greeting.jsx";
// import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Header />
      <Section title="What is React?">
        React is an open-source JavaScript library developed by Facebook for building dynamic user interfaces, especially for single-page applications. It emphasizes a component-based structure, allowing developers to build complex UIs from small, isolated pieces of code called components. React's core philosophy is "learn once, write anywhere," making it versatile for both web and mobile application development. It also efficiently handles updates and rendering with its virtual DOM, ensuring high performance and a smooth user experience.
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Rich Ecosystem: Provides extensive tools and libraries</li>
          <li>React Native Compatibility: Enables cross-platform mobile app development</li>
          <li>Virtual DOM Optimization: Ensures efficient rendering</li>
          <li>Component Reusability: Improves maintainability and scalability</li>
          <li>Unidirectional Data Flow: Simplifies data management and debugging</li>
        </ul>
      </Section>
      <Section title="Helpful Resources">
        <HelpfulResource
          link="https://reactjs.org/docs/getting-started.html"
          label="Official React Documentation"
        />
        <HelpfulResource
          link="https://egghead.io/courses/the-beginner-s-guide-to-react"
          label="Beginner's Guide to React (Egghead)"
        />
        <HelpfulResource
          link="https://www.freecodecamp.org/news/learn-react-by-building-a-simple-app/"
          label="Learn React by Building a Simple App (FreeCodeCamp)"
        />
      </Section>
    </div>
  );
}

export default App;
