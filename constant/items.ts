// "use client"
import logo from '../public/assets/img/logo.png'
import img1 from '../public/assets/img/products/1.jpg'
import img1_1 from '../public/assets/img/products/1.1.jpg'
import img2 from '../public/assets/img/products/2.jpg'
import img2_1 from '../public/assets/img/products/2.1.jpg'
import img2_2 from '../public/assets/img/products/2.2.jpg'
import img3 from '../public/assets/img/products/3.jpg'
import img3_1 from '../public/assets/img/products/3.1.jpg'
import img4 from '../public/assets/img/products/4.jpg'
import img4_1 from '../public/assets/img/products/4.1.jpg'
import img4_2 from '../public/assets/img/products/4.2.jpg'
import img5 from '../public/assets/img/products/5.jpg'
import img5_1 from '../public/assets/img/products/5.1.jpg'
import img6 from '../public/assets/img/products/6.jpg'
import img6_1 from '../public/assets/img/products/6.1.jpg'
import img7 from '../public/assets/img/products/7.jpg'
import img7_1 from '../public/assets/img/products/7.1.jpg'
import img7_2 from '../public/assets/img/products/7.2.jpg'
import img8 from '../public/assets/img/products/8.jpg'
import img8_1 from '../public/assets/img/products/8.1.jpg'
import img8_2 from '../public/assets/img/products/8.2.jpg'
import img9 from '../public/assets/img/products/9.jpg'
import img9_1 from '../public/assets/img/products/9.1.jpg'
import img10 from '../public/assets/img/products/10.jpg'
import img10_1 from '../public/assets/img/products/10.1.jpg'
import img10_2 from '../public/assets/img/products/10.2.jpg'

export const productsArr = [
	{
		id: 1,
		firmaImg: logo,
		firma: 'Eyes',
		name: 'Սև Հուդի “Live With Fire” Տպագրությամբ․',
		src: img1,
		price: 14900,
		info: {
			imgArr: [img1,img1_1],
			sizeArr: ['M', 'L', 'XL', 'XXL','Oversized'],
			gender: 'տղայի',
		},
		txt: 'Արտահայտիր քո ոճը ու եռանդը այս յուրահատուկ հուդիով։Հուդիի հետևի մասում կա վառ երկնագույն տպագրություն՝ “LIVE WITH FIRE” գրությամբ և կրակի շեշտադրումներով, ինչը տալիս է համարձակ և էներգետիկ տեսք։ Տպված է նաև “Vamtac Club” բրենդի լոգոն։Օվերսայզ (oversized), իդեալական թե աղջիկների, թե տղաների համար💙',
	},
	{
		id: 2,
		firmaImg: logo,
		firma: 'Eyes',
		name: 'Life with fire🐉',
		src: img2,
		price: 14900,
		info: {
			imgArr: [img2,img2_1,img2_2],
			sizeArr: ['M', 'L', 'XL', 'XXL','Oversized'],
			gender: 'աղջկա',
		},
		txt: 'Արևելյան վիշապի ուժն ու խորհրդավորությունը կենդանանում են այս բացառիկ դիզայնի միջոցով։Շապիկը պատրաստված է բարձրորակ բամբակից՝ ապահովելով հարմարավետություն և դիմացկունություն ամեն օր։⚡️Խորը իմաստ ունեցող դիզայն⚡️Ոգեշնչված է ասիական մշակույթից⚡️Ձեռքի աշխատանք',
	},
	{
		id: 3,
		firmaImg: logo,
		firma: 'Eyes',
		name: '🖤 Eyes “Black Statement” շապիկ',
		src: img3,
		price: 14900,
		info: {
			imgArr: [img3,img3_1],
			sizeArr: ['M', 'L', 'XL', 'XXL','Oversized'],
			gender: 'աղջկա',
		},
		txt: 'Անհատական պատվերներից, որի միջոցով  արտահայտում են մտքերը🤍',
	},
	{
		id: 4,
		firmaImg: logo,
		firma: 'Eyes',
		name: '🖤 Eyes “Black Statement” շապիկ',
		src: img4,
		price: 14900,
		info: {
			imgArr: [img4, img4_1,img4_2],
			sizeArr: ['M', 'L', 'XL', 'XXL','Oversized'],
			gender: 'աղջկա',
		},
		txt: 'Այս շապիկը ստեղծված է նրանց համար, ովքեր գնահատում են մինիմալիստական ոճը, բայց ուզում են իրենց մեջ պահել խոսք։Գրվածքը շապիկի վրա ոչ թե զարդ է, այլ ուղերձ։ Դա միտք է, որ կրում ես առանց գոռալու։Թեթեւ, հարմարավետ ու համադրելի ամեն ինչի հետ՝ ջինսից մինչեւ բոմբեր։',
	},
	{
		id: 5,
		firmaImg: logo,
		firma: 'Eyes',
		name: '🖤 Eyes “Black Statement” շապիկ․',
		src: img5,
		price: 14900,
		info: {
			imgArr: [img5,img5_1],
			sizeArr: ['M', 'L', 'XL', 'XXL','Oversized'],
			gender: 'աղջկա',
		},
		txt: 'Սա սովորական հուդի չէ։Սա santizi զգացողություն է՝ փափուկ, բայց ընդգծված։ Այս հուդիով լինում ես ուշադրության կենտրոնում՝ առանց ձայն բարձրացնելու։',
	},
	{
		id: 6,
		firmaImg: logo,
		firma: 'Eyes',
		name: '🤍 Eyes “We See Each Other” զույգ շապիկներ',
		src: img6,
		price: 14900,
		info: {
			imgArr: [img6, img6_1],
			sizeArr: ['M', 'L', 'XL', 'XXL','Oversized'],
			gender: 'տղայի',
		},
		txt: 'Չկա ավելի ուժեղ զգացողություն, քան երբ ձեր ոճը խոսում է ձեր կապի մասին։Eyes զույգ շապիկները՝ միաժամանակ նուրբ և համարձակ, ստեղծված են նրանց համար, ովքեր ոչ միայն միասին են, այլ նաև համընկնում են էներգիայով։Մեկս մյուսի հայացքի շարունակությունն եք։ Ու դա երևում է նույնիսկ շապիկի վրայից։',
	},
	{
		id: 7,
		firmaImg: logo,
		firma: 'Eyes',
		name: '🖤 Eyes “Black Statement” շապիկ',
		src: img7,
		price: 14900,
		info: {
			imgArr: [img7,img7_1,img7_2],
			sizeArr: ['M', 'L', 'XL', 'XXL','Oversized'],
			gender: 'տղայի',
		},
		txt: 'Սևը խոսում է առանց աղմուկի։Գրվածքը՝ առանց բացատրության։Սա այն շապիկն է, որը հագնում ես, երբ ուզում ես լինել հստակ, ուղղակի ու դու՝ առանց ավելորդության։Eyes սեւ շապիկը՝ մաքուր էներգիա, մինիմալիստական ուղերձով։ Այն ամենն, ինչ պետք է՝ առօրյայում, դուրս գնալիս կամ երբ ուզում ես պարզապես զգալ քեզ հավաքված ու վստահ։',
	},
	{
		id: 8,
		firmaImg: logo,
		firma: 'Eyes',
		name: '🖤 Eyes “Black Statement” շապիկների շարքից',
		src: img8,
		price: 14900,
		info: {
			imgArr: [img8, img8_1,img8_2],
			sizeArr: ['M', 'L', 'XL', 'XXL','Oversized'],
			gender: 'աղջկա',
		},
		txt: 'Սևը խոսում է առանց աղմուկի։Գրվածքը՝ առանց բացատրության։Սա այն շապիկն է, որը հագնում ես, երբ ուզում ես լինել հստակ, ուղղակի ու դու՝ առանց ավելորդության։Eyes սեւ շապիկը՝ մաքուր էներգիա, մինիմալիստական ուղերձով։ Այն ամենն, ինչ պետք է՝ առօրյայում, դուրս գնալիս կամ երբ ուզում ես պարզապես զգալ քեզ հավաքված ու վստահ։',
	},
	{
		id: 9,
		firmaImg: logo,
		firma: 'Eyes',
		name: 'Silent Meaning”🤎',
		src: img9,
		price: 14900,
		info: {
			imgArr: [img9,img9_1],
			sizeArr: ['M', 'L', 'XL', 'XXL','Oversized'],
			gender: 'տղայի',
		},
		txt: 'Ընտրիր EYES-ի հուդիները որպես քո անհատականության արտահայտման միջոց🤎',
	},
	{
		id: 10,
		firmaImg: logo,
		firma: 'Eyes',
		name: '🍫👶 Eyes Baby “Nutella Mood” բոդի',
		src: img10,
		price: 14900,
		info: {
			imgArr: [img10, img10_1,img10_2],
			sizeArr: ['M', 'L', 'XL', 'XXL','Oversized'],
			gender: 'երեխայի',
		},
		txt: 'Քաղցրությունը՝ արտահայտված մեկ հայացքով։Այս բոդին միայն հագուստ չէ — դա տրամադրություն է։',
	}
]