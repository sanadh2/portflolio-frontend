import { Education } from "@/types";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const EducationContext = createContext<
  | {
      loading: boolean;
      error: null | string;
      education: Education[];
    }
  | undefined
>(undefined);

export const EducationContextProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState<{
    loading: boolean;
    error: null | string;
    education: Education[];
  }>({
    loading: true,
    error: null,
    education: [],
  });
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          `https://portfolio-backend-rust-zeta.vercel.app/education/all`
        );
        if (!response.ok) return;
        const res: {
          success: boolean;
          projects: Education[];
        } = await response.json();

        setValue({
          loading: false,
          error: null,
          education: res.projects,
        });
      } catch (error) {
        console.log(error);
        setValue({
          loading: false,
          error: "Failed to fetch education",
          education: [],
        });
      }
    };

    fetchApi();
  }, []);
  return (
    <EducationContext.Provider value={value}>
      {children}
    </EducationContext.Provider>
  );
};

export const useEducationContext = () => {
  const context = useContext(EducationContext);
  if (!context)
    throw new Error(
      "only use useProjectContext hook inside EducationContextProvider"
    );
  return context;
};
