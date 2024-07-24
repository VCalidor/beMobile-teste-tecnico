import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Navbar } from 'react-bootstrap';
import logoHeader from '../assets/logoHeader.png';

export const Header = () => {

  return (
    <Navbar sticky="top" bg='white' style={{padding: "13px"}} className='shadow -3-strong mb-5'>
      <Image src={logoHeader} height={"34"} style={{marginLeft: "20px"}}></Image>
    </Navbar> 
  )
}