import React, {useState} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {IconButton } from "@mui/material";

type Props = {}

function AdminSearch({ }: Props) {
    const [search, setSearch] = useState("");
    return (
        <label className=" relative flex">
            <SearchIcon className="absolute top-[8px] left-[10px] cursor-pointer h-6 w-6" sx={{color: "#2A5573"}} />
            <input
                className="w-full h-10 pl-10 pr-10 text-[#2A5573]  bg-none bg-[#D1E5F2] text-black outline-none placeholder:text-[#2A5573] rounded focus:"
                placeholder="Книга / Автор"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
                <div className="absolute top-[4px] right-[10px]">
                    <IconButton aria-label="delete" size="small">
                        <CloseIcon
                            className=" cursor-pointer h-6 w-6"
                            onClick={() => setSearch("")}
                        />
                    </IconButton>
                </div>
            )}
            {search && (
                <div className="absolute top-[92%] left-0 w-full  bg-[#D1E5F2] shadow-sm border-t rounded-br rounded-bl">
                    {[1,2,3,4].map((item) => 
                    <h2 className="hover:bg-black/5 p-1 pl-9 hover:bg-[#000000]/10">Книга {item}</h2>
                    )}
                </div>
            )}
        </label>
    )
}

export default AdminSearch