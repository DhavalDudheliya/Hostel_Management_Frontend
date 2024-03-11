import React, { useContext, useEffect } from "react";
import moment from "moment";
import { useFormik } from "formik";
import { validationSchema } from "./validation";

import { Gift, MessageSquare, PhoneCall } from "lucide-react";
import { useStudentContext } from "../../../../StudentContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Personal from "./StudentProfile/Personal";
import Address from "./StudentProfile/Address";
import Family from "./StudentProfile/Family";
import Education from "./StudentProfile/Education";

function StudentProfile() {
  const { student } = useStudentContext();

  const formik = useFormik({
    initialValues: {
      rollNumber: student.rollNumber,
      firstName: student.firstName,
      lastName: student.lastName,
      dateOfBirth: student.dateOfBirth,
      cast: student.cast,
      bloodGroup: student.bloodGroup,
      permenantDisease: student.permenantDisease,
      mobileNumber: student.mobileNumber,
      whatsappNumber: student.whatsappNumber,
      email: student.email,
      fatherFirstName: student.fatherFirstName,
      fatherEmail: student.fatherEmail,
      fatherMiddlename: student.fatherMiddlename,
      work: student.work,
      fatherPhoneNo: student.fatherPhoneNo,
      fatherWhatsappNo: student.fatherWhatsappNo,
      street: student.address.street,
      district: student.address.district,
      taluka: student.address.taluka,
      village: student.address.village,
      postalCode: student.address.postalCode,
      university: student.university,
      course: student.course,
      branch: student.branch,
      lastExam: student.lastExam,
      lastExamPercentage: student.lastExamPercentage,
      lastSchoolName: student.lastSchoolName,
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="pl-2">
      <div className="sm:text-lg md:text-xl lg:text-2xl uppercase font-semibold text-cyan-400 mb-4">
        {student.firstName} {student.fatherFirstName} {student.lastName}
      </div>
      <div className="inline-flex gap-4 text-sm">
        <span className="inline-flex gap-1 items-center">
          <PhoneCall size={18} />
          +91 {student.mobileNumber}
        </span>
        <span className="inline-flex gap-1 items-center text-sm">
          <MessageSquare size={18} />
          +91 {student.mobileNumber}
        </span>
      </div>
      <div className="mt-2">
        <span
          className="inline-flex gap-2 items-center text-sm font-semibold"
          style={{ color: "red" }}
        >
          <Gift color="red" size={18} />
          {moment(student.dateOfBirth).format("DD-MM-YYYY")}
        </span>
      </div>
      <div className="mt-8">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList
            className={cn(
              "ml-auto justify-start bg-transparent border h-auto pb-0 pl-0 "
            )}
          >
            <TabsTrigger
              className={cn(
                "data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-cyan-500 text-bg_dark_section transition-none px-6 pb-2 "
              )}
              value="personal"
            >
              Personal
            </TabsTrigger>
            <TabsTrigger
              className={cn(
                "data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-cyan-500 text-bg_dark_section transition-none px-6 pb-2 "
              )}
              value="address"
            >
              Address
            </TabsTrigger>
            <TabsTrigger
              className={cn(
                "data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-cyan-500 text-bg_dark_section transition-none px-6 pb-2"
              )}
              value="education"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              className={cn(
                "data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-cyan-500 text-bg_dark_section transition-none px-6 pb-2 "
              )}
              value="family"
            >
              Family
            </TabsTrigger>
          </TabsList>
          <div className="py-4">
            <TabsContent value="personal">
              <Personal formik={formik} />
            </TabsContent>
            <TabsContent value="address">
              <Address formik={formik} />
            </TabsContent>
            <TabsContent value="education">
              <Education formik={formik} />
            </TabsContent>
            <TabsContent value="family">
              <Family formik={formik} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default StudentProfile;
