import Link from "next/link"

export const Header = () => {
    return (
        <header>
          <nav>
            <ul>
              <Link rel="stylesheet" href="/"><li>Home</li></Link> 
              <Link rel="stylesheet" href="/store"><li>Store</li></Link>
            </ul>
          </nav>
        </header>
    )
}
