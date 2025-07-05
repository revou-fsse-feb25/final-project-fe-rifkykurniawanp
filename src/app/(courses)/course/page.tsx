"use client"

import { useState } from "react"
import { Course } from "@/types/course"
import { teaCourse } from "@/app/data/tea-course"
import { coffeeCourse } from "@/app/data/coffee-course"
import { herbalCourse } from "@/app/data/herb-course"
import { CourseTabs } from "@/components/course/course-tabs"

const allCourses: Course[] = [teaCourse, coffeeCourse, herbalCourse]

export default function CoursePage() {
  const [selectedCourse, setSelectedCourse] = useState<Course>(allCourses[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Beverage Mastery Academy
          </h1>
          <p className="text-slate-600 text-lg">
            Master the art of tea, coffee, and herbal preparations
          </p>
        </div>

        <CourseTabs
          courses={allCourses}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      </div>
    </div>
  )
}
