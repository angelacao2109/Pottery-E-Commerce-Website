import './Footer.css';

function Footer() {
    return (
        <>
       
        <footer>
        <hr />
        <div class="combo-div">
<h3>Stay informed about our newest collections and updates!</h3>




<ul class="footer-link">
<li>EMAIL: INFO@POTTERYBYANGELA.COM </li>
    <li>SHIPPING & RETURNS</li>
    <li>FAQ</li>
    <li>CONTACT</li>
</ul>
</div>

<div class="input-container">
<input type="email" id="email"  placeholder="EMAIL ADDRESS "pattern=".+@example\.com" size="30" required  />
<button type="submit">
    <img src="arrow-circle.png" alt="Submit" />
    </button>
</div>

<p class="copyright"> &copy; {new Date().getFullYear()} Angela Cao</p>

</footer>
</>
    );
}export default Footer