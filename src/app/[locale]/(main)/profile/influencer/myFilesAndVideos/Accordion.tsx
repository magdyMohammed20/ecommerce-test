import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Badge from "./Tag";
import { ProductArrowLeft } from "../../../../../../../public/assets/svg/checkoutSvg";

interface AccordionProps {
  children?: React.ReactNode;
  multiple: boolean;
  defaultIndex: number | number[] | any;
  title?: string;
}

const useAccordion = ({ multiple, defaultIndex }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | number[]>(
    multiple ? [defaultIndex] : defaultIndex
  );

  const onChangeIndex = (index: number) => {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (
        Array.isArray(currentActiveIndex) &&
        currentActiveIndex.includes(index)
      ) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return [...(currentActiveIndex as number[]), index];
    });
  };

  return { activeIndex, onChangeIndex };
};

function Accordion({
  children,
  multiple,
  defaultIndex,
  title,
}: AccordionProps) {
  const { activeIndex, onChangeIndex } = useAccordion({
    multiple,
    defaultIndex,
  });

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <div className="bg-white  rounded-[8px] overflow-hidden flex flex-col gap-4">
        <AccordionHeader
          isActive={isActive}
          index={index}
          onChangeIndex={onChangeIndex}>
          <div
            className={`flex items-center justify-between w-full p-6 ${
              isActive ? "pb-0" : "p-6"
            }`}>
            <span className="text-16 font-bold">{title}</span>

            <ProductArrowLeft
              classNames={`transform  rotate-[270deg] transition-transform ${
                isActive ? "rotate-[90deg]" : ""
              }`}
            />
          </div>
        </AccordionHeader>
        {isActive && <hr />}

        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}>
              <div className="AccordionPanel pb-6 px-6">{child}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  });
}

interface AccordionHeaderProps {
  isActive: boolean;
  index: number;
  onChangeIndex: (index: number) => void;
  children: React.ReactNode;
}

function AccordionHeader({
  isActive,
  index,
  onChangeIndex,
  children,
}: AccordionHeaderProps) {
  return (
    <motion.div
      className={`AccordionHeader cursor-pointer   ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}>
      {children}
    </motion.div>
  );
}

const tags = [
  {
    id: 1,
    name: "Home furnishings",
  },
  {
    id: 2,
    name: "Electronics",
  },
  {
    id: 3,
    name: "Jewelry & Watches",
  },
  {
    id: 4,
    name: "shoes",
  },
];

export default function AccordionDemo({ title }: { title: string }) {
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  const handleBadgeClick = (badge: string) => {
    if (selectedBadges.includes(badge)) {
      setSelectedBadges(selectedBadges.filter((item) => item !== badge));
    } else {
      setSelectedBadges([...selectedBadges, badge]);
    }
  };

  return (
    <section className="w-full">
      <Accordion multiple defaultIndex={0} title={title}>
        {[...Array(1)].map((_, i) => (
          <div key={i}>
            <div className="flex  gap-3   w-full  flex-wrap">
              {tags.map((tag) => (
                <Badge
                  key={tag.id}
                  label={tag.name}
                  selected={selectedBadges.includes(tag.name)}
                  onClick={() => handleBadgeClick(tag.name)}
                />
              ))}
            </div>
          </div>
        ))}
      </Accordion>
    </section>
  );
}
