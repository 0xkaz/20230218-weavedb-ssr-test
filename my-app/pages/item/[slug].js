import SDK from "weavedb-node-client"
import { useEffect } from "react"
import { contractTxId, rpc } from "../../config"

export async function getServerSideProps({ query }) {
  let db = new SDK({
    contractTxId: contractTxId,
    rpc: rpc,
  })

  console.log("query:", query.slug)

  const item = await db.cget("Questions", query.slug)

  return {
    props: {
      item: item,
    },
  }
}

export default function Question({ item }) {
  useEffect(() => {
    console.log("item:", item)
  }, [])

  return (
    <>
      <div>{item.id}</div>
      <div>{item.data.title}</div>
    </>
  )
}
