
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Main/Main'
import Achievments from "./Achievments/Achievments";


function App() {
    return(
        <div className="container">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Main/>}></Route>
                    <Route exact path="/achievments" element={<Achievments/>}/>
                </Routes>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;