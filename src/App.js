import { useState } from "react";
import Header from "./components/Header";
function App() {
  const [isDropdownView, setDropDownView] = useState(false);
  return (
    <>
      <Header
        isDropdownView={isDropdownView}
        setDropDownView={setDropDownView}
      ></Header>
    </>
  );
}

export default App;
