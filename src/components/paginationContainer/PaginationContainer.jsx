import React, { useState } from 'react'
import HomePagination from '../homePagination/HomePagination'

export default function PaginationContainer() {
    const [line , setLine] = useState(false)

    const paginationActive =  () => {
            setLine(!line)
    }
  return (
    <section className='homePagination'>
        <div className="pagination">
            <ul>
                <HomePagination num={"01"} line={line} paginationActive={paginationActive}></HomePagination>
                <HomePagination num={"02"} line={line} paginationActive={paginationActive}></HomePagination>
                <HomePagination num={"03"} line={line} paginationActive={paginationActive}></HomePagination>
            </ul>
        </div>
    </section>
  )
}
