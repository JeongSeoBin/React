import { QueryClient, QueryClientProvider } from "react-query";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Example /> */}
      {/* <Example2 /> */}
      <Example3 />
    </QueryClientProvider>
  );
}

export default App;
