import Flip from "react-reveal/Flip";

function Item({ items }) {
  return (
    <div className="skill-item flex flex-wrap gap-4">
      {items.map((item) => {
        return item.isLink ? (
          <Flip left>
            <a href={item.itemLink} target="_blank" className="skill-item_ele">
              <div className="w-full justify-center items-center transition-transform delay-100 duration-100 shadow-lg p-3 border-b-2 border-[#f7c71f] cursor-pointer hover:animate-pulse hover:bg-[#f7c71f]">
                {!item.isLink ? (
                  <div className="w-6 h-6 md:w-8 md:h-8">{item.logoLink}</div>
                ) : null}
                <h3 className="sm:text-base md:text-lg text-center">
                  {item.itemName}
                </h3>
              </div>
            </a>
          </Flip>
        ) : (
          <Flip left>
            <div className="skill-item_ele w-full justify-center items-center transition-transform delay-100 duration-100 shadow-lg p-3 border-b-2 border-[#f7c71f] cursor-pointer hover:animate-pulse hover:bg-[#f7c71f]">
              <div className="w-6 h-6 md:w-8 md:h-8">{item.logoLink}</div>
              <h3 className="sm:text-base md:text-lg text-center">
                {item.itemName}
              </h3>
            </div>
          </Flip>
        );
      })}
    </div>
  );
}

export default Item;
