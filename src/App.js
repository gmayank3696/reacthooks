import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HooksCounter_Object from './components/HooksCounter_Object';
import HooksCounter_prevVal from './components/HooksCounter_prevVal';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import UseEffectHooks from './components/UseEffectHooks';

function App() {
  return (
    <div className="App">
      <div>Class based Increament Counter</div>
      <ClassCounter /><br />
      <br/>
      <div>Hooks based Increament Counter</div>
      <HookCounter /><br/>
      <br />
      <div>Hooks based Increament/Decreament Counter</div>
      <HooksCounter_prevVal/>
      <br />
      <div>Hooks based Object State Impl</div>
      <HooksCounter_Object/>
      <br />
      <div>Effect Hooks Impl</div>
      <UseEffectHooks/>
      <br />
      {/* <div>Effect Hooks New Impl</div>
      <MouseContainer/>
      <br /> */}
      <div>Effect Hooks New Impl with Incorrect Dependency</div>
      <IntervalHookCounter />
      <br />
    </div>
  );
}

export default App;
