'use client'

import { useState } from 'react'
import { productsArr } from '../constant/items'
import Link from 'next/link'
import Image from 'next/image'

export const ProductsPart = () => {
	const [filtered, setFiltered] = useState([])

	const handleChangeFilter = (e) => {
		const gender = e.target.textContent.toLowerCase()
		if (gender === 'բոլորը') {
			setFiltered(productsArr)
		} else {
			const newArr = productsArr.filter((el) =>
				el.info.gender.toLowerCase().includes(gender)
			)
			setFiltered(newArr)
		}
	}

	const handleChangeSearchFilter = (e) => {
		if (e.target.value.toLowerCase() === 'all') {
			setFiltered(productsArr)
			return
		}
		const newArr = ProductsArr.filter((el) =>
			el.name.toLowerCase().includes(e.target.value.toLowerCase())
		)
		setFiltered(newArr)
	}

	const handleChangeFilterMin = (e) => {
		const newArr = ProductsArr.filter((el) => el.price >= +e.target.value)
		setFiltered(newArr)
	}

	const handleChangeFilterMax = (e) => {
		const newArr = ProductsArr.filter((el) => el.price <= +e.target.value)
		setFiltered(newArr)
	}

	const dataToShow = filtered.length > 0 ? filtered : ProductsArr

	return (
		<div className="w-full">
			{/* Filters */}
			<div className="flex flex-wrap justify-around items-center py-5 gap-3">
				<div className="flex flex-wrap justify-around items-center gap-2">
					{['Բոլորը', 'Տղայի', 'Աղջկա', 'Երեխայի'].map((label) => (
						<button
							key={label}
							onClick={handleChangeFilter}
							className="cursor-pointer px-10 py-4 text-lg rounded-full border-none bg-white text-#151e2e 
								md:px-8 md:py-3 
								max-[480px]:px-4 max-[480px]:py-2 max-[480px]:text-sm"
						>
							{label}
						</button>
					))}
				</div>

				<div className="flex flex-wrap items-center gap-3">
					<input
						type="text"
						placeholder="search..."
						onChange={handleChangeSearchFilter}
						className="text-sm px-3 py-2 rounded bg-white text-#151e2e border-b border-#151e2e w-[140px]"
					/>
					<div className="flex gap-2 px-2 py-2 rounded">
						<input
							type="number"
							placeholder="min..."
							onChange={handleChangeFilterMin}
							className="w-[60px] px-2 py-2 text-sm bg-white text-#151e2e border-b border-black rounded"
						/>
						<input
							type="number"
							placeholder="max..."
							onChange={handleChangeFilterMax}
							className="w-[60px] px-2 py-2 text-sm bg-white text-#151e2e border-b border-black rounded"
						/>
					</div>
				</div>
			</div>

			{/* Products */}
			<div className="w-full pb-10 flex justify-center flex-wrap gap-5 md:px-2 sm:px-1 max-[768px]:gap-3 max-[480px]:gap-1">
				{dataToShow.map((e) => (
					<div
						key={e.id}
						className="relative overflow-hidden w-[350px] h-[450px] flex flex-col items-center justify-start gap-5 text-white
							lg:w-[400px] md:w-[350px] max-[768px]:w-[45%] max-[768px]:h-[310px] max-[480px]:w-[49%] max-[480px]:h-[250px]"
					>
						<Link href={`/product/${e.id}`} className="w-full">
							<Image
								src={e.src}
								alt={e.name}
								className="w-full h-[450px] object-cover transition-transform duration-1000 hover:scale-150 
									max-[768px]:h-[310px] max-[480px]:h-[220px]"
							/>
						</Link>
						<div
							className="absolute backdrop-blur-sm w-full px-4 py-10 bottom-[-75px] transition-all duration-1000 
								hover:bottom-0 max-[768px]:bottom-[-42px] max-[768px]:py-3 
								max-[480px]:bottom-[-32px] max-[480px]:px-2"
						>
							<p className="text-black font-bold text-lg text-shadow-white max-[768px]:text-sm max-[480px]:text-xs py-2">
								{e.name.length > 20 ? e.name.substring(0, 18) + '...' : e.name}
							</p>
							<p className="text-black font-bold text-lg text-shadow-white max-[768px]:text-sm max-[480px]:text-xs py-2">
								Price: {e.price}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
