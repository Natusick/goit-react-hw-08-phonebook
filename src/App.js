import { lazy, Suspense } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { Layout } from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.js"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage.js"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.js"));
const PhoneBook = lazy(() => import("./pages/PhoneBook/PhoneBook.js"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <PhoneBook />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
