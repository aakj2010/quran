import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './MediaQuery.css';
import Login from '../src/components/pages/Login'
import Register from '../src/components/pages/Register'
import Portal from '../src/components/layouts/Portal'
import Chapter from './components/quran/Chapter';
import Chapters from './components/quran/Chapters';
import Keywords from './components/quran/Keywords';
import BookMarks from './components/quran/BookMarks';
import Notes from './components/quran/Notes';
import Author from './components/about Author/Author';
import AboutTranslation from './components/about Translation/AboutTranslation';
import Glossary from './components/glossary/Glossary';
import Unique from './components/unique/Unique';
import Preface from './components/preface/Preface';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Portal />}>
            <Route path='' element={<Chapter />}>
              <Route path='' element={<Chapters />} />
              <Route path='keywords' element={<Keywords />} />
              <Route path='bookmarks' element={<BookMarks />} />
              <Route path='notes' element={<Notes />} />
            </Route>
            <Route path='preface' element={<Preface />} />
            <Route path='author' element={<Author />} />
            <Route path='translation' element={<AboutTranslation />} />
            <Route path='glossary' element={<Glossary />} />
            <Route path='unique' element={<Unique />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
