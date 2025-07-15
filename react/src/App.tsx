import {ThemeProvider} from "./components/theme-provider";
import {OverviewPage} from "@/domain/pages/overview/OverviewPage.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ModeToggle/>
            <OverviewPage/>
        </ThemeProvider>
    );
}

export default App;
