import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Hello from './components/part1/Hello';
import Part1Route from './components/part1/studio/AppRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>

        <Route index element={<Hello />} />
        <Route path='part1-studio' element={<Part1Route />} />
        
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
