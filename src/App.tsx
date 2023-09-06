import AgentArea from './components/Agent/AgentArea';
import { Calendar } from './components/index';

function App() {
  return (
    <div className="App flex bg-black h-screen">
      <Calendar />
      <AgentArea/>
    </div>
  );
}

export default App;
