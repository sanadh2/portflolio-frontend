import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
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

export default function CreateProject() {
  const form = useForm<NewProject>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      techStack: [],
      imageUrl: undefined,
      projectUrl: undefined,
      repoUrl: undefined,
    },
  });

  const onSubmit = async (values: NewProject) => {
    try {
      const response = await fetch(
        "https://portfolio-backend-rust-zeta.vercel.app/projects/new",
        {
          method: "POST",
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
    <div className="mt-10 py-3 flex justify-center items-center w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 bg-background "
        >
          <div className="flex gap-3 w-full">
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
                    <Input
                      className="min-w-52"
                      placeholder="Enter project title"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your project's title.
                  </FormDescription>
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
                      className="max-w-[40rem] w-60 resize"
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
