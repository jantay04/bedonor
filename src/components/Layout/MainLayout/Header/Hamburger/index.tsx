import IconButton from '@mui/material/IconButton/IconButton'
import React, { useState } from 'react'
import Drawer from "@mui/material/Drawer/Drawer";
import { Link } from 'react-router-dom';
// import CloseIcon from '@mui/icons-material/Close'

type Props = {
    openHamburger: boolean,
    setOpenHamburger: any,
    linksLists: Array<{
        id?: number;
        tittle: string;
        url?: string;
        urls?: Array<{
            id: number,
            tittle: string,
            url: string;
        }>
    }>
}

type LinksComponentProps = {
    id?: number;
    tittle: string;
    url?: string;
    urls?: Array<{
        id: number,
        tittle: string,
        url: string;
    }>
};


function Hamburger({ openHamburger, setOpenHamburger, linksLists, }: Props) {
    const [toggleForm, setToggleForm] = useState<boolean>(false)


    function closeHamburger() {
        setOpenHamburger(false)
        setToggleForm(false)
    }


    const LinksComponent = ({ id, tittle, url, urls }: LinksComponentProps) => {
        return (
            <>
                {url ?
                    <div>
                        <Link
                            to={url}
                            className="font-semibold text-lg   p-1 border-b border-black/0  hover:border-b  border-ourred hover:text-[#FF7F2C] ease-in-out duration-200"
                        >
                            {tittle}
                        </Link>
                    </div>
                    :
                    <>
                        {urls && urls.map((link) =>
                            <div>
                                <Link
                                    to={link.url}
                                    className="font-semibold text-lg text-center p-1 border-b border-black/0  hover:border-b  border-[#FF7F2C] hover:text-[#FF7F2C] ease-in-out duration-200"
                                >
                                    {link.tittle}
                                </Link>
                            </div>
                        )}
                    </>
                }
            </>
        )
    }

    

    return (
        <Drawer
            anchor='right'
            open={openHamburger}
            onClose={closeHamburger}
        >
            <div className="relative w-screen h-screen p-5 pt-[128px]">
                <div className="absolute top-3 right-3">
                    <IconButton aria-label="delete" size="large" onClick={closeHamburger}>
                        {/* <CloseIcon sx={{ fontSize: 30 }} /> */}
                    </IconButton>
                </div>
                <div className='h-full w-full'>
                    {!toggleForm &&
                        <div className='h-full flex flex-col  justify-between '>
                            <div className="grid gap-10 text-center">
                                {linksLists && linksLists.map((item) => <LinksComponent url={item.url} tittle={item.tittle} urls={item.urls} />)}
                            </div>
                            <button onClick={() => setToggleForm(true)} className="w-full bg-ourred text-[#ffffff] py-3 px-4 mt-10 rounded text-white font-semibold shadow-lg hover:bg-[#f96807] ease-in-out duration-200">
                                Войти
                            </button>
                        </div>
                    }

                    {/* {toggleForm && <LoginAndRegister />} */}
                </div>
            </div>
        </Drawer>
    )
}

export default Hamburger