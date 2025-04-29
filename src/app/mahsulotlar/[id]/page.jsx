import PlanDetails from '@/components/product-details'
import axios from 'axios'

async function ProductDetails({params}) {
    const {data} = await axios.get(`https://67e38f432ae442db76d08ec2.mockapi.io/business-plans-uz/${params.id}`)
    return (
        <div className="pt-[100px] pb-[50px]">
            <PlanDetails product={data}/>
        </div>
    
  )
}

export default ProductDetails