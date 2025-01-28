import { useDataContext } from "@/hooks/useDataContext";

export default function DeleteProject() {
  const { projects, loading } = useDataContext();
  return (
    <div className="">
      {projects.map((project) => (
        <button key={project.id} className="">
          <h4>{project.title}</h4>
        </button>
      ))}
    </div>
  );
}
