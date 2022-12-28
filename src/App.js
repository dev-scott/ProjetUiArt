import { HomePage , AboutPage , ErrorPage , SignInPage,LoginPage , ArtistPage, ArtPage } from './pages'
import { Routes , Route } from 'react-router-dom';
import  NavBar  from './Components/NavBar'
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback ={null}>

    <div className="App">
     <NavBar />
     <div className="contain_page">
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="about"element={<AboutPage/>} />
        <Route path = "artist" element ={<ArtistPage/>} />
        <Route path = "art" element = {<ArtPage/>} />
        <Route path = "signin" element = {<SignInPage/>} />
        <Route path = "login" element = {<LoginPage/>} />
        <Route path="*" element={<ErrorPage/>} />


        {/* <Route path="*" element={<ErrorPage/>} /> */}
      
      </Routes>
     </div>
    </div>
    </Suspense>

  );
}

export default App;
