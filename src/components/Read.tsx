import { useDataContext } from "@/hooks/useDataContext";
import { Element } from "@/pages/Dashboard";
import ProjectCard from "./project/ProjectCard";

const Read = ({ element }: { element: Element }) => {
  const { projects, loading, education, skills, workExperiences } =
    useDataContext();
  return (
    <div className="mt-10">
      {element === "projects" && (
        <div className="grid grid-flow-row">
          {loading ? (
            <>Loading...</>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="">
                <ProjectCard project={project} />
              </div>
            ))
          )}
        </div>
      )}
      {element === "education" && (
        <>
          {loading ? (
            <>Loading...</>
          ) : (
            education.map((degree) => (
              <div key={degree.id} className="">
                {degree.degree}
              </div>
            ))
          )}
        </>
      )}
      {element === "skills" && (
        <>
          {loading ? (
            <>Loading...</>
          ) : (
            skills.map((skill) => (
              <div key={skill.id} className="">
                {skill.name}
              </div>
            ))
          )}
        </>
      )}
      {element === "work-experience" && (
        <>
          {loading ? (
            <>Loading...</>
          ) : (
            workExperiences.map((workExperience) => (
              <div key={workExperience.id} className="">
                {workExperience.companyName}
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default Read;
