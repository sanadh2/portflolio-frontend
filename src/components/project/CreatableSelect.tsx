import { AsteriskIcon } from "lucide-react";
import React from "react";
import { FieldError, Merge } from "react-hook-form";
import { StylesConfig, GroupBase } from "react-select";
import Select from "react-select/creatable";
import { Theme, useTheme } from "../theme-provider";

export type Option = {
  readonly value: string;
  readonly label: string;
};

const techStackOptions: readonly Option[] = [
  { value: "react-js", label: "React JS" },
  { value: "node-js", label: "Node JS" },
  { value: "next-js", label: "Next JS" },
  { value: "express-js", label: "Express JS" },
  { value: "hono-js", label: "Hono JS" },
  { value: "react-hook-form", label: "React Hook Form" },
  { value: "redux", label: "Redux" },
  { value: "jwt", label: "JWT" },
  { value: "mongo-db", label: "Mongo DB" },
  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "Postgre SQL" },
  { value: "redis", label: "Redis" },
];
const getStyles = (theme: Theme) => {
  const colourStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
    control: (styles) => ({
      ...styles,
      borderRadius: 5,
      backgroundColor: theme === "dark" ? "black" : "white",
      border: theme == "dark" ? "1px solid #d4d4d4" : "1px solid #d4d4d4",
      color: theme === "dark" ? "white" : "black",
      "&:hover": {
        border: theme == "dark" ? "1px solid #e5e5e5" : "1px solid black",
        boxShadow: theme == "dark" ? "1px solid #e5e5e5" : "1px solid black",
        outline: "none",
      },
      cursor: "text",
      transitionDuration: "500ms",
      transitionTimingFunction: "ease-in",
      outline: "none",
      ":active": {
        border: theme == "dark" ? "1px solid #e5e5e5" : "1px solid black",
        boxShadow: theme == "dark" ? "1px solid #e5e5e5" : "1px solid black",
        outline: "none",
      },
      "&:focus": {
        border: theme == "dark" ? "1px solid #e5e5e5" : "1px solid black",
        boxShadow: theme == "dark" ? "1px solid #e5e5e5" : "1px solid black",
        outline: "none",
      },
      boxShadow: theme === "dark" ? "white" : "black",
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#1c1c1c" : "whitesmoke",
      color: theme === "dark" ? "white" : "black",
      "&:hover": {
        border: theme === "light" ? "1px solid #ededed" : "1px solid #212121",
        boxShadow: theme === "dark" ? "white" : "black",
        color: theme === "dark" ? "white" : "black",
        backgroundColor: theme === "dark" ? "black" : "whitesmoke",
      },
      padding: 10,
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#1c1c1c" : "whitesmoke",
    }),
  };
  return colourStyles;
};

type Props = React.ComponentProps<typeof Select> & {
  formError: Merge<FieldError, (FieldError | undefined)[]> | undefined;
};

const CreatableSelect = ({ formError, ...props }: Props) => {
  const theme = useTheme();
  return (
    <div className="grid gap-2">
      <span className="flex gap-1 items-start">
        <span className={formError ? "text-red-500" : ""}>Tech Stack </span>
        <AsteriskIcon className="scale-75 text-red-500" />
      </span>
      <Select
        {...props}
        closeMenuOnSelect={false}
        isMulti
        options={techStackOptions}
        styles={getStyles(theme.theme)}
        aria-label="Tech Stack Selection"
      />
      {formError && <p className="text-sm text-red-500">{formError.message}</p>}
    </div>
  );
};

export default CreatableSelect;
