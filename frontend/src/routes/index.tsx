import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'views/Home';
import Components from 'views/Components';
import LoginFormAnimated  from 'views/LoginFormAnimated';
import LoginFormAnimated001 from 'components/LoginFormAnimated/Example001';
import PageNotFound from 'views/PageNotFound';
import PageNotFound001  from 'components/PageNotFound/Example001';
import Utilities from 'views/Utilities';
import EyeIcon from 'components/Utilities/EyeIcon';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/components' element={<Components />} />
            <Route path='/components/LoginFormAnimated' element={<LoginFormAnimated />} />
              <Route path='/components/loginFormAnimated/001' element={<LoginFormAnimated001 />} />
            <Route path='/components/pageNotFound' element={<PageNotFound />} />
              <Route path='/components/pageNotFound/001' element={<PageNotFound001 />} />
            <Route path='/components/utilities' element={<Utilities />} />
            <Route path='/components/utilities/eyeIcon' element={<EyeIcon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;