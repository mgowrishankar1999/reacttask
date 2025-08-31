import './App.css';
import Home from './components/home';
import ActiveQrcode from './components/activeQrcode';
import Profile from './components/profile'
import History from './components/history';
import Popup from './components/popup';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// mobileimport 
import Mobilebank from "./components/bankmobile"

function App() {
  // Create the router configuration
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/active-qrcode" element={<ActiveQrcode />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/popup" element={<Popup />} />

        {/* mobile routes */}
        <Route path="/bank" element={<Mobilebank />} />


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