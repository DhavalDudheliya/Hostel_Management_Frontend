import React from "react";
import BriefStudentProfileCard from "@/components/BriefStudentProfileCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function SearchStudentInput({
  query,
  setQuery,
  suggestionStudents,
  handleSeachedStudent,
}) {
  return (
    <div>
      <div className="font-semibold mx-1">Search student</div>
      <div className="relative">
        <Input
          type="text"
          id="query"
          name="query"
          value={query}
          onChange={(ev) => {
            setQuery(ev.target.value);
          }}
          className="shadow appearance-none border rounded-lg w-full lg:w-1/2 py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div className="absolute inset-y-0 left-100 pl-3 flex items-center pointer-events-none">
          <i className="fas fa-search text-gray-500">
            <Search size={20} />
          </i>
        </div>
        <div className="absolute w-full lg:w-1/2 z-10">
          <div className="flex flex-col cursor-pointer ">
            {suggestionStudents &&
              query.length != 0 &&
              suggestionStudents.slice(0, 3).map((student, index) => (
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleSeachedStudent(student);
                  }}
                >
                  <BriefStudentProfileCard student={student} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchStudentInput;
