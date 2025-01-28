import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Education, Project, Skill, WorkExperience } from "@/types";

const DataContext = createContext<
  | {
      loading: boolean;
      error: string | null;
      projects: Project[];
      education: Education[];
      skills: Skill[];
      workExperiences: WorkExperience[];
    }
  | undefined
>(undefined);

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState<{
    loading: boolean;
    error: string | null;
    projects: Project[];
    education: Education[];
    skills: Skill[];
    workExperiences: WorkExperience[];
  }>({
    loading: true,
    error: null,
    projects: [],
    education: [],
    skills: [],
    workExperiences: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = {
          education: `https://portfolio-backend-rust-zeta.vercel.app/education/all`,
          projects: `https://portfolio-backend-rust-zeta.vercel.app/projects/all`,
          skills: `https://portfolio-backend-rust-zeta.vercel.app/skills/all`,
          workExperiences: `https://portfolio-backend-rust-zeta.vercel.app/workExperience/all`,
        };

        const responses = await Promise.all(
          Object.values(endpoints).map((url) => fetch(url))
        );

        if (responses.some((response) => !response.ok)) {
          throw new Error("Failed to fetch data");
        }

        const [educationRes, projectsRes, skillsRes, workExperiencesRes] =
          await Promise.all(responses.map((res) => res.json()));

        setValue({
          loading: false,
          error: null,
          education: educationRes.education || [],
          projects: projectsRes.projects || [],
          skills: skillsRes.skills || [],
          workExperiences: workExperiencesRes.workExperiences || [],
        });
      } catch (error) {
        console.error(error);
        setValue({
          loading: false,
          error: "Failed to fetch data",
          education: [],
          projects: [],
          skills: [],
          workExperiences: [],
        });
      }
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context)
    throw new Error("useDataContext must be used within a DataContextProvider");
  return context;
};
