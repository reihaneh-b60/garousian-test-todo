'use client'

import FilterButton from "@/components/common/filterButton"
import { changeFilter, changeLoadingStatus } from "@/redux/reducers/todoList/slice"
import { IRootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"

const filterMods: {
    type: "any" | "done" | "not-done",
    text: string
}[] = [
        {
            type: "any",
            text: "همه"
        },
        {
            type: "done",
            text: "انجام‌شده"
        },
        {
            type: "not-done",
            text: "انجام‌نشده"
        }
    ]

const FilterBox = () => {

    const dispatch = useDispatch()

    const { filters } = useSelector((state: IRootState) => state.todoList)

    const handleChangeFilter = (type: "any" | "done" | "not-done") => {
        dispatch(changeFilter(type))
        setTimeout(() => {
            dispatch(changeLoadingStatus())
        }, 250);
    }

    return (
        <div className="w-full flex items-center justify-between gap-[12px]">
            {filterMods.map(f => (
                <FilterButton
                    key={f.type}
                    isActive={f.type === filters}
                    className="w-full"
                    onClick={() => handleChangeFilter(f.type)}
                >
                    {f.text}
                </FilterButton>
            ))}
        </div>
    )
}

export default FilterBox