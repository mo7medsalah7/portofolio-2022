import { Link } from "next/link";

function Item({ items }) {
  return (
    <div className="skill-item grid sm:grid-flow-col  sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-4">
      {items.map((item) => {
        return item.isLink ? (
          <a href={item.itemLink} target="_blank">
            <div className="flex space-x-2 justify-center items-center transition-transform delay-100 duration-100 shadow-lg p-5 border-b-2 border-[#f7c71f] cursor-pointer hover:animate-pulse hover:bg-[#f7c71f]">
              {!item.isLink ? (
                <div className="w-6 h-6 md:w-12 md:h-12">{item.logoLink}</div>
              ) : null}
              <h3 className="sm:text-base md:text-lg">{item.itemName}</h3>
            </div>
          </a>
        ) : (
          <div className="flex space-x-2 justify-center items-center transition-transform delay-100 duration-100 shadow-lg p-5 border-b-2 border-[#f7c71f] cursor-pointer hover:animate-pulse hover:bg-[#f7c71f]">
            <div className="w-6 h-6 md:w-12 md:h-12">{item.logoLink}</div>
            <h3 className="sm:text-base md:text-lg">{item.itemName}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Item;
