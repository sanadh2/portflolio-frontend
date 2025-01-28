import { Project } from "@/types";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  console.log(project);
  return (
    <MorphingDialog
      transition={{
        type: "keyframes",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <MorphingDialogImage
          src={project.imageUrl!}
          alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
          className="h-48 w-full object-cover"
        />
        <div className="flex grow flex-row items-end justify-between px-3 py-2">
          <div>
            <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
              {"Blog"}
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer className="">
        <MorphingDialogContent
          style={{
            borderRadius: "8px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          <MorphingDialogImage
            src={project.imageUrl!}
            alt={project.title + " img"}
            className="h-full w-full"
          />
          <div className="p-6 -mt-40 backdrop-blur backdrop-brightness-[0.23]">
            <MorphingDialogTitle className="text-emerald-300 font-roboto font-semibold tracking-wide text-lg">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="flex p-0 m-0 pt-2 flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="py-0.5 px-1 rounded-md bg-neutral-200 text-black whitespace-nowrap text-xs"
                >
                  {tech}
                </span>
              ))}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
              className="max-h-[200px] text-sm pt-8 overflow-y-scroll scroll-smooth whitespace-pre-line text-white"
            >
              {project.description}
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
