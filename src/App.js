import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./Layout";

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
