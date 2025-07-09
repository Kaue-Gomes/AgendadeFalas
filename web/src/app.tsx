import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Theme } from "./components/ui/theme";
import { CreateRoom } from "./pages/create-room.tsx";
import { Room } from "./pages/room";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Theme />
        <BrowserRouter>
          <Routes>
            <Route element={<CreateRoom />} index />
            <Route element={<Room />} path="/room/:roomId" />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}
