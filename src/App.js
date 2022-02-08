import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllBlogPosts from './components/AllBlogPosts/AllBlogPosts';
import BlogPosts from './components/BlogPosts/BlogPosts';
import SingleBlogPost from './components/SingleBlogPost/SingleBlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogPosts />} />
        <Route path='/singleblogpost/:id' element={<SingleBlogPost />} />

        <Route path='/allblogposts' element={<AllBlogPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
