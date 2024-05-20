
import { LampContainer } from './Ui/lamp'
import { TextGenerateEffect } from './Ui/TextGenerateEffect'

const WorkExperience = () => {
  return (
    <div className='py-20'>
        
        <LampContainer
    
        >
      <h1 className='heading'>
            Work {' '}
            <span className='text-purple '>
                Experience
            </span>
        </h1>
        <TextGenerateEffect words='Comming Soon!' className='text-2xl '></TextGenerateEffect>
    </LampContainer>
    </div>
  )
}

export default WorkExperience