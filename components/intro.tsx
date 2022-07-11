import Link from 'next/link';

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        Профессиональное обучение вождению от Олега Шпаруты
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Как со мной связаться {' '}
        <Link href="#contact_ref">
          <a className="underline hover:text-blue-600 duration-200 transition-colors">
            Контакты
          </a>  
        </Link>{' '}
      </h4>
    </section>
  )
}

export default Intro
