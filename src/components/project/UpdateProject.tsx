import { useDataContext } from "@/hooks/useDataContext";
import { Project } from "@/types";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { AsteriskIcon } from "lucide-react";
import CreatableSelect, { Option } from "./CreatableSelect";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function UpdateProject() {
  const { projects, loading } = useDataContext();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="">
      {selectedProject == null ? (
        <ProjectsList
          projects={projects}
          setSelectedProject={setSelectedProject}
        />
      ) : (
        <UpdateProjectForm project={selectedProject} />
      )}
    </div>
  );
}

type ProjectsListProps = {
  projects: Project[];
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
};
function ProjectsList({ projects, setSelectedProject }: ProjectsListProps) {
  return (
    <div className="">
      {projects.map((project) => (
        <button
          onClick={() => setSelectedProject(project)}
          key={project.id}
          className=""
        >
          <h4>{project.title}</h4>
        </button>
      ))}
    </div>
  );
}

type UpdateProjectFormProps = {
  project: Project;
};

const projectSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long." })
    .nonempty({ message: "Title is required." }),
  description: z.string().nonempty({ message: "Description is required." }),
  techStack: z.array(z.string()).min(1, {
    message: "At least one technology is required in the tech stack.",
  }),
  imageUrl: z
    .string()
    .url({ message: "Image URL must be a valid URL." })
    .optional(),
  projectUrl: z
    .string()
    .url({ message: "Project URL must be a valid URL." })
    .optional(),
  repoUrl: z
    .string()
    .url({ message: "Repository URL must be a valid URL." })
    .optional(),
});

type NewProject = z.infer<typeof projectSchema>;

function UpdateProjectForm({ project }: UpdateProjectFormProps) {
  const form = useForm<NewProject>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project.title || "",
      description: project.description || "",
      techStack: project.techStack || [],
      imageUrl: project.imageUrl || undefined,
      projectUrl: project.projectUrl || undefined,
      repoUrl: project.repoUrl || undefined,
    },
  });

  const onSubmit = async (values: NewProject) => {
    try {
      const response = await fetch(
        "https://portfolio-backend-rust-zeta.vercel.app/projects/update/" +
          project.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const data = await response.json();
      console.log(values);
      console.log("Project created successfully:", data);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="mt-10 py-3">
      <h3 className="text-green-600 text-center text-xl my-4">
        {project.title}
      </h3>
      <div className=" flex justify-center items-center">
        <Form {...form}>
          <form className="space-y-4 bg-background">
            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="flex">
                      <span>Title</span>
                      <AsteriskIcon className="stroke-red-500 size-4" />
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter project title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormLabel className="flex">
                      <span>Description</span>
                      <AsteriskIcon className="stroke-red-500 size-4" />
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-full resize"
                        placeholder="Enter project description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <CreatableSelect
              onChange={(newValue: unknown) => {
                const values = newValue as Option[];
                form.setValue(
                  "techStack",
                  values.map((value) => value.value)
                );
              }}
              defaultValue={project.techStack.map((item) => {
                const label = item
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
                return { value: item, label };
              })}
              formError={form.formState.errors.techStack}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex">
                    <span>Image URL</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project image url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectUrl"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex">
                    <span>Project URL</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter project url" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repoUrl"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex">
                    <span>Repository URL</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Repository url" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.formState.errors.root && (
              <p>{form.formState.errors.root.message}</p>
            )}
            <AlertDialog>
              <AlertDialogTrigger asChild className="">
                <Button className="float-end w-fit">Update Project</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently update
                    project details from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button type="submit">Continue</Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </form>
              </AlertDialogContent>
            </AlertDialog>
          </form>
        </Form>
      </div>
    </div>
  );
}
