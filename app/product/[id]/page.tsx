"use client"
import { useParams, notFound } from "next/navigation"
import { ProductsArr } from "@/constant/items"
import { IoChevronBackCircle } from "react-icons/io5"
import { useState } from "react"
import Image from "next/image"

export default function ProductPage() {
  const params = useParams()
  const id = params?.id
  const product = ProductsArr.find((item: any) => item.id === Number(id))

  const [index, setIndex] = useState<'main' | number>('main')

  if (!product) return notFound()

  return (
      <div>
        <IoChevronBackCircle
          onClick={() => window.history.back()}
          className="absolute top-20 left-2 text-4xl text-gray-800 hover:text-black cursor-pointer transition z-10"
        />

        <div className="w-full">
          <Image
            src={index === "main" ? product.src : product.info.imgArr[index]}
            alt={product.name}
            className="w-full h-80 object-cover "
          />
        </div>

        <div className="flex flex-col flex-grow gap-[15px] p-3 text-right">
          <div className="grid gap-[10px]">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Գինը ։ {product.price} դրամ
              </h2>
              <div className="flex items-center gap-2">
                <Image
                  src={product.firmaImg}
                  alt={product.firma}
                  className="w-8 h-8 object-contain"
                />
                <span className="italic text-gray-700 text-sm sm:text-base">{product.firma}</span>
              </div>
            </div>
            <p className="text-lg text-[#283958]">{product.name}</p>
          </div>

          <hr className="border-gray-300 mb-6" />

          <div>
            <p className="text-gray-900 text-start mb-1">Չափսեր</p>
            <div className="flex flex-wrap gap-1">
              {product.info.sizeArr.map((size, i) => (
                <span
                  key={size + i}
                  className="px-3 py-1 border border-gray-700 rounded cursor-pointer text-gray-700 hover:bg-gray-100 transition text-sm"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mb-6 flex-wrap max-w-full overflow-x-auto">
            {product.info.imgArr.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${product.name} ${i}`}
                onClick={() => setIndex(i)}
                className={`w-16 h-24 object-cover rounded cursor-pointer border-2 ${
                  index === i ? "border-black" : "border-transparent"
                } hover:border-black`}
              />
            ))}
          </div>

          <p className="text-gray-700 text-justify">{product.txt}</p>
        </div>
      </div>
  )
}
