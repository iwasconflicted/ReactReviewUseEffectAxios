import { useEffect, useState } from "react"

interface Props {
    category: string;
}



const ProductList = ({category}: Props) => {

        // useEffect of products
        // product is our variable, holding an empty array []
        // setProduct is an updater function that sets our product
        // setProduct (['car', 'pool]) then product will hold an array of products
        const [product, setProduct] = useState<string[]>([])


        useEffect(() => {


        console.log('fetch data in', category);
        setProduct (['Car', 'Pool']);
        
          
        }, [])
        


  return (
    <>
        <h1 className="text-center">Product List</h1>
        
    </>
  )
}

export default ProductList