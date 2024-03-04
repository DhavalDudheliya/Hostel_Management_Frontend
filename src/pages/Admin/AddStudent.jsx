import React, { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

import { validationSchema } from "./validation";
import { UserContext } from "../../../UserContext";
import Card1 from "@/components/newStudentForm/Card1";
import Card2 from "@/components/newStudentForm/Card2";
import Card3 from "@/components/newStudentForm/Card3";
import Card4 from "@/components/newStudentForm/Card4";
import Card5 from "@/components/newStudentForm/Card5";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function AddStudent() {
  const { user, setUser } = useContext(UserContext);
  const [submitted, setSubmitted] = useState(false);

  if (!user || (user && user.role !== "Admin")) {
    return <Navigate to="/login" />;
  }

  const formik = useFormik({
    initialValues: {
      rollNumber: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      cast: "",
      bloodGroup: "",
      pNo: "",
      wNo: "",
      email: "",
      fatherName: "",
      fEmail: "",
      grandfatherName: "",
      work: "",
      fatherPNo: "",
      fatherWNo: "",
      street: "",
      district: "",
      taluka: "",
      village: "",
      pCode: "",
      universityOrSchool: "",
      course: "",
      branch: "",
      lastExam: "",
      lastExamPrtg: "",
      lastSchoolName: "",
      rollNumberRange: "",
      permenantDisease: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios
          .post("/admin/createstudent", {
            rollNumber: formik.values.rollNumber,
            firstName: formik.values.firstName,
            lastName: formik.values.lastName,
            Street: formik.values.street,
            village: formik.values.village,
            taluka: formik.values.taluka,
            city: formik.values.district,
            postalCode: formik.values.pCode,
            dateOfBirth: formik.values.birthDate,
            cast: formik.values.cast,
            permenantDisease: formik.values.permenantDisease,
            mobileNumber: formik.values.pNo,
            whatsappNumber: formik.values.wNo,
            email: formik.values.email,
            university: formik.values.universityOrSchool,
            course: formik.values.course,
            branch: formik.values.branch
              ? formik.values.branch
              : formik.values.course,
            lastSchoolName: formik.values.lastSchoolName,
            lastExam: formik.values.lastExam,
            lastExamPercentage: formik.values.lastExamPrtg,
            fatherFirstName: formik.values.fatherName,
            fatherMiddlename: formik.values.grandfatherName,
            fatherPhoneNo: formik.values.fatherPNo,
            fatherWhatsappNo: formik.values.fatherWNo,
            fatherEmail: formik.values.fEmail,
            work: formik.values.work,
          })
          .then((res) => {
            if (res.status === 200) {
              toast.success("Successfully created");
              setSubmitted(false);
            } else {
              toast.error("Failed to create student");
            }
          })
          .catch((err) => {
            toast.error("Failed to create student");
          });
      } catch (error) {
        toast.error("Failed to create student");
      }
    },
  });

  const handleClearForm = (ev) => {
    ev.preventDefault();
    formik.resetForm();
    setSubmitted(false);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setSubmitted(true);
    formik.handleSubmit();
  };

  return (
    <>
      <div className="pt-6 pb-16 px-8 lg:pr-8 lg:pl-10">
        <h1 className="lg:text-3xl text-2xl font-bold text-bg_dark_section my-5 mx-2">
          New Student Details Form
        </h1>
        <form className="flex flex-col">
          <div className="flex flex-col gap-y-8">
            <div>
              <Card>
                <Card1 formik={formik} submitted={submitted} />
              </Card>
            </div>
            <div className="col-span-2">
              <Card>
                <Card2 formik={formik} submitted={submitted} />
              </Card>
            </div>
            <div className="col-span-2 col-start-2 row-start-2">
              <Card>
                <Card3 formik={formik} submitted={submitted} />
              </Card>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-8 gap-8">
            <div>
              <Card>
                <Card4 formik={formik} submitted={submitted} />
              </Card>
            </div>
            <div>
              <Card>
                <Card5 formik={formik} submitted={submitted} />
              </Card>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-full mt-8 gap-4">
            <Button
              size="lg"
              variant="destructive"
              onClick={handleSubmit}
              type="submit"
            >
              Add Student
            </Button>
            <Button size="lg" onClick={handleClearForm}>
              Clear
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddStudent;
