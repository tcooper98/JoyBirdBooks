export default function NavBar() {
    return <nav className="nav">
        {/* Homepage logo/link */} 
         <a href="/" className="title">Joybirds</a>

         <ul>
            <li>
                <a href="/products">PRODUCTS</a>
            </li>
            <li>
                <a href="/donate">DONATE</a>
            </li>
            <li>
                <a href="/community">COMMUNITY</a>
            </li>
            <li>
                <a href="/connected">CONNECTED</a>
            </li>
            
         </ul>

        

    </nav>
}
