import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'views/Home';
import LoginFormAnimated001 from 'components/LoginFormAnimated/Example001';
import Example001  from 'components/PageNotFound/Example001';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components/loginFormAnimated/001' element={<LoginFormAnimated001 />} />
        <Route path='/components/pageNotFound/001' element={<Example001 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;