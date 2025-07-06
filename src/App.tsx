import { RouterProvider } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/User";
import { routes } from "./router/Router";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  );
}

export default App;
