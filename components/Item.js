import { Link } from "next/link";

function Item({ items }) {
  return (
    <div className="skill-item flex flex-wrap gap-4">
      {items.map((item) => {
        return item.isLink ? (
          <a href={item.itemLink} target="_blank">
            <div className="skill-item_ele justify-center items-center transition-transform delay-100 duration-100 shadow-lg p-3 border-b-2 border-[#f7c71f] cursor-pointer hover:animate-pulse hover:bg-[#f7c71f]">
              {!item.isLink ? (
                <div className="w-6 h-6 md:w-12 md:h-12">{item.logoLink}</div>
              ) : null}
              <h3 className="sm:text-base md:text-lg">{item.itemName}</h3>
            </div>
          </a>
        ) : (
          <div className="skill-item_ele justify-center items-center transition-transform delay-100 duration-100 shadow-lg p-3 border-b-2 border-[#f7c71f] cursor-pointer hover:animate-pulse hover:bg-[#f7c71f]">
            <div className="w-6 h-6 md:w-12 md:h-12">{item.logoLink}</div>
            <h3 className="sm:text-base md:text-lg">{item.itemName}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Item;
