import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";

function App() {
  function handleSelect(selectedButton: Tabs) {
    alert(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                key={concept.id}
                title={concept.title}
                description={concept.description}
                img={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect(Tabs.COMPONENTS)}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect(Tabs.JSX)}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect(Tabs.PROPS)}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleSelect(Tabs.STATE)}>
              State
            </TabButton>
          </menu>
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
