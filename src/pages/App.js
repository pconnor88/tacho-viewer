import './App.css';
import { Navbar, NavbarDivider, NavbarGroup, Button, Alignment } from "@blueprintjs/core";

function App() {
  return (
    <div className="App">

      <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>Tacho Viewer</Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
              <Button className="bp3-minimal" icon="menu" />
          </Navbar.Group>
      </Navbar>

      <header className="App-header">
        
        <p>
          Homepage
        </p>
        
      </header>
    </div>
  );
}

export default App;
