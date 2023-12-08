import Link from "next/link"

export default function Home() {
  return (
    <main className="base-main">
      <header className="base-header">Main Page</header>
      
      <Link href="/safari/mobile" className="base-link">Safari iOS</Link>
    </main>
  )
}
