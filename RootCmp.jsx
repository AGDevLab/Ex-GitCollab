const { Routes, Route } = ReactRouterDOM
const { useEffect } = React

import { Home } from './pages/Home.jsx'
import { ContactIndex } from './cmps/contactIndex.jsx'
// import { TodoIndex } from "./pages/TodoIndex.jsx"
// import { TodoDetails } from "./pages/TodoDetails.jsx"

export function RootCmp() {
  return (
    <section className='app main-layout'>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' component={ContactIndex} />{' '}
          {/* Add route for ContactIndex */}
          {/* <Route path="/todo/:todoId" element={<TodoDetails />} /> */}
          {/* <Route path="/todo" element={<TodoIndex />} /> */}
        </Routes>
      </main>
    </section>
  )
}
