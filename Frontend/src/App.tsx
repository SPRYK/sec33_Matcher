import React from "react";
import { NavBar, ComponentList } from "./components"
import { Register } from "./pages"
import "./index.scss";

const App: React.FC = () => {
  return (
    <div>
      <Register/>
      {/* <NavBar isLogin = {true} username = 'John Doe'/>
      {/* <Footer/> */}
      {/* <ComponentList/> */}
    </div>
  );
};

export default App;
