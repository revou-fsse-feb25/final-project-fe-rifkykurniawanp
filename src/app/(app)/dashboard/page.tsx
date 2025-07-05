// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Lesson, Course } from "@/types/course";
// import { teaCourse } from "@/app/data/tea-course";
// import { coffeeCourse } from "@/app/data/coffee-course";
// import { herbalCourse } from "@/app/data/herb-course";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// const allCourses: Course[] = [teaCourse, coffeeCourse, herbalCourse];

// export default function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
//   const router = useRouter();
  
//   const [lessonId, setLessonId] = useState<string | null>(null);
//   const [lesson, setLesson] = useState<Lesson | null>(null);
//   const [course, setCourse] = useState<Course | null>(null);
//   const [lessonIndex, setLessonIndex] = useState<number>(0);
//   const [totalLessons, setTotalLessons] = useState<number>(0);
//   const [currentModule, setCurrentModule] = useState<any>(null);

//   // First useEffect: Get the lessonId from params
//   useEffect(() => {
//     const getParams = async () => {
//       const resolvedParams = await params;
//       setLessonId(resolvedParams.lessonId);
//     };
//     getParams();
//   }, [params]);

//   // Second useEffect: Find the lesson once we have the lessonId
//   useEffect(() => {
//     if (!lessonId) return;
    
//     for (const course of allCourses) {
//       for (const module of course.modules) {
//         const index = module.lessons.findIndex((l) => l.id === lessonId);
//         if (index !== -1) {
//           setLesson(module.lessons[index]);
//           setLessonIndex(index);
//           setTotalLessons(module.lessons.length);
//           setCourse(course);
//           setCurrentModule(module);
//           return;
//         }
//       }
//     }
//   }, [lessonId]);

//   const goToNextLesson = () => {
//     if (!currentModule || !lesson) return;
//     const index = currentModule.lessons.findIndex((l: Lesson) => l.id === lesson.id);
//     if (index < currentModule.lessons.length - 1) {
//       const nextLesson = currentModule.lessons[index + 1];
//       router.push(`/lesson/${nextLesson.id}`);
//     }
//   };

//   const goToPreviousLesson = () => {
//     if (!currentModule || !lesson) return;
//     const index = currentModule.lessons.findIndex((l: Lesson) => l.id === lesson.id);
//     if (index > 0) {
//       const previousLesson = currentModule.lessons[index - 1];
//       router.push(`/lesson/${previousLesson.id}`);
//     }
//   };

//   if (!lesson || !course) return <div className="text-center py-10">Loading...</div>;

//   return (
//     <div className="max-w-4xl mx-auto py-8">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold mb-1">{lesson.title}</h1>
//         <p className="text-slate-600 mb-2">{lesson.description}</p>
//         <Badge variant="outline" className="capitalize">{lesson.type}</Badge>
//         <div className="text-sm text-slate-500 mt-1">Duration: {lesson.duration}</div>
//       </div>

//       <div className="mb-6">
//         {lesson.content && (
//           <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: lesson.content }} />
//         )}
//         {lesson.videoUrl && (
//           <div className="mt-4">
//             <iframe
//               src={lesson.videoUrl}
//               className="w-full aspect-video"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               title={lesson.title}
//             />
//           </div>
//         )}
//       </div>

//       <div className="flex justify-between items-center mt-8">
//         <Button onClick={goToPreviousLesson} disabled={lessonIndex === 0}>
//           ← Previous
//         </Button>
//         <div className="text-sm text-slate-600">
//           Lesson {lessonIndex + 1} of {totalLessons}
//         </div>
//         <Button onClick={goToNextLesson} disabled={lessonIndex + 1 === totalLessons}>
//           Next →
//         </Button>
//       </div>
//     </div>
//   );
// }