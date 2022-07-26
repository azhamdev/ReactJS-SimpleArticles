import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import BlogDetail from './Pages/BlogDetail';

function App() {
  return (
    <div className="App">
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
