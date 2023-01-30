import React, { useEffect, useState } from 'react'
import donor1 from './assets/donor1.jpg'
import donor2 from './assets/donor2.jpg'
import donor3 from './assets/donor3.jpg'
import donor4 from './assets/donor4.jpg'
import donor5 from './assets/donor5.jpg'
import donor6 from './assets/donor6.jpg'
import MainLayout from '../../components/Layout/MainLayout'
import NewsCard from '../../components/NewsCard'
import Pagination from '@mui/material/Pagination/Pagination'

type Props = {}

export type News = {
    id: number,
    title: string,
    img: string,
    description: string,
    imageUrl: string,
    url: string
}

export const newsArray = [
    {
        id: 1,
        title: "Количество доноров  в Кыргызстане уменьшилось на 36,7% после Covid-19",
        description: "Не следует, однако, забывать, что существующая теория требует от нас анализа кластеризации усилий! В целом, конечно, высокотехнологичная концепция общественного уклада позволяет оценить значение соответствующих условий активизации. Задача организации, в особенности же разбавленное изрядной долей эмпатии, рациональное мышление требует анализа форм воздействия.",
        img: donor1,
        dateOfCreate: '18/01/22'
    },
    {
        id: 2,
        title: "Цена жизни. Как стать донором крови и какую пользу это принесет",
        description: "Не следует, однако, забывать, что существующая теория требует от нас анализа кластеризации усилий! В целом, конечно, высокотехнологичная концепция общественного уклада позволяет оценить значение соответствующих условий активизации. Задача организации, в особенности же разбавленное изрядной долей эмпатии, рациональное мышление требует анализа форм воздействия.",
        img: donor2,
        dateOfCreate: '18/01/22'
    },
    {
        id: 3,
        title: "Помощь Баткену. За два дня кровь сдали 643 человека",
        description: "Не следует, однако, забывать, что существующая теория требует от нас анализа кластеризации усилий! В целом, конечно, высокотехнологичная концепция общественного уклада позволяет оценить значение соответствующих условий активизации. Задача организации, в особенности же разбавленное изрядной долей эмпатии, рациональное мышление требует анализа форм воздействия.",
        img: donor3,
        dateOfCreate: '18/01/22'
    },
    {
        id: 4,
        title: "Сотрудники «Газпром Кыргызстан» поддержали акцию по сбору донорской крови",
        description: "Не следует, однако, забывать, что существующая теория требует от нас анализа кластеризации усилий! В целом, конечно, высокотехнологичная концепция общественного уклада позволяет оценить значение соответствующих условий активизации. Задача организации, в особенности же разбавленное изрядной долей эмпатии, рациональное мышление требует анализа форм воздействия.",
        img: donor4,
        dateOfCreate: '18/01/22'
    },
    {
        id: 5,
        title: "Центр крови просит у кыргызстанцев помощи. Запасы практически исчерпаны",
        description: "Не следует, однако, забывать, что существующая теория требует от нас анализа кластеризации усилий! В целом, конечно, высокотехнологичная концепция общественного уклада позволяет оценить значение соответствующих условий активизации. Задача организации, в особенности же разбавленное изрядной долей эмпатии, рациональное мышление требует анализа форм воздействия.",
        img: donor5,
        dateOfCreate: '18/01/22'
    },
    {
        id: 6,
        title: "Информация для граждан, желающих сдать кровь для пострадавших на границе",
        description: "Не следует, однако, забывать, что существующая теория требует от нас анализа кластеризации усилий! В целом, конечно, высокотехнологичная концепция общественного уклада позволяет оценить значение соответствующих условий активизации. Задача организации, в особенности же разбавленное изрядной долей эмпатии, рациональное мышление требует анализа форм воздействия.",
        img: donor6,
        dateOfCreate: '18/01/22'
    },
]

function NewsPage({ }: Props) {

    const [newskLists, setNewslists] = useState<News[] | null>()

    const [totalPages, setTotalPages] = useState<number | 1>()


    // const apiUrl = "https://jsonplaceholder.typicode.com/photos"

    const apiUrl = 'http://donationapi-env.eba-ucpyqvmr.eu-central-1.elasticbeanstalk.com/news';
      

    // const [data, setData] = useState()
    // useEffect(() => {
    //     axios.get(apiUrl).then((resp) => {
    //         const allPersons = resp.data.content;
    //         const totalPages = resp.data.totalPages;
    //         const allData = resp.data;
    //         // setData(allData)
    //         setTotalPages(totalPages)
    //         setNewslists(allPersons);
    //         console.log(data)
    //     });

    // }, [setNewslists]);

    return (
        <MainLayout>
            <div className='container mx-auto p-4'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {newsArray && newsArray.map((item) =>
                        <NewsCard id={item.id} title={item.title} description={item.description} dateOfCreate={item.dateOfCreate} img={item.img} />
                    )}
                </div>
                {/* <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                    {newskLists && newskLists.map((item) =>
                        <NewsCard id={item.id} title={item.title} description={item.description} dateOfCreate={'f'} img={item.url} />
                    )}
                </div> */}
                <div className='flex justify-center my-[30px]'>
                    <Pagination count={totalPages} color="secondary" />
                </div>
            </div>
        </MainLayout>
    )
}

export default NewsPage