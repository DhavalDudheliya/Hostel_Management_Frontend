import React, { useState } from "react";
import universities from "@/assets/universities";
import branches from "@/assets/branches";
import courses from "@/assets/courses";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Card4({ formik }) {
  const [isScholl, setIsScholl] = useState(false);

  const handleCourseChange = (value) => {
    formik.setFieldValue("course", value);
  };
  const handleBrachChange = (value) => {
    formik.setFieldValue("branch", value);
  };

  const handleUniversityChanged = (value) => {
    formik.setFieldValue("universityOrSchool", value);
    if (value == "Knowledge High School") {
      setIsScholl(true);
    } else {
      setIsScholl(false);
    }
  };

  return (
    <div>
      <CardHeader>
        <CardTitle>Current Education</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-3 gap-y-6 gap-x-16 pb-8">
          <div>
            <Label>University or School</Label>
            <div className="flex flex-row gap-2 items-center relative">
              <Select
                onValueChange={(value) => handleUniversityChanged(value)}
                name="universityOrSchool"
                value={formik.values.universityOrSchool}
                onChange={formik.handleChange}
                onOpenChange={() =>
                  formik.handleBlur({ target: { name: "universityOrSchool" } })
                }
                {...formik.getFieldProps("universityOrSchool")}
              >
                <SelectTrigger
                  className={`w-full h-8 border-gray-300 mt-1 ${
                    formik.touched.universityOrSchool &&
                    formik.errors.universityOrSchool
                      ? "outline outline-1 outline-red-500 "
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {universities.map((university) => (
                      <SelectItem key={university} value={university}>
                        {university}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="absolute top-10">
                {formik.touched.universityOrSchool &&
                formik.errors.universityOrSchool ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.universityOrSchool}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div>
              <Label>{isScholl ? "Stream" : "Course"}</Label>
            </div>
            <div className="flex flex-row gap-2 items-center relative">
              <Select
                onValueChange={(value) => handleCourseChange(value)}
                name="course"
                value={formik.values.course}
                onChange={formik.handleChange}
                onOpenChange={() =>
                  formik.handleBlur({ target: { name: "course" } })
                }
                {...formik.getFieldProps("course")}
              >
                <SelectTrigger
                  className={`w-full h-8 border-gray-300 mt-1 ${
                    formik.touched.course && formik.errors.course
                      ? "outline outline-1 outline-red-500 "
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {isScholl ? (
                      <>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="Commerce">Commerce</SelectItem>
                        <SelectItem value="Arts">Arts</SelectItem>
                      </>
                    ) : (
                      <>
                        {courses.map((course) => (
                          <SelectItem key={course} value={course}>
                            {course}
                          </SelectItem>
                        ))}
                      </>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="absolute top-10">
                {formik.touched.course && formik.errors.course ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.course}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Label>{isScholl ? "" : "Branch"}</Label>
            <div className="flex flex-row gap-2 items-center relative">
              {isScholl ? (
                <></>
              ) : (
                <>
                  <Select
                    onValueChange={(value) => handleBrachChange(value)}
                    name="branch"
                    value={formik.values.branch}
                    onChange={formik.handleChange}
                    onOpenChange={() =>
                      formik.handleBlur({ target: { name: "branch" } })
                    }
                    {...formik.getFieldProps("branch")}
                  >
                    <SelectTrigger
                      className={`w-full h-8 border-gray-300 mt-1 ${
                        formik.touched.branch && formik.errors.branch
                          ? "outline outline-1 outline-red-500 "
                          : ""
                      }`}
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {branches.map((branch) => (
                          <SelectItem key={branch} value={branch}>
                            {branch}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </>
              )}
              <div className="absolute top-10">
                {formik.touched.branch && formik.errors.branch ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.branch}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
          <div></div>
          <div className="lg:col-span-3 col-span-1 mb-2">
            <CardTitle>Formar Education</CardTitle>
          </div>
          <div>
            <Label>Last given exam</Label>
            <div className="flex flex-row gap-2 items-center relative">
              <Input
                type="text"
                name="lastExam"
                value={formik.values.lastExam}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 mb-1 ${
                  formik.touched.lastExam && formik.errors.lastExam
                    ? "outline outline-1 outline-red-500 "
                    : ""
                }`}
                {...formik.getFieldProps("lastExam")}
              />
              <div className="absolute top-10">
                {formik.touched.lastExam && formik.errors.lastExam ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.lastExam}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Label>Exam percentage (%)</Label>
            <div className="flex flex-row gap-2 items-center relative">
              <Input
                type="text"
                name="lastExamPrtg"
                value={formik.values.lastExamPrtg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 mb-1 ${
                  formik.touched.lastExamPrtg && formik.errors.lastExamPrtg
                    ? "outline outline-1 outline-red-500 "
                    : ""
                }`}
                {...formik.getFieldProps("lastExamPrtg")}
              />
              <div className="absolute top-10">
                {formik.touched.lastExamPrtg && formik.errors.lastExamPrtg ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.lastExamPrtg}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Label>School name</Label>
            <div className="flex flex-row gap-2 items-center relative">
              <Input
                type="text"
                name="lastSchoolName"
                value={formik.values.lastSchoolName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 mb-1 ${
                  formik.touched.lastSchoolName && formik.errors.lastSchoolName
                    ? "outline outline-1 outline-red-500 "
                    : ""
                }`}
                {...formik.getFieldProps("lastSchoolName")}
              />
              <div className="absolute top-10">
                {formik.touched.lastSchoolName &&
                formik.errors.lastSchoolName ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.lastSchoolName}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
}

export default Card4;
