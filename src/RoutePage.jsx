import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Causes from "./components/Causes";
import Causes_Detail from "./components/Causes_Detail";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Event_Detail from "./components/Event_Detail";
import DonationForm from "./components/form/DonationForm";
import PaymentForm from "./components/form/PaymentForm";
import RegistrationForm from "./components/form/RegistrationForm";
import Home from "./components/Home";
import VideoGellary from "./layout/VideoGellary";
export default function RoutePage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/event_detail" element={<Event_Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/causes_detail" element={<Causes_Detail />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/registation" element={<RegistrationForm />}></Route>
          <Route path="/donate" element={<DonationForm />}></Route>
          <Route path="/payment" element={<PaymentForm />}></Route>
          <Route path="/videos" element={<VideoGellary />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
