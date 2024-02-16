import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

function Card2({ formik }) {
  const handleWorkTypeChange = (value) => {
    formik.setFieldValue("work", value);
  };

  return (
    <div>
      {/* <Card> */}
      <CardHeader>
        <CardTitle>Father's Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-3 gap-y-6 gap-x-16 pb-2">
          <div>
            <Label>First name</Label>
            <div className="flex flex-row gap-2 items-center relative">
              <Input
                type="text"
                name="fatherName"
                value={formik.values.fatherName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 mb-1 ${
                  formik.touched.fatherName && formik.errors.fatherName
                    ? "outline outline-1 outline-red-500 "
                    : ""
                }`}
                {...formik.getFieldProps("fatherName")}
              />
              <div className="absolute top-10">
                {formik.touched.fatherName && formik.errors.fatherName ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.fatherName}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Label>Grandfather name</Label>
            <div className="flex flex-row gap-2 items-center relative">
              <Input
                type="text"
                name="grandfatherName"
                value={formik.values.grandfatherName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 mb-1 ${
                  formik.touched.grandfatherName &&
                  formik.errors.grandfatherName
                    ? "outline outline-1 outline-red-500 "
                    : ""
                }`}
                {...formik.getFieldProps("grandfatherName")}
              />
              <div className="absolute top-10">
                {formik.touched.grandfatherName &&
                formik.errors.grandfatherName ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.grandfatherName}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Label>Phone number</Label>
            <div className="flex flex-row gap-2 items-center relative">
              <Input
                type="text"
                name="fatherPNo"
                value={formik.values.fatherPNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 mb-1 ${
                  formik.touched.fatherPNo && formik.errors.fatherPNo
                    ? "outline outline-1 outline-red-500 "
                    : ""
                }`}
                {...formik.getFieldProps("fatherPNo")}
              />
              <div className="absolute top-10">
                {formik.touched.fatherPNo && formik.errors.fatherPNo ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.fatherPNo}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Label>Whatsapp Number</Label>
            <div className="flex flex-row gap-2 items-center relative">
              <Input
                type="text"
                name="fatherWNo"
                value={formik.values.fatherWNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 mb-1 ${
                  formik.touched.fatherWNo && formik.errors.fatherWNo
                    ? "outline outline-1 outline-red-500 "
                    : ""
                }`}
                {...formik.getFieldProps("fatherWNo")}
              />
              <div className="absolute top-10">
                {formik.touched.fatherWNo && formik.errors.fatherWNo ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.fatherWNo}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Label>Email adress</Label>
            <div className="flex flex-row gap-2 items-center relative">
              <Input
                type="text"
                name="fEmail"
                value={formik.values.fEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`mt-1 mb-1 ${
                  formik.touched.fEmail && formik.errors.fEmail
                    ? "outline outline-1 outline-red-500 "
                    : ""
                }`}
                {...formik.getFieldProps("fEmail")}
              />
              <div className="absolute top-10">
                {formik.touched.fEmail && formik.errors.fEmail ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.fEmail}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Label>Work type</Label>
            <div className="flex flex-row gap-2 items-center relative">
              <Select
                onValueChange={(value) => handleWorkTypeChange(value)}
                name="work"
                value={formik.values.work}
                onOpenChange={() =>
                  formik.handleBlur({ target: { name: "work" } })
                }
                {...formik.getFieldProps("work")}
              >
                <SelectTrigger
                  className={`w-full h-8 border-gray-300 mt-1 ${
                    formik.touched.work && formik.errors.work
                      ? "outline outline-1 outline-red-500 "
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="job">Job</SelectItem>
                    <SelectItem value="buiseness">Buiseness</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="absolute top-10">
                {formik.touched.work && formik.errors.work ? (
                  <div className="ml-1 text-xs text-red-600 font-medium">
                    {formik.errors.work}
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

export default Card2;
