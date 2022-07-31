import { Routes, Route } from 'react-router-dom'
import Aaaaa from './pages/aaaaa'
import Bbbbb from './pages/bbbbb'
import Menu from './components/menu'
import Layout from './components/layout'
import './app.css'

function App() {
  return (
    <div className="app">
      <Menu />
      <Layout>
        <Routes>
          <Route index path="/" element={<Aaaaa />} />
          <Route path="/aaaaa" element={<Aaaaa />} />
          <Route path="/bbbbb/:age" element={<Bbbbb />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
