import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GifExpertApp = () => {

    //const categories = ['My Hero Academia','Demon Slayer','Attack of Titans'];
    const [categories, setCategories] = useState(['My Hero Academia']);
    // const handleAdd = () => {
    //     //setCategories(['My Hero Academia','Demon Slayer','Attack of Titans','Naruto Shippudent']);
    //     setCategories([...categories,'Naruto Shipudden']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    // //map tiene dos elementos, indice y objeto
                    // categories.map((category) => {
                    //     //React necesita diferenciar cada li, por ello  se usa key
                    //     return <li key={category}>{category}</li>
                    // })

                    //map tiene dos elementos, indice y objeto
                    categories.map((category) =>
                        <GiftGrid 
                        category= {category}
                        key={category}
                        />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;