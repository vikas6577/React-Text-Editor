// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtil-DarkMode";
      setInterval(() => {
        document.title = "TextUtil-Home";
      }, 2000);
      // setInterval(() => {
      //   document.title='TextUtil is amazing';
      // }, 500);
      // if you will use 2 set intervals simultaneously than it will change infinitely and will be converted to one another
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtil-LightMode";
      setInterval(() => {
        document.title = "TextUtil-Home";
      }, 2000);
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          abouttext="About"
          mode={Mode}
          toggleMode={toggleMode}
        />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>

            {/* </Route> */}
          {/* </Switch> */}
          {/* <About /> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
