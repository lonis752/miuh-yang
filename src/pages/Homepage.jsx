import { Content } from "../components/Content";
import { SideMenu } from "../components/SideMenu";

function Homepage() {
  return (
    <>
      <div className="flex w-screen justify-around">
        <SideMenu />
        <Content />
      </div>
    </>
  );
}

export default Homepage;