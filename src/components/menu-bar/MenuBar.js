import { Navbar, NavbarGroup, Button, Alignment } from "@blueprintjs/core";
import './MenuBar.css';

export function MenuBar() {
  return (
    <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading className="app-title">Tacho Viewer</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
            <Button className="bp3-minimal" icon="menu" />
        </Navbar.Group>
    </Navbar>
  );
}
