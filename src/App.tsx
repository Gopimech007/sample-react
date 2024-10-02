import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
 
function App() {
  const[isAlertVisible, setIsAlertVisible] = useState(false);
  return <div>
    { isAlertVisible && <Alert onClose={() => setIsAlertVisible(false)}>My Alert</Alert>}
    <Button onClick={() => setIsAlertVisible(true)}>My Button</Button>
   </div>
}

export default App;