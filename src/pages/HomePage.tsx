import NavBar from "../components/NavBar";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import InfiniteReels from "../components/InfiniteReels";


const titles = ["Video Editor", "3D Artist", "Motion Designer", "Filmmaker"]
const skills = ["Video Editing (Long Form)", "Video Editing (Short Form/Ads)", "Cinematic Filmmaking", "3D Modeling (Blender)", "Motion Graphics & Graphics", "AI Integrated Editing",]
const reels = ["1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2",]
const projects = ["1", "2", "3"]
export default function HomePage() {
  return (
    <main id="home" className=" w-full bg-black ">
      <NavBar />
      <div className="h-[100vh] w-full  flex flex-col justify-center items-center font-poppins relative bg-black ">
        <h1 className="text-[5rem] font-[600] tracking-[6px] text-white m-10 ">AMAN VERMA</h1>
        <p className="text-xl font-poppins text-white">{titles.join(" • ")}</p>
        <span className=" m-4 flex gap-8">
          <button className="px-8 py-2 text-white bg-red-500">View my work</button>
          <button className="px-8 py-2 text-white border-red-500 border-2">Hire Me</button>
        </span>

        <div className="h-[100vh] w-full absolute  bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.15),transparent)]"></div>

      </div>

      {/* reels section  */}
      <div className="h-fit w-full p-8">
        <div className="flex mb-4 justify-center items-center tracking-wider p-4 text-red-500 font-medium *: text-5xl">
          <h2>SHOW REELS</h2>
        </div>
        <InfiniteReels reels = {reels} />
      </div>
      {/* skills section  */}
      <div id="skills" className="h-fit w-full p-8 scroll-mt-[14vh]">
        <div className="flex justify-center items-center tracking-wider p-4 text-red-500 font-medium *: text-5xl">
          <h2>SKILLS</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 px-12 py-5  gap-5 m-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="px-6 py-8 hover:bg-red-500 hover:text-white transition-all duration-300 hover:translate-y-[-10px]  border-[1px] font-poppins border-red-500 px-8 p-4 text-white"> {skill}</div>
          ))}
        </div>
      </div>


      {/* projects section */}
      <div id="projects" className="h-fit font-poppins w-full p-8 scroll-mt-[14vh]">
        <div className="flex flex-col m-2 justify-center items-center tracking-wider p-4 text-red-500 font-medium *: text-5xl">
          <h2>PROJECTS</h2>
          <section className="py-4 mb-4 w-full h-fit">
            <div className="flex justify-center items-center font-poppins font-light text-2xl m-4 text-red-500">Video Editing - Long Form</div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5  py-5  gap-5 ">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-[#111111] hover:scale-[1.05] w-full h-[180px] hover:shadow-red-500 hover:shadow-[0_0_15px_#e50914] hover:text-white transition-all duration-300   border-[1px] font-poppins border-red-500 text-white"> </div>
              ))}
            </div>
          </section>
          <section className="py-4 mb-4 w-full h-fit">
            <div className="flex justify-center items-center font-poppins font-light text-2xl m-4 text-red-500">Short Form / Ads</div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5  py-5  gap-5 ">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-[#111111] hover:scale-[1.05] w-full h-[180px] hover:shadow-red-500 hover:shadow-[0_0_15px_#e50914] hover:text-white transition-all duration-300   border-[1px] font-poppins border-red-500 text-white"> </div>
              ))}
            </div>
          </section>
          <section className="py-4 mb-4 w-full h-fit">
            <div className="flex justify-center items-center  font-poppins font-light text-2xl m-4 text-red-500">3D Models ( Blender ) </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5  py-5  gap-5 ">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-[#111111] hover:scale-[1.05] w-full h-[180px] hover:shadow-red-500 hover:shadow-[0_0_15px_#e50914] hover:text-white transition-all duration-300   border-[1px] font-poppins border-red-500 text-white"> </div>
              ))}
            </div>
          </section>
          <section className="py-4 mb-4 w-full h-fit">
            <div className="flex justify-center items-center  font-poppins font-light text-2xl m-4 text-red-500">Motion Graphics </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5  py-5  gap-5 ">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-[#111111] hover:scale-[1.05] w-full h-[180px] hover:shadow-red-500 hover:shadow-[0_0_15px_#e50914] hover:text-white transition-all duration-300   border-[1px] font-poppins border-red-500 text-white"> </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* about me section  */}
      <div id="about" className="h-fit w-full p-8 scroll-mt-[14vh]">
        <div className="flex justify-center items-center tracking-wider p-4 text-red-500 font-medium *: text-5xl">
          <h2>ABOUT ME</h2>
        </div >
        <div className="p-4 px-20 m-4">

          <p className="text-white text-xl ">
            I’m Aman Verma — a creative editor and filmmaker blending cinematic visuals with advanced motion graphics, AI-assisted workflows, and 3D art. I craft immersive visuals through storytelling, smooth editing, and dramatic design.
          </p>
        </div>
      </div>
      {/* hire me section  */}
      <div id="contact" className="h-fit w-full p-8 scroll-mt-[14vh]">
        <div className="flex justify-center items-center tracking-wider p-4 text-red-500 font-medium *: text-5xl">
          <h2>HIRE ME</h2>
        </div >
        <div className="p-4 flex justify-center  m-4">
          <div className="border-2 w-3/5 border-red-500 py-10 text-white gap-4 justify-center items-center flex flex-col ">
            <p>📞 Phone: 7355025530</p>
            <p>📧 Email: iamrewind11@gmail.com</p>
            <button className="py-3 px-5 text-white bg-red-500">Send Email</button>
          </div>

        </div>
      </div>
    </main>
  )
}
