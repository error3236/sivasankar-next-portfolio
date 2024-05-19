import { BentoGrid, BentoGridItem } from "./Ui/BentoGrid"

const Grid = () => {
  return (
   <section id="about">
    <BentoGrid>
        {
            [{title:"Title1",description:"des1"}].map((item, i )=>(
                <BentoGridItem/>
            ))
        }
    </BentoGrid>
   </section>
  )
}

export default Grid