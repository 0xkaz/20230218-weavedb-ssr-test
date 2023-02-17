import { useEffect, useState } from "react"
import { Buffer } from "buffer"
import SDK from "weavedb-node-client"
import Link from "next/link"

import { contractTxId, rpc } from "../config"
export async function getServerSideProps() {
  let db = new SDK({
    contractTxId: contractTxId,
    rpc: rpc,
  })

  const list = await db.cget("Questions", 100)

  return {
    props: {
      list: list,
    },
  }
}
const ListPage2 = data => {
  useEffect(() => {
    window.Buffer = Buffer
    // console.log("data: ", data)
  }, [])

  return (
    <div>
      <ul>
        <>
          {data.list.map((item, i) => {
            return (
              <>
                <li>
                  <Link href={`/item/${item.id}`}>
                    {i}:{item.id}: {item.data.title}
                  </Link>
                </li>
              </>
            )
          })}
        </>
      </ul>
    </div>
  )
}

export default ListPage2
