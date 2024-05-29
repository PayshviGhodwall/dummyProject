import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const Feed = lazy(() => import("./components/feed"));
const Profile = lazy(() => import("./components/profile"));
const Chats = lazy(() => import("./components/chat"));
const ChatDetails = lazy(() => import("./components/chatDetails"));

function App() {
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Suspense fallback={<div></div>}>
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chat" element={<Chats />} />
                <Route path="/chat-details" element={<ChatDetails />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
