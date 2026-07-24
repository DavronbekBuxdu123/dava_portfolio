import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useTranslations } from "next-intl";
type GridItems = {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
};
const Grid = () => {
  const t = useTranslations();
  const gridItems = t.raw("gridItems");
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item: GridItems, i: number) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
