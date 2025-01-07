"use client";

import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Main() {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-y-10">
      {tasks?.map((task) => (
        <div
          key={task._id}
          className={cn(
            "text-5xl",
            task.isCompleted ? "text-green-500" : "text-yellow-500"
          )}
        >
          {task.text}
        </div>
      ))}
    </main>
  );
}
