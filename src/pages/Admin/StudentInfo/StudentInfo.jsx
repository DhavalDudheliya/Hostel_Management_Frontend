import { React, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../../UserContext";
import { useStudentContext } from "../../../../StudentContext";
import "react-toastify/dist/ReactToastify.css";

import SearchStudentInput from "./SearchStudentInput";
import BriefInfoCard from "./BriefInfoCard";
import FullInfoCard from "./FullInfoCard";

function StudentsProfile() {
  const { student, setStudent } = useStudentContext();
  const { user, setUser } = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [suggestionStudents, setSuggestionStudents] = useState([]);
  const [clearSuggestions, setClearSuggestions] = useState(false);

  const navigate = useNavigate();

  if (!user || (user && user.role !== "Admin")) {
    navigate("/login");
  }

  useEffect(() => {
    // Cleanup function to clear student data when the component is unmounted
    return () => {
      setStudent("");
    };
  }, []);

  useEffect(() => {
    if (query.length === 0) {
      setSuggestionStudents([]);
      return;
    } else {
      if (!clearSuggestions) {
        axios
          .get(`/admin/getSearchSuggestionStudents?q=${query}`)
          .then((res) => {
            const data = res.data.students;
            setSuggestionStudents(data);
          });
      }
      setClearSuggestions(false);
    }
  }, [query]);

  async function handleSeachedStudent(student) {
    setStudent(student);
    setClearSuggestions(true);
    setQuery(student.rollNumber);
    setSuggestionStudents([]); // This will be called after setQuery finishes
  }

  return (
    <>
      <div className="container py-8">
        <div>
          <SearchStudentInput
            query={query}
            setQuery={setQuery}
            suggestionStudents={suggestionStudents}
            handleSeachedStudent={handleSeachedStudent}
          />
        </div>
        {student ? (
          <>
            <div className="mt-5 flex flex-row gap-4">
              <div className="min-w-fit">
                <BriefInfoCard student={student} />
              </div>
              <div className="w-full">
                <FullInfoCard student={student} />
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default StudentsProfile;