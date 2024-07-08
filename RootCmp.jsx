const { Routes, Route } = ReactRouterDOM
const { useEffect } = React

import { Home } from './pages/Home.jsx'
// import { TodoIndex } from "./pages/TodoIndex.jsx"
// import { TodoDetails } from "./pages/TodoDetails.jsx"

export function RootCmp() {
  // useEffect(() => {
  //     loadTodos()
  //         .catch(() => {
  //             showErrorMsg('Could not load todos')
  //         })
  // }, [])
  return (
    <section className='app main-layout'>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />

          {/* <Route path="/todo/:todoId" element={<TodoDetails />} /> */}

          {/* <Route path="/todo" element={<TodoIndex />} /> */}
        </Routes>
      </main>
    </section>
  )
}
