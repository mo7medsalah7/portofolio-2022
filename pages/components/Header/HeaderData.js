function HeaderData() {
  return (
    <div className="w-full flex min-h-screen bg-[#f7c71f]">
      <div className="container m-auto">
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="sm:text-4xl md:text-5xl lg:text-8xl font-bold ">
              Mo Salah
            </h1>
            <p className="">Let's collaborate on your next project.</p>
          </div>
          <div className="buttons flex gap-[12px]">
            <div className="basicBtn">
              <button type="submit">Let's Work</button>
            </div>
            <div className="secondBtn">
              <button className=" " type="submit">
                See My Works
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Portofolio Image */}
      <div className="m-auto xs:hidden md:hidden lg:flex">Hola</div>
    </div>
  );
}

export default HeaderData;
