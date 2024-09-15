import React from 'react'

function CategoryChip({ category, isChosen, onClick }) {
    const { name } = category
    return (
        <div
        onClick={onClick}
            className={` ${isChosen ? 'bg-amber-200 text-white' : "bg-white text-black"} p-2 px-4 cursor-pointer font-serif hover:bg-cyan-400 border border-lime-300 rounded-md`}>

            <h1>{name}</h1>

        </div>
    )
}

export default CategoryChip;