import Nav from "./components/Nav"
import vase from "./assets/image/vase.png";
import voyage2 from "./assets/fonts/voyage-regular.otf"

function App() {

  return (
    <div className="w-full min-h-screen  bg-[#ff8676] text-amber-50">
      <Nav />
      <div id="center" className="relative pb-[10vw] pt-[14vw] px-[8vw] font-[voyage]">
        <div id="center-text" className="flex justify-between  tracking-tighter">
          <h1 className="text-[12vw] font-thin relative z-10">Floral</h1>
          <h1 className="text-[12vw] font-thin">Fragility</h1>
        </div>
        <div id="para-div" className="mt-[20vw] w-full flex justify-between items-start">
          <div id="part1" className="w-1/2 bg-red-300">
          </div>
          <div id="part2" className="w-[40%]">
          <p className="text-5xl leading-tight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae perspiciatis velit incidunt laboriosam quis libero consectetur recusandae ad qui a?
          </p>
          <h5 className="text-xl mt-[2vw] leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate voluptate corporis? Voluptatibus dolore iste labore qui quo iusto necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sapiente voluptate optio sed ratione quos aspernatur. Aspernatur in ut nisi possimus omnis praesentium error odit fugit ducimus, fugiat adipisci corrupti necessitatibus eum fuga. Nisi eaque suscipit animi perferendis quia illum quam veniam corrupti quo necessitatibus, consequatur officia fuga explicabo nemo accusamus excepturi repellat libero iusto! Et molestiae ducimus similique soluta est impedit odio? Minus exercitationem at iste excepturi illum. Animi suscipit voluptatem natus quas vel nihil delectus ullam a sit accusantium reprehenderit repellat expedita harum illo, tempora incidunt voluptatibus ea provident, aliquam in repudiandae, explicabo maiores officia. Nemo, repellendus porro!</h5>
          </div>
        </div>
        <div id="bottom-div" className="mt-[20vw] flex justify-between items-start">
          <div className="w-1/2"></div>
          <div className="w-[40%]">
            <h1 className="text-[6vw] whitespace-nowrap leading-none tracking-[-4px]">Blue Pottery <br /> Decorative <br /> Vase</h1>
            <div className="flex justify-between w-full items-center mt-10">
              <button className="py-2 px-5 rounded-full text-2xl border-2">Add to Cart</button>
              <h2 className="text-7xl">$57</h2>
            </div>
          </div>
        </div>
        <img src={vase} className="absolute top-0 h-[80vw]" alt="" />
      </div>
    </div>
  )
}

export default App
