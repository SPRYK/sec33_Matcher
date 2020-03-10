import React from "react";
import { BodySignIn , Register} from "./pages";
import "./App.css";
import { NavBar, ComponentList } from "./components"
import "./index.scss";
import EditProfile from "./pages/editProfile";


const App: React.FC = () => {
    return (
        <div>
            <NavBar isLogin={false} username="John Doe" />
            <EditProfile />
        </div>
    );
};

export default App;
