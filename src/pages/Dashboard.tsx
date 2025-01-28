export type Element = "projects" | "education" | "skills" | "work-experience";

const elements: { name: Element }[] = [
  {
    name: "projects",
  },
  {
    name: "education",
  },
  {
    name: "skills",
  },
  {
    name: "work-experience",
  },
];

import Crud from "@/components/Crud";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ToggleTheme } from "@/components/ToggleTheme";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DataContextProvider } from "@/hooks/useDataContext";
import { useCallback, useLayoutEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [defaultElement, setDefaultElement] = useState<Element>();

  useLayoutEffect(() => {
    const defaultElementParam = searchParams.get("element");
    if (
      defaultElementParam === "projects" ||
      defaultElementParam === "education" ||
      defaultElementParam === "skills" ||
      defaultElementParam === "work-experience"
    ) {
      setDefaultElement(defaultElementParam);
    }
  }, [searchParams]);

  const handleAccordionChange = useCallback(
    (element: Element) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("element", element);
      setSearchParams(newSearchParams);
      setDefaultElement(element);
    },
    [searchParams, setSearchParams]
  );

  return (
    <div className=" roboto-flex-400 min-h-svh ">
      <header className="h-20 flex justify-center items-center text-4xl">
        <h1>Portfolio DashBoard</h1>
        <ToggleTheme />
      </header>
      <ErrorBoundary>
        <div className="container mx-auto">
          <DataContextProvider>
            <div className="mt-20 grid gap-5">
              <Accordion
                type="single"
                onValueChange={handleAccordionChange}
                value={defaultElement}
                collapsible
              >
                {elements.map((el) => (
                  <AccordionItem
                    data-item={el.name === defaultElement ? "open" : "closed"}
                    key={el.name}
                    value={el.name}
                  >
                    <AccordionTrigger className="uppercase ">
                      {el.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <Crud element={el.name} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </DataContextProvider>
        </div>
      </ErrorBoundary>
    </div>
  );
}
