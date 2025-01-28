import { cn } from "@/lib/utils";
import { Element } from "@/pages/Dashboard";
import { useCallback, useLayoutEffect, useState } from "react";
import Read from "./Read";
import CreateProject from "./project/CreateProject";
import UpdateProject from "./project/UpdateProject";
import { useSearchParams } from "react-router";
import DeleteProject from "./project/DeleteProject";

type OperationType = "read" | "create" | "update" | "delete";

const operationsList: { operationType: OperationType }[] = [
  {
    operationType: "read",
  },
  {
    operationType: "create",
  },
  {
    operationType: "update",
  },
  {
    operationType: "delete",
  },
];

export default function Crud({ element }: { element: Element }) {
  const [selectedOperation, setSelectedOperation] = useState<
    OperationType | undefined
  >();
  const [searchParams, setSearchParams] = useSearchParams();

  useLayoutEffect(() => {
    const operationQueryParam = searchParams.get("operation");
    if (
      operationQueryParam === "read" ||
      operationQueryParam === "create" ||
      operationQueryParam === "update" ||
      operationQueryParam === "delete"
    ) {
      setSelectedOperation(operationQueryParam);
    }
  }, [searchParams]);

  const handleOperationTypeChange = useCallback(
    (operationType: OperationType) => {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.set("operation", operationType);
      setSearchParams(updatedSearchParams);
      setSelectedOperation(operationType);
    },
    [searchParams, setSearchParams]
  );

  return (
    <div className="mt-10 w-full">
      <nav className="flex justify-evenly gap-3">
        {operationsList.map((operation) => (
          <button
            onClick={() => handleOperationTypeChange(operation.operationType)}
            className={cn(
              "uppercase transition-colors duration-300 text-sm",
              selectedOperation === operation.operationType
                ? "text-text"
                : "text-secondaryText"
            )}
            key={operation.operationType}
          >
            {operation.operationType}
          </button>
        ))}
      </nav>
      <div className="min-h-40 w-full">
        {selectedOperation === "read" && (
          <Read key={element} element={element} />
        )}
        {selectedOperation === "create" && element === "projects" && (
          <CreateProject key={element} />
        )}
        {selectedOperation === "update" && element === "projects" && (
          <UpdateProject key={element} />
        )}
        {selectedOperation === "delete" && element === "projects" && (
          <DeleteProject />
        )}
      </div>
    </div>
  );
}
