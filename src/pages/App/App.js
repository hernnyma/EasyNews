
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom'
import './App.css';
import UserArticlesPage from '../UserArticlesPage/UserArticlesPage';
import ArticlesPage from '../ArticlesPage/ArticlesPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
    { user ?
    <>
      <NavBar/>
      <Routes>
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="/articles/user" element={<UserArticlesPage/>}/>
      </Routes>
    </>
      :
      <AuthPage />
    }
  </main>
  );
}
