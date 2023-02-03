import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts'
import { Home, EnterData, ViewTable } from '../pages'

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/enter-data" element={<EnterData />} />
        <Route path="/view-table" element={<ViewTable />} />
      </Route>
    </Routes>
  )
}

export default Router
