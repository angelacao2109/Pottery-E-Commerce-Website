import './Header.css';


function Header (){
return (
    <>
   <header>
  <h1> Pottery By Angela</h1>
  <nav>
    <ul class="nav-list">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Account</a></li>
      <li class="img-li" ><img src="/search-icon.png" /></li>
      <li class="img-li" ><img src="/shopping-cart.png" /></li>
    </ul>
  </nav>
</header>
    <hr />
    </>
    
);
}

export default Header;