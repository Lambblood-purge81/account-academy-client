"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../styles/globals.css";
import "@/styles/style.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

export function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
