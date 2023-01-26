
import { useState } from 'react';
import { Routes,Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import './App.css';
import UserArticlesPage from '../UserArticlesPage/UserArticlesPage';
import ArticlesPage from '../ArticlesPage/ArticlesPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
    { user ?
    <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="/articles/user" element={<UserArticlesPage/>}/>
      </Routes>
    </>
      :
      <AuthPage setUser={setUser}/>
    }
  </main>
  );
}
