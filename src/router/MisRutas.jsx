import { Navigate, Route, Routes } from 'react-router-dom';
import { MiPortfolio } from '../pages/MiPortfolio';


export const MisRutas = () => {
  return (

    <Routes>
      {/* <Route path='/' element={ <MiPortfolio /> } /> */}
      <Route path='/presentacion' element={ <MiPortfolio /> } />
      <Route path='/*' element={ <Navigate to='/presentacion' /> } />
    </Routes>
  )
}
