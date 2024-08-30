import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
// import Greeting from "./components/Greeting.jsx";
// import SocialLinks from "./components/SocialLinks";

function App() {
  // return <div className="app">Hello Atlas</div>;
  return <div className="App">
    <Header />
    <Section title="What is React?">
        React is a JavaScript library by Facebook for building dynamic UIs, particularly for single-page applications. It uses a component-based structure, enabling the creation of complex UIs from small, reusable components. React's "learn once, write anywhere" philosophy makes it versatile for web and mobile apps, and its virtual DOM ensures efficient updates and smooth performance.
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Rich Ecosystem: Offers a vast ecosystem of tools, libraries, and extensions to enhance and streamline development.</li>
          <li>React Native Compatibility: Allows developers to create native mobile apps using the same React principles, saving time and effort across platforms.</li>
          <li>Virtual DOM Optimization: Ensures fast and efficient rendering by only updating parts of the DOM that have changed.</li>
          <li>Component Reusability: Enables the creation of reusable components, improving code maintainability and scalability.</li>
          <li>Unidirectional Data Flow: Facilitates better data management and debugging through predictable state changes.</li>
        </ul>
      </Section>
  </div>
}

export default App;

