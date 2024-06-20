import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";
import { PlayerRedux } from "./pages/player-redux";
import { PlayerZustand } from "./pages/player-zustand";

export function App() {
  return (
    // <ReduxProvider store={store}>
    //   <Player />
    // </ReduxProvider>

    <PlayerZustand />
  )
}
