export default function DetectOSK() {
  return (
    <main className="page-container flex flex-col">
      <header className="page-header-container">Fixed Header</header>

      <article className="page-body-container">
        <section className="page-body">Body</section>
      </article>

      <footer className="page-footer">
        Fixed Bottom with input
        <input type="text" />
      </footer>
    </main>
  )
}
