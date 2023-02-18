import Link from "next/link"

export default function Menu() {
  return (
    <>
      <div>
        <Link href="/">home</Link> |{" "}
        <Link href="/list1">list1 ( No SSR ) </Link> |{" "}
        <Link href="/list2">list2 ( SSR ) </Link> |{" "}
      </div>
    </>
  )
}
