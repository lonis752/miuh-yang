import "./App.css";
import { SideMenu } from "./components/SideMenu";
import { Content } from "./components/Content";
import { NavbarMobile } from "./components/NavbarMobile";

function App() {
  return (
    <>
      <NavbarMobile />
      <div className="flex">
        <SideMenu />
        <Content />
      </div>
    </>
  );
}

export default App;
