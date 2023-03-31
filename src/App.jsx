import "./App.css";

// @components
import { BackgroundVideo, Header } from "./components";

// @pages
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider enableSystem={false} disableTransitionOnChange>
      <SiteContextProvider data={{ ...data?.site }}> */}
      <BackgroundVideo blur={1} children={[<Header />]} />
      <Home />
      {/* </SiteContextProvider>
    </ThemeProvider> */}
    </div>
  );
}

export default App;
