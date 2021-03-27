import React, { useState } from "react";
import s from "./Paginator.module.css";
import cn from "classnames"

const Paginator = ({
  currentPage,
  onPageChanged,
  totalItemCount,
  pageSize,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.paginator}>
      <h1>Users</h1>
      {portionNumber > 1 && 
        <button className={s.btn_paginator}
          onClick={() => {
            setPortionNumber(portionNumber - 1)}}
        >
          prev
        </button>
      }

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p<= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <button
              className={cn(
                { [s.selectedPage]: currentPage === p },
                s.selectedPage
              )}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </button>
          );
        })}
        {portionCount > portionNumber && 
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </button>
      }
    </div>
  );
};

export default Paginator;
