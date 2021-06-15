import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
    const [data, setData] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifts(category)
            .then(imgs => {
                setData({
                    data: imgs,
                    loading: false,
                })
            });
    }, [category])

    return data;
}