import Link from "next/link"
export function NavBar () {
    return (
        <nav>
            <ul>
                <Link href="/"><li>Home</li></Link>
                <Link href="/"><li>My Favourite Places</li></Link>
                <Link href="/"><li>My Journal</li></Link>
                <Link href="/"><li>Log In</li></Link>
                <Link href="/"><li>Log Out</li></Link>
            </ul>
        </nav>
    )
}