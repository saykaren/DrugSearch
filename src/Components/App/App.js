import "./../Styling/App.scss";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Footer from "./Footer";
import Main from "./Main";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
};

export default App;
