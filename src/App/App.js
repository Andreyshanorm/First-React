import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Achievments from "./Achievments/Achievments";

function App() {
    return(
        <div className="container">
            <Router>
                    <Header></Header>
                    <Main></Main>
                    <Footer></Footer>
                <Routes>
                    <Route exact path="/achievments" element={<Achievments/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;