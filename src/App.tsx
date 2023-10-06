import { RouterProvider } from "react-router-dom"
import MainRoute from "./Router/mainRoute"
import { Provider } from "react-redux"
import { store } from "./global/store"
const App = () => {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={MainRoute}/>
      </Provider>
    </div>
  )
}

export default App