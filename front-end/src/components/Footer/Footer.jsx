import './Footer.css';

function Footer() {
    return (
        <footer>
<h3>Sign Up for Updates</h3>

<div class="input-container">
<input type="email" id="email"  placeholder="EMAIL ADDRESS "pattern=".+@example\.com" size="30" required  />
<button type="submit">
    <img src="arrow-circle.png" alt="Submit" />
    </button>
</div>

<p> &copy; {new Date().getFullYear()} Angela Cao</p>

<ul>
    <li>SHIPPING & RETURNS</li>
    <li>FAQ</li>
    <li>CONTACT</li>
    <li>EMAIL: INFO@POTTERYBYANGELA.COM </li>
</ul>
</footer>
    );
}export default Footer