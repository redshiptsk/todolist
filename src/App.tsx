
import { ToDoHeader } from './components/Header/Header'
import List from './components/List/List'
import ToDoForm from './components/ToDoForm/ToDoForm'
import GlobalStyles from './styles/global'


function App() {

  return (
    <>

      <ToDoHeader />
        <ToDoForm />
        <List />
      <GlobalStyles />

    </>
  )
}

export default App

