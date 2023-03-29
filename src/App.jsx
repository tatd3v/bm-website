import "./App.css";

// @components
import { Header } from "./components";

// @pages
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider enableSystem={false} disableTransitionOnChange>
      <SiteContextProvider data={{ ...data?.site }}> */}
      <Header />
      <Home />

      {/* </SiteContextProvider>
    </ThemeProvider> */}
    </div>
  );
}

export default App;
