import Arrow from './Arrow'
import HeroText from './HeroText'


const LeftContent = () => {
  return (
    <div className='max-w-sm flex flex-col justify-between h-125 p-7 gap-20'>
      <HeroText />
      <Arrow />
    </div>
  )
}

export default LeftContent
