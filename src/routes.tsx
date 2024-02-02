import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'
import { CompleteOrder } from './pages/completeOrder'
import { DefaultLayout } from './layouts/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
      </Route>
    </Routes>
  )
}
