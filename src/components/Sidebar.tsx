import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((data) => (
          <Lesson
            key={data.id}
            title={data.title}
            slug={data.slug ?? ""}
            availableAt={new Date(data.availableAt)}
            type={data.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
