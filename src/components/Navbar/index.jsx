import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css';
import itemList from '../../itemList/itemList';
import CartWidget from '../CartWidget/index.jsx';
let actFilter = [];

const itemCount = 0;
itemList.forEach(producto => {
  if (!actFilter.includes(producto.actividad)) {
    actFilter.push(producto.actividad);
  }
});

const Navbar = () => {
    return (
      <nav className={`navbar navbar-expand-lg sticky-top ${styles.navBar}`}>
        <div className="container-fluid">
          <img className="logo" src= "/Logo.svg" alt="Logo de Ropa técnica de Montaña"/>
          <h1>Mountain Gear E-shop</h1>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-2 align-items-end">
          {actFilter.map(actividad =>(
                    <li className='nav-item'>
                      <a href="#">{actividad}</a>
                    </li>
                ))
                }
            <li className="nav-item">
              <CartWidget itemCount={itemCount} />
            </li>
          </ul>
        </div>     
      </nav>
    );
  }
  
  export default Navbar;