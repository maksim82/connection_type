import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import AuthProvider from './hoc/AuthProvider';

import Layout from './components/layout/Layout';
import Registration from './components/autorization/Registration';
import Login from './components/autorization/Login';
import Home from './components/home/Home';
import StudentProject from './components/studentProject/StudentProject';
import DownloadProjects from './components/downloadProjects/DownloadProjects';
import NotFound from './components/noFound/NotFound';

function App() {
  // useEffect(() => {
  //     if (localStorage.getItem('token')) {

  //     } else {

  //     }
  // });
  
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/:id' element={<StudentProject />} />
              <Route path='/create' element={<DownloadProjects />} />
              <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
