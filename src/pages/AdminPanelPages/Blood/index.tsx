import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import AdminLayout from "../../../components/Layout/AdminLayout/AdminHeader";

type Props = {};

export type Donor = {
  id: number;
  title: string;
  img: string;
  description: string;
  url: string;
};

const AdminBloodPage = (props: Props) => {
  const inputArray = [
    {
      title: "Почта",
      id: 1,
    },
    {
      title: "Обьем",
      id: 2,
    },
    {
      title: "Адрес мед клиники",
      id: 3,
    },
  ];

  const talizaArray = [
    {
      title: "Дата",
      id: 1,
    },
    {
      title: "Почта",
      id: 2,
    },
    {
      title: "Адрес мед клиники",
      id: 3,
    },
    {
      title: "Обьем",
      id: 4,
    },
    {
      title: "Баллы",
      id: 5,
    },
  ];

  const apiUrl =
    "http://donationapi-env.eba-ucpyqvmr.eu-central-1.elasticbeanstalk.com/donations/all";

  const [newsDonor, setDonorlists] = useState<Donor[] | null>();

  const [totalPages, setTotalPages] = useState<number | 1>();

  const [data, setData] = useState();

  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data.content;
      const totalPages = resp.data.totalPages;
      const allData = resp.data;
      // setData(allData)
      setTotalPages(totalPages);
      setDonorlists(allPersons);
      console.log(allData);
    });
  }, [setDonorlists]);

  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <h5 className="text-ourblue font-bold">Заполните информацию донора</h5>
        <div className="grid grid-cols-2 gap-4 w-[50vmax] mx-auto my-20 ">
          {inputArray.map((item) => (
            <TextField
              id="outlined-basic"
              label={item.title}
              variant="outlined"
            />
          ))}
          <button className="text-white rounded-2xl bg-red-700 col-end-2 h-14    ">
            Отменить
          </button>
          <button className="text-white rounded-2xl bg-green-500 h-14    ">
            Сохранить
          </button>
        </div>
        <div>
          <div className="grid  grid-flow-col gap-4">
            {talizaArray.map((item) => (
              <p className="rounded-2xl bg-mapblue h-14 flex items-center justify-center">
                {item.title}
              </p>
            ))}
          </div>
          <div className="grid">
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminBloodPage;
