
import { Feed } from "./pages/feed/Feed";
import { Post } from "./pages/post/Post";
import { Router } from "./routes/Router";
import {Login} from './pages/login/Login'
import {Cadastrar} from './pages/cadastrar/Cadastrar'


const App = () => {
  return (
    <div>
      {/* <Feed/>
      <Login/>
      <Cadastrar/>
      <Post/> */}
      <Router/>
    </div>
  );
}

export default App;
