/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../../contexts/UserContext";

function AddFoodPopUp({ setCount }) {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useContext(UserContext);

  if (!user || (user && user.role !== "Manager")) {
    return <Navigate to="/login" />;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function addFood(ev) {
    ev.preventDefault();
    if (name == "" || photo == null) {
      toast.error("Please fill all fields");
    } else {
      try {
        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("name", name);

        await axios
          .post("/food/add-food", formData, {
            headers: { "Content-type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.status === 200) {
              toast.success("Added Successfully");
              setIsModalOpen(false);
              setName("");
              setPhoto("");
              // window.location.reload(false);
              setCount((prev) => prev + 1);
            }
          });
      } catch (err) {
        if (err.response.status === 409) toast.error("Food already exists");
        console.log(err);
      }
    }
  }

  return (
    <>
      <div className="" onClick={openModal}>
        <div className="rounded-2xl object-cover aspect-square mb-2 border-2 border-bg_dark_section hover:bg-bg_dark_section hover:text-bg_white">
          <div className="flex justify-center items-center h-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <form
            className="bg-bg_white text-bg_dark_font rounded-md shadow-lg shadow-bg_light_section border-2 border-bg_dark_section p-7 flex flex-col justify-center items-center gap-2"
            onSubmit={addFood}
          >
            <div className="text-xl mb-4">Add Food item</div>

            <div className="w-full">
              Item name
              <input
                type="text"
                value={name}
                className="mt-1 mb-2"
                onChange={(ev) => {
                  setName(ev.target.value);
                }}
                name="name"
                placeholder="Enter food item name"
              />
            </div>

            <label className="flex flex-col w-full">
              <div className="">
                <div className="flex items-center  gap-4">
                  <div>Upload&nbsp;item&nbsp;photo</div>
                  <div className="grow">
                    <input
                      type="file"
                      onChange={(ev) => {
                        setPhoto(ev.target.files[0]);
                      }}
                      name="photo"
                      className="hidden mt-1 mb-2"
                    />
                    <div className="mt-1 bg-bg_red hover:bg-bg_dark_section w-full p-1 rounded-md py-2 px-4 text-bg_white flex justify-center items-center cursor-pointer hover:scale-95 hover:transition-all duration-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="truncate w-40 mx-auto mt-2">
                  {photo && photo.name}
                </div>
              </div>
            </label>
            <div className="flex justify-center gap-2 w-full">
              <button onClick={closeModal} className="btn">
                Close
              </button>
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AddFoodPopUp;
