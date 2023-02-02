import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


type Props = {
  children: React.ReactNode;
};
const AdminLayout = ({ children }: Props) => {

  const adminTools = [
    {
      id: 1,
      tittle: "Доноры",
      path: "/admin",
    },
    {
      id: 2,
      tittle: "Коины",
      path: "/admin/coins",
    },
    {
      id: 3,
      tittle: "Сдача крови",
      path: "/admin/blood",
    },
    {
      id: 4,
      tittle: "Редактирование",
      path: "/admin",
    },
  ]

  return (


    <>
      <div className="container mx-auto p-4 mt-6 max-sm:mt-0 flex flex-row items-center justify-between">
        <ul className="flex ml-[25%] max-md:ml-5 max-sm:ml-0 items-center justify-between gap-[95px] max-md:gap-4 max-sm:gap-2 text-ourblue ">
          {adminTools && adminTools.map((item) =>
            <li className=" hover:text-ourred transition-all max-sm:text-[10px]">
              <Link to={item.path}>{item.tittle}</Link>
            </li>
          )}
        </ul>
        <Avatar alt="" src="" />
      </div>
      {children}
    </>
  );
};

export default AdminLayout;