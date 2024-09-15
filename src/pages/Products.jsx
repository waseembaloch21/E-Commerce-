import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProductCard from '../components/ProductCard';
import CategoryChip from '../components/CategoryChip';

function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [chosenCategory, setChosenCategory] = useState("All");

  useEffect(() => {

      const url = chosenCategory === "All"
      ?"https://dummyjson.com/products"
      :`https://dummyjson.com/products/category/${chosenCategory}`;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });
  }, [chosenCategory]);

//categories Api

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/categories')
      .then((res) => {
        setCategories(res.data)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      });
  }, []);

  return (
    <div className='container mx-auto '>
      {loading ?(
      <h1 className='text-center font-serif text-3xl'>Loading....</h1>
    ) : (
      <div>
        <div className='flex font-serif gap-3 flex-wrap'>
        <CategoryChip
        onCLick={()=>setChosenCategory('All')}
         isChosen={ chosenCategory === "All"}
        category={{
          slug :'All',
          name :'All'
        }}

        />
      {
        categories.map((category) => (
        <CategoryChip
        onClick={()=> setChosenCategory(category.slug)}
        isChosen={category.slug === chosenCategory}
        category={category} key={category.slug}/>
      ))}
        </div>

      <div className=" font-serif flex flex-wrap -m-4 my-4">
       { products.map((item)=>(
         <ProductCard item={item} key={item.id}/>
        ))}
      </div>
      </div>
    
      )};
    </div>
  )
}

export default Products