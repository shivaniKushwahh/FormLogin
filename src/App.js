import React from "react";
import { CustomisedInputField } from "./CustomisedInputField";

function App() {

  const inputStyle = {
    color: 'black'
  }
  return (
    <>
    <CustomisedInputField type='text' placeholder='inputField' disabled={false} create={true} edit={false} inputStyle={inputStyle} errorMessage={false}/>
    </>
  );
}

export default App;
