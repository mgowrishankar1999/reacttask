import './App.css';
import Home from './components/home';
import ActiveQrcode from './components/activeQrcode';
import Profile from './components/profile'
import History from './components/history';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  // Create the router configuration
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/active-qrcode" element={<ActiveQrcode />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />

      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;