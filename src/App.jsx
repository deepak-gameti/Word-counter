import Application from "./components/Application";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] dark:bg-slate-800"></div>
      </div>

      <div>
        <Navbar />
        <Application/>
      </div>
    </div>
  );
}

export default App;



