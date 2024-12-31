import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Registration from "./pages/Registartion";
import React from "react";
import Staff from "./pages/Staff/Staff";
import Member from "./pages/Member/Member";
import Orders from "./components/Ordres";
import VanSelection from "./components/VanSelection";
import Vehicles from "./pages/Vehicles/Vehicles";
import OrderDetails from "./components/Modals/OrdersDetails";
import Layout from "./components/Layout";
import StaffVans from "./components/StaffVans";
import Equipment from "./components/Equipment";
import VanProfile from "./pages/Vehicles/VanProfile";
import ActivityLog from "./components/ActivityLog";
import OrderDetailsUpdated from './components/OrderDetailsUpdated';
import OrdersMap from "./components/OrdersMap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="/" element={<NotFound />} />
            <Route path="staff" element={<Staff />} />
            <Route path="/staff/:id" element={<Member />} />

            <Route path="orders" element={<Orders />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="van-profile/:id" element={<VanProfile />} />

            <Route path="staff-vans" element={<StaffVans />} />
            <Route path="equipment" element={<Equipment />} />
            <Route path="staff-vans" element={<StaffVans />} />
            <Route path="equipment" element={<Equipment />} />
            <Route path="orders" element={<Orders />} />
            <Route path="van" element={<VanSelection />} />
            <Route path="ordersdetails" element={<OrderDetails/>}/>
            <Route path ="ActivityLog" element={<ActivityLog/>}/>
            <Route path ="OrderDetailsUpdated" element={<OrderDetailsUpdated/>}/>
            <Route path ="Map" element={<OrdersMap/>}/>
            
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
