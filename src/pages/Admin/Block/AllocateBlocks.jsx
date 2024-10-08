import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import AddBlockPopUp from "./AddBlockPopUp";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

function AllocateBlocks() {
  const [blocks, setBlocks] = useState([]);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [fetch, setFetch] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setLoading(true);
    axios.get("/admin/get-blocks").then((res) => {
      if (res.status === 200) {
        setBlocks(res.data);
        setLoading(false);
        setFetch(false);
      }
    });
  }, [fetch]);

  // Function to calculate the empty spaces in a block
  const calculateEmptySpaces = (rooms) => {
    let totalEmptySpaces = 0;

    rooms.forEach((room) => {
      const emptySpace = room.capacity - room.allocatedStudents.length;
      totalEmptySpaces += emptySpace;
    });

    return totalEmptySpaces;
  };

  async function deleteBlock(id) {
    var a = confirm("Do you want to delete? ");
    if (a) {
      await axios.delete("/admin/delete-block/" + id).then((res) => {
        if (res.status === 200) {
          setFetch(true);
          toast({
            title: "Block deleted successfully",
          });
        }
      });
    }
  }

  if (!user || (user && user.role !== "Admin")) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="p-6 lg:p-8">
        <div className="flex justify-center mb-6 text-2xl font-bold labels">
          All Blocks
        </div>
        {loading && blocks.length === 0 && (
          <>
            <div className="ml-2 mr-4 relative rounded-2xl grid gap-x-6 gap-y-8 grid-cols-4 md:grid-cols-6 lg:grid-cols-8 w-full">
              <div className="flex flex-col gap-1 mr-6">
                <Skeleton className="h-[125px] rounded relative ">
                  <Skeleton className="h-5 w-5 absolute bottom-1 right-1" />
                  <Skeleton className="h-5 w-5 absolute bottom-1 left-1" />
                </Skeleton>
                <Skeleton className="h-5 w-[150px] mt-2" />
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-5 w-[150px]" />
              </div>
              <div className="flex flex-col gap-1">
                <Skeleton className="h-[125px] w-[150px] rounded relative">
                  <Skeleton className="h-5 w-5 absolute bottom-1 right-1" />
                  <Skeleton className="h-5 w-5 absolute bottom-1 left-1" />
                </Skeleton>
                <Skeleton className="h-5 w-[150px] mt-2" />
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-5 w-[150px]" />
              </div>
              <div className="flex flex-col gap-1">
                <Skeleton className="h-[125px] w-[150px] rounded relative">
                  <Skeleton className="h-5 w-5 absolute bottom-1 right-1" />
                  <Skeleton className="h-5 w-5 absolute bottom-1 left-1" />
                </Skeleton>
                <Skeleton className="h-5 w-[150px] mt-2" />
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-5 w-[150px]" />
              </div>
            </div>
          </>
        )}
        <div className="ml-2 mr-4 relative rounded-2xl grid gap-x-6 gap-y-8 grid-cols-4 md:grid-cols-6 lg:grid-cols-8 w-full">
          {blocks.length > 0 &&
            blocks.map((block) => (
              <div className="flex flex-col items-start w-full" key={block._id}>
                <div className="w-full mx-auto rounded-2xl object-cover bg-bg_dark_section text-bg_white_font aspect-square mb-2 border-2 border-bg_dark_section">
                  <div className="flex justify-center items-center h-full relative">
                    <h2 className="text-2xl font-bold mb-1 truncate">
                      {block.name}
                    </h2>
                    <div
                      className="absolute bottom-1 right-1 bg-white bg-opacity-20 text-white p-1 rounded-xl hover:bg-bg_red cursor-pointer"
                      onClick={() => {
                        deleteBlock(block._id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                    <Link
                      className="absolute bottom-1 left-1 bg-white bg-opacity-20 text-white p-1 rounded-xl hover:bg-bg_red cursor-pointer"
                      to={`/admin/allocate-blocks/${block._id}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="text-md font-medium pl-2">
                  <span className="font-semibold">Rooms: </span>{" "}
                  <span className="">{block.rooms.length}</span>
                </div>
                <div className="text-md font-medium pl-2">
                  <span className="font-semibold"> Range: </span>
                  {block.rooms[0].number}-
                  {block.rooms[block.rooms.length - 1].number}
                </div>
                <div className="text-md font-medium pl-2">
                  <span className="font-semibold">vacancy: </span>{" "}
                  <span className="text-red-500">
                    {calculateEmptySpaces(block.rooms)}
                  </span>
                </div>
              </div>
            ))}
          {!loading && (
            <>
              <AddBlockPopUp setFetch={setFetch} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AllocateBlocks;
