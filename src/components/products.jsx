import axios from "axios"
import AllProductsAsync from "./all-products-async"

async function Products() {
  const {data} = await axios.get('https://67e38f432ae442db76d08ec2.mockapi.io/business-plans-uz')
  return (
    <div className="pt-[100px] px-[20px] md:px-[40px]">
        <h1 className="text-center text-[28px] md:text-[40px] font-[600] mb-[40px]">Biznes Rejalar</h1>
        <AllProductsAsync data={data}/>
    </div>
  )
}

export default Products