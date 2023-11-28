import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Login from './page/Login';
import NotFound from './page/NotFound';
import Product from './page/Product';

import PracHome from './page/PracHome';
import PracAbout from './page/PracAbout';
import PracContact from './page/PracContact';
import PracSearch from './page/PracSearch';
import PracMypage from './page/PracMypage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/login' element={<Login />} />
        {/* 파라미터를 하나만 전달하는 경우 */}
        {/* <Route exact path='/product/:productId' element={<Product />} /> */}
        {/* 파라미터를 여러 개 전달하는 경우 */}
        {/* <Route exact path='/product/:id/:name' element={<Product />} /> */}
        {/* 퀴리스트링으로 값을 전달하는 경우 */}
        <Route exact path='/product' element={<Product />} />

        {/* React Router 실습 */}
        <Route exact path='/prac' element={<PracHome />} />
        <Route exact path='/prac/about' element={<PracAbout />} />
        <Route exact path='/prac/contact' element={<PracContact />} />
        <Route exact path='/prac/search' element={<PracSearch />} />
        <Route exact path='/prac/mypage/:userId' element={<PracMypage />} />

        <Route exact path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// RouterProvider 컴포넌트 사용 방법
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '경로',
//     element: <컴포넌트 />,
//   },
//   {
//     path: '경로',
//     element: <컴포넌트 />,
//   },
//   // 더 많은 라우트 등록 가능
// ]);

// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;
