import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./Ui/BentoGrid"

const Grid = () => {
  return (
   <section id="about">
    <BentoGrid>
        {
            gridItems.map(({id,title,description,className,img,imgClassName,spareImg,titleClassName})=>(
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                spareImg={spareImg}
                titleClassName={titleClassName}

                />
            ))
        }
    </BentoGrid>
   </section>
  )
}

export default Grid