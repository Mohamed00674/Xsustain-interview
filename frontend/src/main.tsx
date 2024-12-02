import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ItemProvider } from './context/ItemContext.tsx';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ItemProvider>
          <App />
        </ItemProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
