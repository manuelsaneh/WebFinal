import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store/store";
import Navbar from "./organisms/Navbar/Navbar";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoutes>
                  <Navbar />
                  <route.element />
                </ProtectedRoutes>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
