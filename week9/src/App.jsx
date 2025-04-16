import './App.css'
import CounterState from './components/CounterState'
import CounterReducer from './components/CounterReducer'
import CounterRedux from './components/CounterRedux'
import CounterStore from './app/CounterStore'
import { Provider } from 'react-redux'
import todoStore from './app/TodoStore'
import TodoRedux from './components/TodoRedux'

function App() {
  return (
    <div className="app-container h-screen">
      <CounterState />
      <CounterReducer />
      <Provider store={CounterStore}>
        <CounterRedux />
      </Provider>
      <Provider store={todoStore}>
        <TodoRedux />
      </Provider>

    </div>
  )
}

export default App
