import { React, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import "react-toastify/dist/ReactToastify.css";
import * as myConstants from "../../../myConstants";
import axios from "axios";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

function StudentsProfile() {
  const { user, setUser } = useContext(UserContext);
  const [students, setStudents] = useState([]);
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
    }
    axios.get(`/admin/getSearchSuggestionStudents?q=${query}`).then((res) => {
      const data = res.data.students;
      setSuggestionStudents(data);
      // console.log(suggestionStudents);
    });
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
              {suggestionStudents &&
                suggestionStudents.slice(0, 3).map((student, index) => (
                  <div className="flex flex-row gap-4">
                    <div className="bg-slate-100 w-full border rounded-lg mt-2 border-gray-400/50 shadow p-3">
                      <div>
                        {students.profilePhoto ? (
                          <img
                            className="rounded-xl aspect-square object-cover border-2 border-bg_dark_section"
                            src={
                              myConstants.BACKEND_URL +
                              "/uploads/" +
                              students.profilePhoto
                            }
                          ></img>
                        ) : (
                          <img
                            className="rounded aspect-square object-cover border border-bg_dark_section/50 w-20"
                            src={
                              myConstants.BACKEND_URL + "/uploads/default.png"
                            }
                          ></img>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <div className="font-medium text-base mb-1">
                          {student.firstName} {student.fatherFirstName}{" "}
                          {student.lastName}
                        </div>
                        <div className="flex flex-row gap-2 mb-1">
                          <Badge variant="primary_2">
                            {student.rollNumber}
                          </Badge>
                          <Badge variant="primary">{student.roomNumber}</Badge>
                        </div>
                        <div className="flex flex-row gap-2">
                          <Badge variant="primary_2">{student.course}</Badge>
                          <Badge variant="primary">{student.branch}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentsProfile;
