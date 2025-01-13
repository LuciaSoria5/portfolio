import { Navigate, Route, Routes } from 'react-router-dom';
import { MiPortfolio } from '../pages/MiPortfolio';


export const MisRutas = () => {
  return (
    <Routes>
      <Route exact path="/LuciaSoria" element={ <MiPortfolio /> } />
      <Route path='/*' element={ <Navigate to='/LuciaSoria' /> } />
    </Routes>
  )
}
