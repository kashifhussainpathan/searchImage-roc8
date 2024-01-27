import { Suspense } from "react";
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import { FallbackLoader } from "@components/loaders";
import { useImagesContext } from "@context/ImagesContext";
import Modal from "@components/Modal";
import { SignIn, SignUp } from "@auth";

function App() {
  const { showAuthForm, handleToggleAuthForm } = useImagesContext();

  return (
    <main className=" text-white">
      <Suspense fallback={<FallbackLoader />}>
        <Outlet />
        {showAuthForm === "signin" && (
          <Modal onClose={() => handleToggleAuthForm("")} auth>
            <SignIn />
          </Modal>
        )}
        {showAuthForm === "signup" && (
          <Modal onClose={() => handleToggleAuthForm("")} auth>
            <SignUp />
          </Modal>
        )}
      </Suspense>
    </main>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="results" element={<SearchResults />} />
    </Route>
  )
);

export default App;
