import React from "react";
import Card from "./Card";

interface Item {
  price: number;
}

interface MoveRequestsProps {
  items: Item[];
  toggleCreateModal: () => void;
}

const MapItems: React.FC<MoveRequestsProps> = ({
  items,
  toggleCreateModal,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <Card
          key={index}
          item={item}
          index={index}
          toggleCreateModal={toggleCreateModal}
        />
      ))}
    </>
  );
};

const MoveRequests: React.FC<MoveRequestsProps> = ({
  items,
  toggleCreateModal,
}) => {
  return (
    <div>
      <div className=" justify-between items-center gap-[16px] overflow-hidden grid grid-cols-1 lg:grid-cols-2  ">
        <MapItems items={items} toggleCreateModal={toggleCreateModal} />
      </div>
    </div>
  );
};

export default MoveRequests;
