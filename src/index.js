import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ElevenProvider } from "./components/Project11/context";
import TwelveProvider from "./components/Project12/context";
import ThirteenProvider from "./components/Project13/context";
import FourteenProvider from "./components/Project14/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ElevenProvider>
    <TwelveProvider>
      <ThirteenProvider>
        <FourteenProvider>
          <App />
        </FourteenProvider>
      </ThirteenProvider>
    </TwelveProvider>
  </ElevenProvider>
  // </React.StrictMode>
);
