import { useEffect, useState } from "react"
import { Buffer } from "buffer"
import SDK from "weavedb-node-client"
import Link from "next/link"
import { isNil } from "ramda"

import { contractTxId, rpc } from "../config"
export async function getServerSideProps() {
  let db = new SDK({
    contractTxId: contractTxId,
    rpc: rpc,
  })

  const list = await db.cget("Questions", 100)
  console.log("list:", list)

  return {
    props: {
      list: list,
    },
  }
}
const ListPage2 = data => {
  useEffect(() => {
    window.Buffer = Buffer
    console.log("data: ", data)
  }, [])

  return (
    <div>
      <ul>
        <>
          {data.list.length == 0 ? (
            <>
              <li>no items</li>
            </>
          ) : (
            <>
              {data.list.map((item, i) => {
                if (isNil(item) || isNil(item.data) || isNil(item.id))
                  return <></>
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
          )}
        </>
      </ul>
    </div>
  )
}

export default ListPage2
