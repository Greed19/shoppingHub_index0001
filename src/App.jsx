import React, { useState,useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import store from './store/store';
import {Provider} from 'react-redux';

// PAGES
import { HomePage,Cartpage,CategoryPage } from './pages';


// COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import styles from './app.module.scss';

function App() {

  return (
    <main className={styles.shopping_hub_page}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />}  />
            <Route path='category/:id' element={<CategoryPage />}  />
            <Route path='cart' element={<Cartpage />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </main>
  );
}

export default App;



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' >

//     </Route>
//   )
// )
