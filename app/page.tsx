import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Main Page

      <Link href="/safari/mobile" className="text-white">Safari iOS</Link>
    </main>
  )
}
