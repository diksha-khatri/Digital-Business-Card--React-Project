import '../index.css';
import Header from './Header';
import MainComponent from './MainComponent';
import Footer from './Footer';


export default function Card(){
  return(
    <div className='mainContainer'>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  )
}