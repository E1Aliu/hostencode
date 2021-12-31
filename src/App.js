import { lazy, Suspense, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import Loading from './components/shared/Loading/Loading';
import ScrollToTop from './ScrollToTop';
import './App.scss';
import Aos from 'aos';
import "aos/dist/aos.css";

import {IntlProvider} from 'react-intl';
import {translate} from './translation/translate';
import {useSelector} from 'react-redux';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(()=> import('./pages/Login/Login'));
const Features = lazy(()=> import('./pages/Features/Features'));


function App() {

  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    Aos.init({
      duration:1250,
      once: true
    })
  }, [])

  return (
    <Router>
   
        <Suspense fallback={<Loading />}>
          <IntlProvider
              locale={language}
              formats={{ number: 'en' }}
              messages={translate[language]}
            >

              <ScrollToTop />
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path='Login' element={<Login/>}/>
                  <Route path='Features' element={<Features/>}/>

                  <Route path="*" element={<Navigate to ="/" />}/>
              </Routes>
          </IntlProvider>
        </Suspense>
    </Router>
  );
}

export default App;
