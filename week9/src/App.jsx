import './App.css'
import CounterState from './components/CounterState'
import CounterReducer from './components/CounterReducer'
import CounterRedux from './components/CounterRedux'
import CounterStore from './app/CounterStore'
import { Provider } from 'react-redux'
import todoStore from './app/TodoStore'
import TodoRedux from './components/TodoRedux'

// Import new components and store
import ThemeToggle from './components/ThemeToggle'
import ShoppingCart from './components/ShoppingCart'
import AuthUser from './components/AuthUser'
import combinedStore from './app/CombinedStore'

function App() {
  return (
    <div className="app-container min-h-screen p-6">
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-bold mb-4">Counter Examples</h2>
        <CounterState />
        <CounterReducer />
        <Provider store={CounterStore}>
          <CounterRedux />
        </Provider>
        <Provider store={todoStore}>
          <TodoRedux />
        </Provider>
      </div>

      <Provider store={combinedStore}>
        <div className="space-y-8">
          <ThemeToggle />
          <ShoppingCart />
          <AuthUser />
        </div>
      </Provider>
    </div>
  )
}

export default App
