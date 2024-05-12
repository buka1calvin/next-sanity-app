import { getAllProject } from "@/sanity/sanity-utils";
export default async function Home() {
  const projects=await getAllProject()
  return (
    <main className="flex w-screen h-screen flex-col p-24 gap-11">
      <h1 className="">my projects</h1>
      <div className="flex w-full items-center justify-between gap-6">
        {
          projects.map((project)=>{
            return (
              <div className="p-6 border w-full" key={project._id}>{project.name}</div>
            )
          })
        }
      </div>
    </main>
  );
}
