import { Project } from "@/types";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const ProjectContext = createContext<
  | {
      loading: boolean;
      error: null | string;
      projects: Project[];
    }
  | undefined
>(undefined);

export const ProjectContextProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState<{
    loading: boolean;
    error: null | string;
    projects: Project[];
  }>({
    loading: true,
    error: null,
    projects: [],
  });
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          `https://portfolio-backend-rust-zeta.vercel.app/projects/all`
        );
        if (!response.ok) return;
        const res: {
          success: boolean;
          projects: Project[];
        } = await response.json();

        setValue({
          loading: false,
          error: null,
          projects: res.projects,
        });
      } catch (error) {
        console.log(error);
        setValue({
          loading: false,
          error: "Failed to fetch projects",
          projects: [],
        });
      }
    };

    fetchApi();
  }, []);
  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error(
      "only use useProjectContext hook inside ProjectContextProvider"
    );
  return context;
};
