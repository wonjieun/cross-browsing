'use client'
import { useEffect, useRef } from "react";

export default function FixedBottom() {
  const vh = useRef(0);

  useEffect(() => {
    const setVh = () => {
      vh.current = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh.current}px`);
    }

    window.addEventListener('resize', setVh);
    setVh();

    return () => window.removeEventListener('resize', setVh);
  }, [])

  return (
    <main className="page-container flex h-screen flex-col border" style={{
      height: "calc(var(--vh, 1vh) * 100)"
    }}>
      <article className="page-body-container overflow-y-scroll">
        Body Top
        <section className="page-body min-h-[2000px]">
          Body Middle
        </section>
        Body Bottom
      </article>

      <footer className="page-footer w-full px-4 py-2 border">
        Fixed Bottom
      </footer>
    </main>
  )
}
