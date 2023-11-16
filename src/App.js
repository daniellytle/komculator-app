import Container from "./Container";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Container />
    </QueryClientProvider>
  );
}

export default App;
