import { useEffect, useState } from "react"
import { Buffer } from "buffer"
import SDK from "weavedb-client"
import Link from "next/link"

import { contractTxId, rpc } from "../config"

const ListPage = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  const db = new SDK({
    contractTxId: contractTxId,
    rpc: `https://${rpc}`,
  })

  useEffect(() => {
    window.Buffer = Buffer
    ;(async () => {
      setList(await db.cget("Questions", true))
      setLoading(false)
    })()
  }, [])

  return (
    <div>
      <ul>
        {loading ? (
          <>loading...</>
        ) : (
          <>
            {list.map((item, i) => {
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
      </ul>
    </div>
  )
}

export default ListPage
