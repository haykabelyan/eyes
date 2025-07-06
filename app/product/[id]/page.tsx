import { productsArr } from "@/constant/items"
import { IoChevronBackCircle } from "react-icons/io5"
import Image from "next/image"


type Params =  {
  params: Promise<{ id: string }>
}

type Product = {
  id: number;
  firmaImg: string;
  firma: string;
  name: string;
  src: string;
  price: number;
  info: {
    imgArr: [],
    sizeArr: [],
    gender: string,
  },
  txt: string;
};

export default async function ProductPage({ params }: Params) {

  const { id } = await params;

  let products = productsArr.length >0 ? productsArr?.filter((item: any) => item.id === Number(id)): [];
  let product = products[0];

  

  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
    </div>
  )
}
