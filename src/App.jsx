import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout";
import "react-toastify/dist/ReactToastify.css";
import * as myContants from "../myConstants";
import { UserContextProvider } from "../UserContext";
import { StudentProvider } from "../StudentContext";
import { ReportProvider } from "../ReportContext";
import { Toaster } from "@/components/ui/toaster";
// import { ThemeProvider } from "@/components/theme-provider";

import IndexPage from "./pages/IndexPage";
import UserLogin from "./pages/UserLogin";

// Admin
import StudentInfo from "./pages/Admin/StudentInfo/StudentInfo";
import AdminProfile from "./pages/Admin/AdminProfile";
import StudentsProfile from "./pages/Admin/StudentsProfile";
import AdminReport from "./pages/Admin/Report/AdminReport";
import AddStudent from "./pages/Admin/AddStudent";
import BlockPage from "./pages/Admin/Block/BlockPage";
import AllocateBlocks from "./pages/Admin/Block/AllocateBlocks";

// Student
import StudentDashboard from "./pages/Student/StudentDashboard";
import StudentProfile from "./pages/Student/StudentProfile";
import TodayMeal from "./components/TodayMeal";
import StudentNotices from "./pages/Student/Notice/StudentNotices";
import StudentReport from "./pages/Student/Report/StudentReport";
import StudentFeesPaymentDashboard from "./pages/Student/FeesPayment/StudentFeesPaymentDashboard";

// Accountant
import AccountantDashboard from "./pages/Accountant/AccountantDashboard";
import CollectFees from "./pages/Accountant/Fees/CollectFees";
import DueFees from "./pages/Accountant/Fees/DueFees";
import AddFee from "./pages/Accountant/Fees/AddFee";

// Manager
import ManagerDashboard from "./pages/Manager/ManagerDashboard";
import AddFoodPopUp from "./pages/Manager/Food/AddFoodPopUp";
import AllFoods from "./pages/Manager/Food/AllFoods";
import EditFoodPopUp from "./pages/Manager/Food/EditFoodPopUp";
import ManagerProfile from "./pages/Manager/ManagerProfile";
import AddMeal from "./pages/Manager/Meal/AddMeal";
import AllNotices from "./pages/Manager/Notice/AllNotices";
import ManagerReport from "./pages/Manager/Report/ManagerReport";

import ResetPassword from "./components/ResetPassword";
import Leave from "./pages/Admin/Leave/Leave";
import Layout2 from "./Layout2";
import AdminDashBoard from "./pages/Admin/DashBoard/AdminDashBoard";

axios.defaults.baseURL = myContants.BACKEND_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <StudentProvider>
        <ReportProvider>
          <ToastContainer />
          <Toaster />
          <Routes>
            <Route path="/" element={<Layout2 />}>
              <Route path="/" element={<IndexPage />} />
              <Route path="/login" element={<UserLogin />} />
            </Route>
            <Route path="/" element={<Layout />}>
              // Admin
              <Route path="/admin/profile" element={<AdminProfile />} />
              <Route path="/admin/dashboard" element={<AdminDashBoard />} />
              <Route path="/admin/studentInfo" element={<StudentInfo />} />
              <Route path="/admin/students" element={<StudentsProfile />} />
              <Route path="/admin/allnotices" element={<AllNotices />} />
              <Route path="/admin/report" element={<AdminReport />} />
              <Route path="/admin/add-student" element={<AddStudent />} />
              <Route
                path="/admin/allocate-blocks/:id"
                element={<BlockPage />}
              />
              <Route
                path="/admin/allocate-blocks"
                element={<AllocateBlocks />}
              />
              <Route path="/admin/leave" element={<Leave />} />
              // Accountant
              <Route
                path="/accountant/dashboard"
                element={<AccountantDashboard />}
              />
              <Route
                path="/accountant/fee/collectFees"
                element={<CollectFees />}
              />
              <Route path="/accountant/fee/dueFees" element={<DueFees />} />
              <Route path="/accountant/fee/addFee" element={<AddFee />} />
              // Manager
              <Route path="/manager/dashboard" element={<ManagerDashboard />} />
              <Route path="/manager/addfood" element={<AddFoodPopUp />} />
              <Route path="/manager/allfoods" element={<AllFoods />} />
              <Route path="/manager/allfoods/:id" element={<EditFoodPopUp />} />
              <Route path="/manager/addmeal" element={<AddMeal />} />
              <Route path="/manager/profile" element={<ManagerProfile />} />
              <Route path="/manager/report" element={<ManagerReport />} />
              <Route path="/manager/allnotices" element={<AllNotices />} />
              // Student
              <Route path="/student/profile" element={<StudentProfile />} />
              <Route path="/student/dashboard" element={<StudentDashboard />} />
              <Route path="/student/report" element={<StudentReport />} />
              <Route path="/student/notices" element={<StudentNotices />} />
              <Route
                path="/student/fees"
                element={<StudentFeesPaymentDashboard />}
              />
              <Route path="/meal" element={<TodayMeal />} />
            </Route>
          </Routes>
          <Routes>
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Routes>
        </ReportProvider>
      </StudentProvider>
    </UserContextProvider>
  );
}

export default App;
