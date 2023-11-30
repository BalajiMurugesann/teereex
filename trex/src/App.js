import "./App.css";

import ShopApp from "./components/ShopApp/ShopApp";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <ShopApp />
    </SnackbarProvider>
  );
}
export default App;
