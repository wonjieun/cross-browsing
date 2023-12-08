import Link from "next/link"

export default function Mobile() {
  return (
    <main className="base-main">
      <header className="base-header">Safari iOS</header>

      <Link href="/safari/mobile/fixed-bottom" className="base-link">Fixed Bottom</Link>
      <Link href="/safari/mobile/detect-osk" className="base-link">Detect OSK</Link>
    </main>
  )
}
