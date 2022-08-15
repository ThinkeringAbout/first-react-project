import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import UserContent from './Components/User-content/User-content';
import Music from './Components/Music/Music';
import Messages from './Components/Messages/Messages';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Dialogue from './Components/Dialogue/DIalogue';
import userBd from './Components/userBd';
import { reRenderPage } from './index';
import Friends from './Components/Friends/Friends';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Wrapper">
          <Header />
          <div className="MainWrapper">
            <Navbar />
            <div className="User__content_wrapper">
              <Routes>
                <Route path="/" element={<Navigate to="/id0" />} />
                <Route path="/id0" element={<UserContent name="Anton" city="City" date="31.01.1999" image="images/ava.png"/>}/>
                {userBd.map(item => (
                  <Route path={"/id" + item.userId} element={<UserContent name={item.userName} city={item.userCity} date={item.userDate} image={item.userImgUrl} />}/>
                ))}
                <Route path="music" element={<Music />} />
                <Route path="messages" element={<Messages />}/>
                {userBd.map(item => (
                  <Route 
                  path={"messages/" + item.userId}
                  element={<Dialogue person={item} render={reRenderPage}/>}
                  />
                ))}
                <Route path="friends" element={<Friends userBd={userBd}/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
