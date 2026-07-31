
import './App.css'
import Counter from './components/Counter'
import UseMemoAndCallbackHook from './components/use-memo-and-context-hook'
import UseEffect from './components/use_effect_hook'
import UseReducerHook from './components/use_reducer_hook'
import UseStateHook from './components/use_state_hook'

function App() {

  return (
    <div>
      <h2>Hooks Interview Questions in React</h2>
      {/* <UseStateHook /> */}
      {/* <UseEffect /> */}
      {/* <Counter /> */}
      {/* <UseReducerHook /> */}
      <UseMemoAndCallbackHook />
    </div>
  )
}

export default App
