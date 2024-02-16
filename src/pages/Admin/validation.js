import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string()
    .min(2, "At least 2 characters required")
    .max(15, "Maximum 15 characters")
    .matches(/^[a-zA-Z\s]*$/, "Invalid characters in name")
    .required("Name is required"),
  lastName: Yup.string()
    .min(2, "At least 2 characters required")
    .max(15, "Maximum 15 characters")
    .matches(/^[a-zA-Z\s]*$/, "Invalid characters in name")
    .required("Name is required"),
  birthDate: Yup.date().nullable().required("Date of birth is required"),
  cast: Yup.string()
    .min(2, "At least 2 characters required")
    .max(15, "Maximum 15 characters")
    .matches(/^[a-zA-Z\s]*$/, "Invalid characters in name")
    .required("Cast is required"),
  bloodGroup: Yup.string().required("Please select an option"),
  pNo: Yup.string()
    .matches(/^\d{10}$/, "Phone number is not valid")
    .required("Phone number is required"),
  wNo: Yup.string()
    .matches(/^\d{10}$/, "Whatsapp number is not valid")
    .required("Whatsapp number number is required"),
  fatherName: Yup.string()
    .min(2, "At least 2 characters required")
    .max(15, "Maximum 15 characters")
    .matches(/^[a-zA-Z\s]*$/, "Invalid characters in name")
    .required("Name is required"),
  grandfatherName: Yup.string()
    .min(2, "At least 2 characters required")
    .max(15, "Maximum 15 characters")
    .matches(/^[a-zA-Z\s]*$/, "Invalid characters in name")
    .required("Name is required"),
  fatherPNo: Yup.string()
    .matches(/^\d{10}$/, "Phone number is not valid")
    .required("Phone number is required"),
  fatherWNo: Yup.string()
    .matches(/^\d{10}$/, "Whatsapp number is not valid")
    .required("Whatsapp number number is required"),
  fEmail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  pCode: Yup.string()
    .matches(/^\d{6}$/, "Postal code must be 6 digits")
    .required("Postal code is required"),
  village: Yup.string()
    .min(2, "At least 2 characters required")
    .max(15, "Maximum 15 characters")
    .matches(/^[a-zA-Z\s]*$/, "Invalid characters in name")
    .required("village name is required"),
  street: Yup.string().required("Street address is required"),
  lastSchoolName: Yup.string().required("School name is required"),
  lastExamPrtg: Yup.number()
    .required("Exam percentage is required")
    .typeError("Enter a valid number")
    .min(0, "Percentage must be at least 0")
    .max(100, "Percentage must not exceed 100")
    .positive("Percentage must be a positive number"),
  lastExam: Yup.string()
    .min(2, "At least 2 characters required")
    .max(12, "Maximum 10 characters")
    .matches(/^[a-zA-Z\s]*$/, "Invalid characters in name")
    .required("village name is required"),
  work: Yup.string().required("Please select an option"),
  universityOrSchool: Yup.string().required("Please select an option"),
  course: Yup.string().required("Please select an option"),
  branch: Yup.string().required("Please select an option"),
  district: Yup.string().required("Please select an option"),
  taluka: Yup.string().required("Please select an option"),
  rollNumberRange: Yup.string().required("Please select an option"),
  rollNumber: Yup.string()
    .matches(/^\d{3}$/, "Roll number is not valid")
    .required("Roll number is required"),
});
