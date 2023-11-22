import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  let [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton: Tabs) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.id} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === Tabs.COMPONENTS}
              onSelect={() => handleSelect(Tabs.COMPONENTS)}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === Tabs.JSX}
              onSelect={() => handleSelect(Tabs.JSX)}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === Tabs.PROPS}
              onSelect={() => handleSelect(Tabs.PROPS)}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === Tabs.STATE}
              onSelect={() => handleSelect(Tabs.STATE)}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
export enum Tabs {
  COMPONENTS = "components",
  JSX = "jsx",
  PROPS = "props",
  STATE = "state",
}
