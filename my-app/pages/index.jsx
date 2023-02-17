import { useEffect } from "react"
import Link from "next/link"

export default function Home() {
  useEffect(() => {
    console.log("test")
  }, [])
  return (
    <>
      <main>
        <div>home</div>
      </main>
    </>
  )
}
