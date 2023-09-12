import './Main.css';
import SectionRight from './SectionRight/SectionRight';
import SectionCenter from './SectionCenter/SectionCenter';
import SectionLeft from './SectionLeft/SectionLeft'
import Header from '../Header/Header';


function Main() {
    return(
      <>
        <Header></Header>
        <main className="main">
          <SectionLeft></SectionLeft>
          <SectionCenter></SectionCenter>
          <SectionRight></SectionRight>
        </main>
      </>
    );
}

export default Main;