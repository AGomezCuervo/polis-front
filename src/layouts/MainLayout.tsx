import type { ParentComponent } from 'solid-js';
import NavBar from "@/components/NavBar/NavBar"
import TopBar from "@/components/TopBar/TopBar"

const MainLayout: ParentComponent = (props) => {
  return (
    <>
        <TopBar/>
        <div>{props.children}</div>
        <NavBar />
    </>
  );
};

export default MainLayout;
