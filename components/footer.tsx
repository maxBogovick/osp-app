import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer id="contact_ref" className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Контакты
          </h3>
          <div className="flex flex-col items-left justify-left">
            <div className="flex flex-col lg:flex-row justify-left items-left lg:pl-4 lg:w-1/2">
              <img
                src='/assets/blog/maxim/viber40.png'
                className="shadow-sm, {
                  'hover:shadow-lg transition-shadow duration-200': slug,
                }"
              />          
              <h3 className="text-2xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                {' '} +38012121212
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row justify-left items-left lg:pl-4 lg:w-1/2">
              <img
                src='/assets/blog/maxim/skype40.png'
                className="shadow-sm, {
                  'hover:shadow-lg transition-shadow duration-200': slug,
                }"
              />          
              <h3 className="text-2xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                {' '} +38012121212
              </h3>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-left items-left lg:pl-4 lg:w-1/2">
              <img
                src='/assets/blog/maxim/telegram40.png'
                className="shadow-sm, {
                  'hover:shadow-lg transition-shadow duration-200': slug,
                }"
              />          
              <h3 className="text-2xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                {' '} @oleg_shparuta
              </h3>
            </div>
            
          
          <div className="flex flex-col lg:flex-row justify-left items-left lg:pl-4 lg:w-1/2">
            <img
              src='/assets/blog/maxim/email40.png'
              className="shadow-sm, {
                'hover:shadow-lg transition-shadow duration-200': slug,
              }"
            />          
            <h3 className="text-2xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              {' '} oleg_shparuta@gmail.com
            </h3>
          </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Подробнее
            </a>
            <a
              href={`/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              Приложения по парковкам
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
