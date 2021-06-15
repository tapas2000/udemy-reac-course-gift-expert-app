
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";


export const GiftGrid = ({ category }) => {
    const {data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>

            <div className='card-grid animate__animated animate__backInLeft'>
                {loading && <p className="animate__animated animate__fadeIn" >Loading</p> }

                {
                    images.map(img => (
                        <GiftGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                    // images.map(img => {
                    //     return <li key={img.id}>{img.title}</li>
                    // })
                }
            </div>
        </>
    )
}
