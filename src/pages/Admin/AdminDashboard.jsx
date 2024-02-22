import { React, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BriefStudentProfileCard from "@/components/BriefStudentProfileCard";

function StudentsProfile() {
  const { user, setUser } = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [suggestionStudents, setSuggestionStudents] = useState([]);

  const navigate = useNavigate();

  if (!user || (user && user.role !== "Admin")) {
    navigate("/login");
  }

  useEffect(() => {
    if (query.length === 0) {
      setSuggestionStudents([]);
      return;
    } else {
      axios.get(`/admin/getSearchSuggestionStudents?q=${query}`).then((res) => {
        const data = res.data.students;
        setSuggestionStudents(data);
        // console.log(suggestionStudents);
      });
    }
  }, [query]);

  return (
    <>
      <div className="py-4">
        <div className="mx-6">
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
            <div className="absolute w-full lg:w-1/2">
              <div className="flex flex-col">
                {suggestionStudents &&
                  query.length != 0 &&
                  suggestionStudents
                    .slice(0, 3)
                    .map((student, index) => (
                      <BriefStudentProfileCard student={student} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentsProfile;
