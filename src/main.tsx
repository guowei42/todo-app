import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import { Provider } from "react-redux";
import { store } from "./store.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoContent from "./features/TodoContent/index.tsx";
import Home from "./features/home/index.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "project",
                element: <TodoContent />
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
