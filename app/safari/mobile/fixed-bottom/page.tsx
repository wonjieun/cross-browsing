'use client'
import { useEffect, useRef } from "react";

export default function FixedBottom() {
  const vh = useRef(0);

  useEffect(() => {
    const setVh = () => {
      vh.current = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('resize', setVh);
    setVh();

    return () => window.removeEventListener('resize', setVh);
  }, [])

  return (
    <main className="page-container flex flex-col" style={{
      height: "calc(var(--vh, 1vh) * 100)"
    }}>
      <article className="page-body-container">
        Body Top
        <section className="page-body">
          Body Middle
        </section>
        Body Bottom
      </article>

      <footer className="page-footer">
        Fixed Bottom
      </footer>
    </main>
  )
}
