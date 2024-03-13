import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GraduationCap, Home, User } from "lucide-react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

import AddStudentPopup from "./AddStudentPopup";
import Loader from "../../../components/Loader";
import { UserContext } from "../../../../UserContext";
import * as myConstants from "../../../../myConstants";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const BlockPage = () => {
  const { id } = useParams();
  const [block, setBlock] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [AllocatedRoomStudents, setAllocatedRoomStudents] = useState([]);
  const [capacity, setCapacity] = useState("");
  const [room, setRoom] = useState("");
  const [selectedRoomNumber, setSelectedRoomNumber] = useState("");
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get("/admin/get-block/" + id).then((res) => {
        if (res.status === 200) {
          setBlock(res.data);
          setAllocatedRoomStudents(res.data.rooms[0].allocatedStudents);
          setCapacity(res.data.rooms[0].capacity);
          setRoom(res.data.rooms[0]);
          setSelectedRoomNumber(res.data.rooms[0].number);
          setLoading(false);
          setFetch(false);
        }
      });
    }
  }, [fetch]);

  if (!user || (user && user.role !== "Admin")) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <Loader />;
  }

  function roomOccupancy(capacity, allocatedStudents) {
    let boxes = [];

    for (let i = 0; i < capacity; i++) {
      if (allocatedStudents.length > i) {
        // If there is an allocated student at this index
        boxes.push(
          <div
            key={i}
            className="w-4 h-4 m-1 rounded-full bg-bg_dark_red"
          ></div>
        );
      } else {
        // Otherwise, the box is empty
        boxes.push(
          <div key={i} className="w-4 h-4 m-1 rounded-full bg-green-500"></div>
        );
      }
    }

    return <div className="flex flex-wrap">{boxes}</div>;
  }

  return (
    <>
      {block && (
        <div className="">
          <div className="flex justify-center mb-6 mr-2 mt-2 text-2xl font-bold labels">
            Block {block.name}
          </div>
          <ScrollArea className="h-[42vh] border-2 border-gray-800 rounded-md ml-2 mr-4 px-4 pt-4">
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5 mb-4">
              {block.rooms.map((room) => (
                <>
                  <div
                    onClick={() => {
                      setAllocatedRoomStudents(room.allocatedStudents);
                      setCapacity(room.capacity);
                      setRoom(room);
                      setSelectedRoomNumber(room.number);
                    }}
                    className={`bg-gray-50 border border-gray-800 rounded-lg p-2 flex flex-col items-center cursor-pointer h-fit duration-200 ${
                      selectedRoomNumber && selectedRoomNumber === room.number
                        ? "bg-gradient-to-t from-gray-300 to-gray-50"
                        : "bg-gray-200"
                    } `}
                    key={room.number}
                  >
                    <div>{room.number}</div>
                    <div className="">
                      {roomOccupancy(room.capacity, room.allocatedStudents)}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </ScrollArea>
          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 items-center border-2 border-black rounded-lg px-5 pt-3 pb-5 mt-4 ml-4 mr-6">
            <div className="col-span-2 text-center text-4xl font-semibold mb-2 text-cyan-500">
              {selectedRoomNumber}
            </div>
            {AllocatedRoomStudents &&
              AllocatedRoomStudents.map((student) => (
                <>
                  <div className="bg-gray-50 w-full border rounded-lg border-gray-400/50 shadow p-3 flex flex-row gap-4">
                    <div>
                      {student.profilePhoto ? (
                        <img
                          className="rounded aspect-square object-cover border-2 border-bg_dark_section w-20"
                          src={
                            myConstants.BACKEND_URL +
                            "/uploads/" +
                            student.profilePhoto
                          }
                        ></img>
                      ) : (
                        <img
                          className="rounded aspect-square object-cover border border-bg_dark_section/50 w-20"
                          src={myConstants.BACKEND_URL + "/uploads/default.png"}
                        ></img>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-medium text-base mb-1">
                        {student.firstName} {student.fatherFirstName}{" "}
                        {student.lastName}
                      </div>
                      <div className="flex flex-row gap-2 mb-1">
                        <Badge
                          variant="primary_2"
                          className="flex flex-row gap-1 items-center"
                        >
                          <User size={14} />
                          <h6>{student.rollNumber}</h6>
                        </Badge>
                        <Badge
                          variant="primary"
                          className="flex flex-row gap-1 items-center"
                        >
                          <Home size={14} />
                          <h6>{student.roomNumber}</h6>
                        </Badge>
                      </div>
                      <div className="flex flex-row gap-2">
                        <Badge
                          variant="primary_2"
                          className="flex flex-row gap-1 items-center"
                        >
                          <GraduationCap size={18} />
                          <h6>{student.course}</h6>
                        </Badge>
                        <Badge
                          variant="primary"
                          className="flex flex-row gap-1 items-center"
                        >
                          <GraduationCap size={18} />
                          <h6>{student.branch}</h6>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </>
              ))}

            <div className="h-full">
              <AddStudentPopup
                blockId={block._id}
                roomNo={selectedRoomNumber}
                AllocatedRoomStudents={AllocatedRoomStudents}
                capacity={capacity}
                setFetch={setFetch}
                setAllocatedRoomStudents={setAllocatedRoomStudents}
                setCapacity={setCapacity}
                setRoom={setRoom}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlockPage;
