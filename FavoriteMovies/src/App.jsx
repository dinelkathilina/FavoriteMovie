import { useState } from "react";
import { MovieCard } from "./Components/MovieCard";
import { Header } from "./Components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <button
        onClick={toggleDarkMode}
        className="p-4 bg-blue-500 text-white rounded"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
<Header />     
    </div>
    </>
  );
}

export default App;
