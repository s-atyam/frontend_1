import Image from 'next/image'

const LogoCloud = () => {
  return (
    <section className="main_contain flex_center py-8">
      <div className="w-2/3 md:w-4/5 flex_between flex-row flex-wrap">
      <Image className='w-16 sm:w-24 mx-2 my-3' src='/assets/logo/nuxt.svg' alt='nuxt Logo' width={50} height={50} />
      <Image className='w-12 sm:w-16 mx-2 my-3' src='/assets/logo/miro.svg' alt='miro Logo' width={50} height={50} />
      <Image className='w-20 sm:w-28 mx-2 my-3' src='/assets/logo/lottie_files.svg' alt='lottie files Logo' width={50} height={50} />
      <Image className='w-16 sm:w-24 mx-2 my-3' src='/assets/logo/wise.svg' alt='wise Logo' width={50} height={50} />
      <Image className='w-16 sm:w-24 mx-2 my-3' src='/assets/logo/dribbble.svg' alt='dribbble Logo' width={50} height={50} />
      <Image className='w-16 sm:w-24 mx-2 my-3' src='/assets/logo/kinsta.svg' alt='kinsta Logo' width={50} height={50} />
      <Image className='w-16 sm:w-24 mx-2 my-3' src='/assets/logo/angel_list.svg' alt='angel list Logo' width={50} height={50} />
      <Image className='w-16 sm:w-24 mx-2 my-3' src='/assets/logo/behance.svg' alt='behance Logo' width={50} height={50} />
      </div>
    </section>
  )
}

export default LogoCloud