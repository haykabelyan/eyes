"use client"

import Image from 'next/image'
import img from '../public/assets/img/products/demqEji.jpg'
import img2 from '../public/assets/img/products/about.jpg'
import img3 from '../public/assets/img/products/7.1.jpg'
import img4 from '../public/assets/img/products/2.jpg'

export const AboutPage = () => {
  return (
    <main className="py-16 bg-white grid gap-8 justify-items-center">
      <section className="w-4/5 text-center mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6">
          EYES բրենդի անհատական նկարազարդված հագուստը
        </h1>
        <div className="relative w-full h-[50vh] mb-6">
          <Image src={img} alt="EYES Brand" fill style={{ objectFit: 'contain' }} />
        </div>
        <p className="text-base md:text-lg leading-relaxed">
          Ժամանակակից աշխարհում հագուստն այլևս պարզապես առօրյա անհրաժեշտություն չէ, այլ ինքնարտահայտման միջոց։ EYES բրենդը ձեր անհատականության արտահյտման լավագույն միջոցն է։ Նրա աշխատանքները տարբերվում են զանգվածային արտադրանքից, քանի որ յուրաքանչյուր նկար կրում է ստեղծագործական գաղափար, ոգեշնչում և ձեռքի աշխատանք։
        </p>
      </section>

      <h2 className="text-xl md:text-3xl font-semibold text-center">Ինչպես է ստեղծվում EYES բրենդի արվեստը հագուստի վրա</h2>

      <section className="flex flex-col md:flex-row w-11/12 md:w-4/5 mx-auto gap-8 md:gap-12 items-center">
        <div className="relative md:w-2/5 h-[70vh] md:h-[80vh]">
          <Image src={img2} alt="EYES Brand Art" fill style={{ objectFit: 'cover' }} />
        </div>
        <p className="md:w-3/5 text-center md:text-left text-base md:text-lg leading-relaxed">
          EYES բրենդը աշխատում է բարձրորակ ներկերով, որոնք նախատեսված են կտորի վրա օգտագործման համար՝ ապահովելով գույների երկարակեցությունն ու դիմացկունությունը։ Նրա ստեղծագործությունները ներառում են տարբեր ոճեր՝ աբստրակցիա, մինիմալիզմ, ռեալիստական պատկերներ, ինչպես նաև անհատական պատվերներ, որոնք համապատասխանում են հաճախորդի նախասիրություններին։
        </p>
      </section>

      <section className="flex flex-col md:flex-row w-11/12 md:w-4/5 mx-auto gap-8 md:gap-12 items-center">
        <div className="relative md:w-2/5 h-[70vh] md:h-[80vh]">
          <Image src={img4} alt="EYES Brand Creation" fill style={{ objectFit: 'cover' }} />
        </div>
        <p className="md:w-3/5 text-center md:text-left text-base md:text-lg leading-relaxed">
          Ամեն կտոր սկսվում է գաղափարից. հաճախորդը կարող է ներկայացնել իր ցանկությունը, նախընտրած գույները, պատկերները կամ տրամադրությունը, որ ուզում է արտահայտել հագուստի միջոցով։ Այնուհետև EYES բրենդը ստեղծում է նախնական էսքիզ՝ համաձայնեցնելով այն պատվիրատուի հետ։ Երբ վերջնական դիզայնը հաստատվում է, սկսվում է ձեռքով նկարման գործընթացը, որը տևում է մի քանի ժամից մինչև մի քանի օր՝ կախված բարդությունից։
        </p>
      </section>

      <h2 className="text-xl md:text-3xl font-semibold text-center">Ինչու ընտրել ձեռքով նկարազարդված հագուստ</h2>

      <section className="w-11/12 md:w-4/5 mx-auto space-y-3 text-base md:text-lg leading-relaxed">
        <p>✅ Եզակիություն – Երկու միանման կտոր չկան. ամեն հագուստ ստեղծվում է բացառապես քեզ համար։</p>
        <p>✅ Որակ – Օգտագործվում են բարձրորակ նյութեր, որոնք դիմանում են լվացմանն ու չեն խամրում։</p>
        <p>✅ Ինքնատիպություն – Քո ոճը դառնում է անձնական, արտահայտելով անհատականությունը։</p>
        <p>✅ Հիշարժան նվեր – Նմանատիպ հագուստը կարող է դառնալ հիանալի ու բացառիկ նվեր սիրելի մարդու համար։</p>
      </section>

      <h2 className="text-xl md:text-3xl font-semibold text-center">EYES բրենդի ոգեշնչումը և մոտեցումը</h2>

      <section className="flex flex-col md:flex-row w-11/12 md:w-4/5 mx-auto gap-8 md:gap-12 items-center">
        <p className="md:w-3/5 text-center md:text-left text-base md:text-lg leading-relaxed">
          Նրա ստեղծագործությունները հաճախ ներշնչված են բնությունից, մշակույթից, արվեստից և մարդկանց անհատականություններից։ Յուրաքանչյուր աշխատանք կրում է պատմություն, տրամադրություն և յուրահատուկ էներգիա։ EYES բրենդը հավատում է, որ հագուստը պետք է լինի ոչ միայն հարմարավետ, այլև արտացոլի կրողի ինքնությունը, ստեղծագործական մտածելակերպը և տրամադրությունը։
        </p>
        <div className="relative md:w-2/5 h-[70vh] md:h-[80vh]">
          <Image src={img3} alt="EYES Brand Inspiration" fill style={{ objectFit: 'cover' }} />
        </div>
      </section>

      <section className="w-11/12 md:w-4/5 mx-auto text-center text-base md:text-lg leading-relaxed">
        <p>
          Անկախ նրանից՝ փնտրում ես վառ ու գունեղ հագուստ, թե նուրբ, մինիմալիստական արվեստ՝ EYES բրենդը պատրաստ է իրականացնել քո գաղափարները։
        </p>
      </section>
    </main>
  )
}
