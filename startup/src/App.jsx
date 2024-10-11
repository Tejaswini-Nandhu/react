// const choices= prompt("how you define react? ");
// react component App function
import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Concepts, Content } from './components/data.jsx';
import { TapButton } from './components/TapButton.jsx';
import { EXAMPLES } from './components/Examples.jsx';

// import { Content } from './data.jsx';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();
  function handleOnSelect(selected) {
    setSelectedTopic(selected);
    console.log(selectedTopic);
  }

  let tabContent = <p>Select any button</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Content title="ReactJS" description="ReactJS is a JavaScript library for building user interfaces." />
            <Content title={Concepts[0].title} description={Concepts[0].description} />
            <Content title={Concepts[1].title} description={Concepts[1].description} />
            {/* another way to define components in react */}
            <Content {...Concepts[2]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton isSelected={selectedTopic==="components"} onSelect={() => handleOnSelect("components")} label="Components"></TapButton>
            <TapButton isSelected={selectedTopic==="props"} onSelect={() => handleOnSelect("props")} label="Props"></TapButton>
            <TapButton isSelected={selectedTopic==="jsx"} onSelect={() => handleOnSelect("jsx")} label="JSX"></TapButton>
            <TapButton isSelected={selectedTopic==="state"} onSelect={() => handleOnSelect("state")} label="state"></TapButton>
          </menu>
          {tabContent}
        </section>
      </main>

    </div>
  );
}

export default App;
