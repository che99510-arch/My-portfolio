"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import {
  Github, ExternalLink, Globe, Smartphone, Monitor, Palette, Layout,
  X, RefreshCw, ChevronLeft, ChevronRight, Lock,
  Users, BookOpen, CreditCard, Calendar, BarChart2,
  ShoppingCart, Bell, MapPin, Package, TrendingUp, Image as ImageIcon
} from "lucide-react";

const categories = ["All", "Web Development", "Mobile Apps", "Desktop Software", "Graphic Design", "UI/UX"];

// ── African-themed coded UI screens ──────────────────────────────────────────

function SchoolDashboard() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 font-sans text-white overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Lycée Bilingue de Yaoundé</p>
          <p className="text-white font-black text-lg">School Dashboard</p>
        </div>
        <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-xl px-3 py-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-300 text-xs font-bold">Online</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          { label: "Students", value: "1,248", icon: Users, color: "from-blue-500 to-blue-700" },
          { label: "Teachers", value: "86", icon: BookOpen, color: "from-indigo-500 to-blue-600" },
          { label: "Fees Paid", value: "74%", icon: CreditCard, color: "from-green-500 to-emerald-600" },
          { label: "Attendance", value: "91%", icon: Calendar, color: "from-violet-500 to-blue-600" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-2`}>
              <Icon size={14} className="text-white" />
            </div>
            <p className="text-white font-black text-lg leading-none">{value}</p>
            <p className="text-gray-400 text-xs mt-0.5">{label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
          <p className="text-gray-400 text-xs font-bold mb-2">Recent Students</p>
          {["Ngozi Ambe", "Bertrand Fomba", "Aminata Nkeng", "Paul Essama"].map((n, i) => (
            <div key={n} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">{n[0]}</div>
              <span className="text-gray-300 text-xs">{n}</span>
              <span className="ml-auto text-blue-400 text-[10px]">Form {i + 1}</span>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
          <p className="text-gray-400 text-xs font-bold mb-2">Fee Collection (FCFA)</p>
          {[["1st Term", "2,400,000", 80], ["2nd Term", "1,900,000", 63], ["3rd Term", "800,000", 27]].map(([t, v, w]) => (
            <div key={String(t)} className="mb-2">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">{t}</span>
                <span className="text-green-400 font-bold">{v}</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full"><div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{ width: `${w}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SchoolStudents() {
  const students = [
    { name: "Ngozi Ambe", class: "Form 5A", fees: "Paid", city: "Yaoundé" },
    { name: "Bertrand Fomba", class: "Form 3B", fees: "Partial", city: "Douala" },
    { name: "Aminata Nkeng", class: "Form 6A", fees: "Paid", city: "Bafoussam" },
    { name: "Paul Essama", class: "Form 1C", fees: "Pending", city: "Bamenda" },
    { name: "Grace Mballa", class: "Form 4B", fees: "Paid", city: "Yaoundé" },
  ];
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 text-white overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <p className="text-white font-black text-lg">Student Records</p>
        <div className="flex gap-2">
          <div className="px-3 py-1.5 bg-blue-600 rounded-lg text-xs font-bold">+ Add Student</div>
          <div className="px-3 py-1.5 bg-white/10 rounded-lg text-xs text-gray-300">Export</div>
        </div>
      </div>
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-5 px-4 py-2 bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-wider">
          <span>Name</span><span>Class</span><span>City</span><span>Fees</span><span>Action</span>
        </div>
        {students.map((s) => (
          <div key={s.name} className="grid grid-cols-5 px-4 py-2.5 border-t border-white/5 items-center hover:bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">{s.name[0]}</div>
              <span className="text-white text-xs font-medium">{s.name}</span>
            </div>
            <span className="text-gray-400 text-xs">{s.class}</span>
            <span className="text-gray-400 text-xs">{s.city}</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full w-fit ${s.fees === "Paid" ? "bg-green-500/20 text-green-400" : s.fees === "Partial" ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"}`}>{s.fees}</span>
            <span className="text-blue-400 text-xs cursor-pointer hover:underline">View</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SchoolFees() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 text-white overflow-hidden">
      <p className="text-white font-black text-lg mb-4">Fee Management — FCFA</p>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[["Total Expected", "18,600,000 FCFA", "text-white"], ["Collected", "13,800,000 FCFA", "text-green-400"], ["Outstanding", "4,800,000 FCFA", "text-red-400"]].map(([l, v, c]) => (
          <div key={String(l)} className="bg-white/5 rounded-xl p-3 border border-white/10">
            <p className="text-gray-400 text-xs mb-1">{l}</p>
            <p className={`font-black text-sm ${c}`}>{v}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="px-4 py-2 bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-wider grid grid-cols-4">
          <span>Student</span><span>Amount (FCFA)</span><span>Date</span><span>Status</span>
        </div>
        {[
          ["Ngozi Ambe", "85,000", "12 Jan 2025", "Paid"],
          ["Bertrand Fomba", "42,500", "15 Jan 2025", "Partial"],
          ["Aminata Nkeng", "85,000", "10 Jan 2025", "Paid"],
          ["Paul Essama", "0", "—", "Pending"],
          ["Grace Mballa", "85,000", "11 Jan 2025", "Paid"],
        ].map(([n, a, d, s]) => (
          <div key={String(n)} className="grid grid-cols-4 px-4 py-2 border-t border-white/5 text-xs items-center">
            <span className="text-white font-medium">{n}</span>
            <span className="text-gray-300">{a}</span>
            <span className="text-gray-400">{d}</span>
            <span className={`px-2 py-0.5 rounded-full w-fit font-bold ${s === "Paid" ? "bg-green-500/20 text-green-400" : s === "Partial" ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"}`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingHome() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 text-white overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <p className="font-black text-lg">BookCam</p>
        <Bell size={18} className="text-gray-400" />
      </div>
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-4 mb-3">
        <p className="text-blue-200 text-xs mb-1">Good morning,</p>
        <p className="text-white font-black text-xl">Mama Ngoné 👋</p>
        <p className="text-blue-200 text-sm mt-1">Douala, Cameroun</p>
        <div className="mt-3 bg-white/20 rounded-xl px-3 py-2 flex items-center gap-2">
          <span className="text-white/60 text-sm">Search services...</span>
        </div>
      </div>
      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Available Services</p>
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: "Dr. Fouda Jean", role: "General Medicine", city: "Yaoundé", price: "5,000 FCFA", avail: "Available" },
          { name: "Salon Beauté", role: "Hair & Beauty", city: "Douala", price: "3,500 FCFA", avail: "2 slots left" },
          { name: "Moto Taxi Pro", role: "Transport", city: "Bafoussam", price: "500 FCFA", avail: "Now" },
          { name: "Photo Studio NG", role: "Photography", city: "Bamenda", price: "15,000 FCFA", avail: "Tomorrow" },
        ].map((s) => (
          <div key={s.name} className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-black mb-2">{s.name[0]}</div>
            <p className="text-white text-xs font-bold leading-tight">{s.name}</p>
            <p className="text-gray-400 text-[10px]">{s.role}</p>
            <p className="text-blue-400 text-[10px] font-bold mt-1">{s.price}</p>
            <span className="text-[10px] text-green-400">{s.avail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingPayment() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 text-white overflow-hidden">
      <p className="font-black text-lg mb-1">Mobile Money Payment</p>
      <p className="text-gray-400 text-xs mb-4">Powered by MTN MoMo & Orange Money</p>
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black">F</div>
          <div>
            <p className="text-white font-bold text-sm">Dr. Fouda Jean</p>
            <p className="text-gray-400 text-xs">Consultation — Yaoundé</p>
          </div>
          <p className="ml-auto text-blue-400 font-black">5,000 FCFA</p>
        </div>
        <div className="h-px bg-white/10 my-3" />
        <div className="flex justify-between text-xs text-gray-400 mb-1"><span>Service fee</span><span>200 FCFA</span></div>
        <div className="flex justify-between text-sm font-black text-white"><span>Total</span><span className="text-blue-400">5,200 FCFA</span></div>
      </div>
      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Select Payment Method</p>
      <div className="space-y-2">
        {[{ name: "MTN Mobile Money", num: "6XX XXX XXX", color: "bg-yellow-500" }, { name: "Orange Money", num: "6XX XXX XXX", color: "bg-orange-500" }].map((m) => (
          <div key={m.name} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
            <div className={`w-8 h-8 rounded-full ${m.color} flex items-center justify-center font-black text-white text-xs`}>{m.name[0]}</div>
            <div><p className="text-white text-xs font-bold">{m.name}</p><p className="text-gray-400 text-[10px]">{m.num}</p></div>
            <div className="ml-auto w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-blue-500" /></div>
          </div>
        ))}
      </div>
      <button className="w-full mt-3 py-3 bg-blue-600 rounded-xl text-white font-bold text-sm">Confirm Payment</button>
    </div>
  );
}

function HospitalDashboard() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 text-white overflow-hidden">
      <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Hôpital Central de Yaoundé</p>
      <p className="font-black text-lg mb-3">Patient Management System</p>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[["Patients Today", "124", "from-blue-500 to-blue-700"], ["Doctors On Duty", "18", "from-indigo-500 to-blue-600"], ["Beds Available", "32", "from-green-500 to-emerald-600"], ["Pending Labs", "47", "from-orange-500 to-red-500"]].map(([l, v, c]) => (
          <div key={String(l)} className="bg-white/5 rounded-xl p-2.5 border border-white/10 text-center">
            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${c} mx-auto mb-1.5 flex items-center justify-center`}><Users size={12} className="text-white" /></div>
            <p className="text-white font-black text-base leading-none">{v}</p>
            <p className="text-gray-400 text-[10px] mt-0.5">{l}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-5 px-3 py-2 bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
          <span>Patient</span><span>Diagnosis</span><span>Doctor</span><span>Ward</span><span>Status</span>
        </div>
        {[
          ["Mama Takang", "Malaria", "Dr. Bello", "Ward A", "Admitted"],
          ["Jean Nkwelle", "Hypertension", "Dr. Fouda", "OPD", "Discharged"],
          ["Fatima Djouma", "Pregnancy", "Dr. Ngono", "Maternity", "Admitted"],
          ["Emmanuel Tabe", "Typhoid", "Dr. Mbarga", "Ward B", "Observation"],
        ].map(([n, d, doc, w, s]) => (
          <div key={String(n)} className="grid grid-cols-5 px-3 py-2 border-t border-white/5 text-[10px] items-center">
            <span className="text-white font-medium">{n}</span>
            <span className="text-gray-400">{d}</span>
            <span className="text-blue-400">{doc}</span>
            <span className="text-gray-400">{w}</span>
            <span className={`px-1.5 py-0.5 rounded-full font-bold w-fit ${s === "Admitted" ? "bg-blue-500/20 text-blue-400" : s === "Discharged" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HospitalBilling() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 text-white overflow-hidden">
      <p className="font-black text-lg mb-1">Billing & Invoices</p>
      <p className="text-gray-400 text-xs mb-3">Hôpital Central de Yaoundé — Jan 2025</p>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[["Revenue", "4,820,000 FCFA", "text-green-400"], ["Paid", "3,650,000 FCFA", "text-blue-400"], ["Unpaid", "1,170,000 FCFA", "text-red-400"]].map(([l, v, c]) => (
          <div key={String(l)} className="bg-white/5 rounded-xl p-2.5 border border-white/10">
            <p className="text-gray-400 text-[10px]">{l}</p>
            <p className={`font-black text-xs mt-0.5 ${c}`}>{v}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-4 px-3 py-2 bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
          <span>Patient</span><span>Service</span><span>Amount (FCFA)</span><span>Status</span>
        </div>
        {[
          ["Mama Takang", "Admission + Labs", "85,000", "Paid"],
          ["Jean Nkwelle", "Consultation", "5,000", "Paid"],
          ["Fatima Djouma", "Antenatal Care", "25,000", "Pending"],
          ["Emmanuel Tabe", "Medication", "18,500", "Paid"],
          ["Cécile Nomo", "Surgery", "350,000", "Pending"],
        ].map(([n, s, a, st]) => (
          <div key={String(n)} className="grid grid-cols-4 px-3 py-2 border-t border-white/5 text-[10px] items-center">
            <span className="text-white font-medium">{n}</span>
            <span className="text-gray-400">{s}</span>
            <span className="text-gray-300">{a}</span>
            <span className={`px-1.5 py-0.5 rounded-full font-bold w-fit ${st === "Paid" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>{st}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FoodHome() {
  const dishes = ["Ndolé & Plantain", "Eru & Fufu Corn", "Poulet DG", "Mbongo Tchobi", "Koki & Miondo", "Okok Sauce"];
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 text-white overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div><p className="font-black text-lg">CamFood 🇨🇲</p><div className="flex items-center gap-1 text-gray-400 text-xs"><MapPin size={10} /><span>Douala, Cameroun</span></div></div>
        <ShoppingCart size={20} className="text-blue-400" />
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-3 mb-3 flex items-center justify-between">
        <div><p className="text-white font-black">20% OFF Today</p><p className="text-blue-200 text-xs">On all local dishes</p></div>
        <div className="text-3xl">🍲</div>
      </div>
      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Popular Cameroonian Dishes</p>
      <div className="grid grid-cols-3 gap-2">
        {dishes.map((d, i) => (
          <div key={d} className="bg-white/5 rounded-xl p-2 border border-white/10">
            <div className="text-2xl mb-1 text-center">{"🍲🥘🍗🐟🌿🫘"[i]}</div>
            <p className="text-white text-[10px] font-bold text-center leading-tight">{d}</p>
            <p className="text-blue-400 text-[10px] text-center mt-0.5">{(1500 + i * 500).toLocaleString()} FCFA</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function POSDashboard() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 text-white overflow-hidden">
      <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Boutique Mama Chantal — Yaoundé</p>
      <p className="font-black text-lg mb-3">Point of Sale</p>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
          <p className="text-gray-400 text-xs mb-1">Today&apos;s Sales</p>
          <p className="text-green-400 font-black text-xl">485,000 FCFA</p>
          <p className="text-gray-500 text-[10px]">+12% vs yesterday</p>
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
          <p className="text-gray-400 text-xs mb-1">Transactions</p>
          <p className="text-blue-400 font-black text-xl">47</p>
          <p className="text-gray-500 text-[10px]">8 pending</p>
        </div>
      </div>
      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Recent Sales</p>
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        {[
          ["Huile de palme 5L", "2,500 FCFA", "Cash"],
          ["Riz parfumé 25kg", "18,000 FCFA", "MTN MoMo"],
          ["Savon Monganga x6", "4,200 FCFA", "Cash"],
          ["Sucre 10kg", "7,500 FCFA", "Orange Money"],
        ].map(([item, price, method]) => (
          <div key={String(item)} className="flex items-center justify-between px-3 py-2 border-b border-white/5 last:border-0">
            <div className="flex items-center gap-2"><Package size={12} className="text-blue-400" /><span className="text-white text-xs">{item}</span></div>
            <div className="text-right"><p className="text-green-400 text-xs font-bold">{price}</p><p className="text-gray-500 text-[10px]">{method}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialMediaKit() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 text-white overflow-hidden">
      <p className="font-black text-lg mb-1">Social Media Design Kit</p>
      <p className="text-gray-400 text-xs mb-3">Made for African Businesses 🌍</p>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {["Instagram Post", "Facebook Cover", "WhatsApp Status", "Story Template", "Profile Banner", "Event Flyer"].map((t) => (
          <div key={t} className="bg-gradient-to-br from-blue-600/30 to-indigo-600/20 rounded-xl border border-blue-500/30 p-2 flex flex-col items-center justify-center aspect-square">
            <ImageIcon size={20} className="text-blue-400 mb-1" />
            <p className="text-white text-[9px] font-bold text-center leading-tight">{t}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-3 border border-white/10">
        <p className="text-gray-400 text-xs font-bold mb-2">Brand Colors — FCFA Business</p>
        <div className="flex gap-2">
          {["#2563EB", "#111827", "#60a5fa", "#1e293b", "#f59e0b", "#10b981"].map((c) => (
            <div key={c} className="flex-1 h-6 rounded-lg" style={{ background: c }} title={c} />
          ))}
        </div>
        <p className="text-gray-400 text-[10px] mt-2">Tailored for Cameroonian & African market identity</p>
      </div>
    </div>
  );
}

function BrandIdentity() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 text-white overflow-hidden">
      <p className="font-black text-lg mb-1">Corporate Brand Identity</p>
      <p className="text-gray-400 text-xs mb-3">African Business — Made in Cameroon 🇨🇲</p>
      <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl p-5 mb-3 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-2 border-2 border-white/30">
            <span className="text-white font-black text-3xl">CM</span>
          </div>
          <p className="text-white font-black text-xl">CamBiz Solutions</p>
          <p className="text-blue-200 text-xs">Votre partenaire numérique au Cameroun</p>
          <div className="flex gap-2 mt-2 justify-center">
            {["#2563EB", "#111827", "#60a5fa", "#f59e0b"].map((c) => (
              <div key={c} className="w-5 h-5 rounded-full border-2 border-white/30" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center"><span className="text-white font-black text-xs">CM</span></div>
            <div><p className="text-gray-900 font-black text-xs">Jean Ntambi</p><p className="text-gray-500 text-[10px]">Directeur Général</p></div>
          </div>
          <p className="text-blue-600 text-[10px]">+237 6XX XXX XXX</p>
          <p className="text-gray-500 text-[10px]">Douala, Cameroun</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-3 border border-blue-500/30">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center"><span className="text-white font-black text-xs">CM</span></div>
            <div><p className="text-white font-black text-xs">Aïssatou Bello</p><p className="text-gray-400 text-[10px]">Responsable Marketing</p></div>
          </div>
          <p className="text-blue-400 text-[10px]">+237 6XX XXX XXX</p>
          <p className="text-gray-500 text-[10px]">Yaoundé, Cameroun</p>
        </div>
      </div>
    </div>
  );
}

// Map project title → array of screen components
const demoScreens: Record<string, { component: React.FC; label: string; desc: string }[]> = {
  "School Management System": [
    { component: SchoolDashboard, label: "Dashboard", desc: "Admin dashboard with student counts, fee collection in FCFA and attendance for Lycée Bilingue de Yaoundé." },
    { component: SchoolStudents, label: "Student Records", desc: "Student list with Cameroonian names, cities (Yaoundé, Douala, Bafoussam) and fee payment status." },
    { component: SchoolFees, label: "Fee Management", desc: "FCFA fee tracking, payment history and collection reports per term." },
  ],
  "Business Booking App": [
    { component: BookingHome, label: "Home Screen", desc: "African service booking app with local providers in Douala and Yaoundé, MTN MoMo payments." },
    { component: BookingPayment, label: "Payment Flow", desc: "Secure payment via MTN Mobile Money and Orange Money — the standard in Cameroon." },
  ],
  "Hospital Management System": [
    { component: HospitalDashboard, label: "Patient Records", desc: "Patient management for Hôpital Central de Yaoundé with Cameroonian patient names and local wards." },
    { component: HospitalBilling, label: "Billing in FCFA", desc: "Invoice and billing system using FCFA currency for Cameroonian healthcare facilities." },
  ],
  "Food Delivery App UI": [
    { component: FoodHome, label: "Home Feed", desc: "Local Cameroonian dishes — Ndolé, Eru, Poulet DG, Mbongo Tchobi — with FCFA pricing." },
  ],
  "Inventory POS System": [
    { component: POSDashboard, label: "POS Terminal", desc: "Point of sale for Boutique Mama Chantal in Yaoundé — MTN MoMo & Orange Money payments in FCFA." },
  ],
  "Corporate Brand Identity": [
    { component: BrandIdentity, label: "Brand Identity", desc: "Corporate identity for a Cameroonian business — logo, business cards, and color palette." },
  ],
  "Social Media Marketing Kit": [
    { component: SocialMediaKit, label: "Design Kit", desc: "Social media templates designed specifically for African businesses and the Cameroonian market." },
  ],
};

const projects = [
  { title: "E-Commerce Platform", description: "A full-featured e-commerce platform with product management, cart, payments and admin dashboard.", category: "Web Development", tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"], color: "from-blue-600 to-blue-800", icon: Globe, github: "https://github.com", demoType: "iframe" as const, demoUrl: "https://vercel.com" },
  { title: "School Management System", description: "Desktop app for Cameroonian schools — student records, FCFA fees, attendance, timetables.", category: "Desktop Software", tags: ["Python", "Django", "MySQL", "React"], color: "from-indigo-600 to-blue-700", icon: Monitor, github: "https://github.com", demoType: "coded" as const, demoUrl: "" },
  { title: "Business Booking App", description: "Mobile app for booking local services in Cameroon with MTN MoMo & Orange Money payments.", category: "Mobile Apps", tags: ["Flutter", "Firebase", "Dart"], color: "from-blue-500 to-cyan-600", icon: Smartphone, github: "https://github.com", demoType: "coded" as const, demoUrl: "" },
  { title: "Corporate Brand Identity", description: "Complete brand identity for Cameroonian businesses — logo, cards, letterhead and social kits.", category: "Graphic Design", tags: ["Adobe Illustrator", "Photoshop", "Canva"], color: "from-violet-600 to-blue-600", icon: Palette, github: "https://github.com", demoType: "coded" as const, demoUrl: "" },
  { title: "Hospital Management System", description: "Hospital software for Cameroonian clinics — patient records, appointments, FCFA billing.", category: "Desktop Software", tags: ["Python", "Tkinter", "MySQL"], color: "from-blue-600 to-indigo-700", icon: Monitor, github: "https://github.com", demoType: "coded" as const, demoUrl: "" },
  { title: "Portfolio Website", description: "Modern responsive portfolio for a creative photographer with gallery and dark mode.", category: "Web Development", tags: ["Next.js", "Framer Motion", "Tailwind"], color: "from-cyan-500 to-blue-600", icon: Globe, github: "https://github.com", demoType: "iframe" as const, demoUrl: "https://nextjs.org" },
  { title: "Food Delivery App UI", description: "UI/UX for a Cameroonian food delivery app — Ndolé, Eru, Poulet DG and more local dishes.", category: "UI/UX", tags: ["Figma", "Prototype", "Mobile UI"], color: "from-blue-500 to-indigo-600", icon: Layout, github: "https://github.com", demoType: "coded" as const, demoUrl: "" },
  { title: "Inventory POS System", description: "POS and stock management for Cameroonian retail shops — FCFA, MoMo, receipt printing.", category: "Desktop Software", tags: ["Python", "PyQt5", "SQLite"], color: "from-indigo-500 to-blue-600", icon: Monitor, github: "https://github.com", demoType: "coded" as const, demoUrl: "" },
  { title: "Social Media Marketing Kit", description: "Social media templates built for African businesses — posts, stories and covers.", category: "Graphic Design", tags: ["Photoshop", "Canva"], color: "from-blue-600 to-cyan-500", icon: Palette, github: "https://github.com", demoType: "coded" as const, demoUrl: "" },
];

// ── Demo Modal ────────────────────────────────────────────────────────────────
function DemoModal({ project, onClose }: { project: (typeof projects)[0]; onClose: () => void }) {
  const [slide, setSlide] = useState(0);
  const [dir, setDir] = useState(1);
  const [iframeKey, setIframeKey] = useState(0);
  const screens = demoScreens[project.title] ?? [];

  const go = (d: number) => {
    setDir(d);
    setSlide((prev) => (prev + d + screens.length) % screens.length);
  };

  const displayUrl = project.demoUrl || `demo.mikesoftware.com/${project.title.toLowerCase().replace(/\s+/g, "-")}`;
  const CurrentScreen = screens[slide]?.component;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.88, opacity: 0, y: 40 }} animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 30 }} transition={{ type: "spring", damping: 22, stiffness: 260 }}
        className="w-full max-w-5xl bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}>
        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-5 py-3 bg-[#1e293b] border-b border-white/10">
          <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
          <div className="flex-1 flex items-center gap-2 mx-3 px-3 py-1.5 rounded-lg bg-[#0f172a] border border-white/10">
            <Lock size={11} className="text-green-400 shrink-0" />
            <span className="text-gray-400 text-xs truncate font-mono">{displayUrl}</span>
          </div>
          <button onClick={() => setIframeKey((k) => k + 1)} className="text-gray-500 hover:text-white transition-colors"><RefreshCw size={14} /></button>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors ml-1"><X size={16} /></button>
        </div>

        {/* Content */}
        <div className="relative bg-[#0f172a]" style={{ height: "520px" }}>
          {project.demoType === "iframe" ? (
            <iframe key={iframeKey} src={project.demoUrl} className="w-full h-full border-0" title={project.title} sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
          ) : screens.length > 0 ? (
            <>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div key={slide} custom={dir}
                  initial={{ opacity: 0, x: dir * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -dir * 60 }}
                  transition={{ duration: 0.3 }} className="absolute inset-0">
                  {CurrentScreen && <CurrentScreen />}
                  {/* Caption bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-5 py-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold mb-1">{screens[slide].label}</span>
                    <p className="text-white/70 text-xs leading-relaxed">{screens[slide].desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              {screens.length > 1 && (
                <>
                  <button onClick={() => go(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white z-10"><ChevronLeft size={18} /></button>
                  <button onClick={() => go(1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white z-10"><ChevronRight size={18} /></button>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">No preview available</div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 bg-[#1e293b] border-t border-white/10">
          <div className="flex items-center gap-2">
            {project.demoType === "coded" && screens.map((_, i) => (
              <button key={i} onClick={() => { setDir(i > slide ? 1 : -1); setSlide(i); }}
                className={`rounded-full transition-all duration-300 ${i === slide ? "w-6 h-2.5 bg-blue-500" : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"}`} />
            ))}
            {project.demoType === "iframe" && <span className="text-gray-400 text-xs">Live website — scroll &amp; interact freely</span>}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs hidden sm:block font-medium">{project.title}</span>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors">
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [demoProject, setDemoProject] = useState<(typeof projects)[0] | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-50 dark:bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">My Work</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Click <span className="text-blue-600 font-semibold">Live Demo</span> to see interactive African-context previews.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-4" />
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "bg-white dark:bg-[#1e293b] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:text-blue-600"}`}>
              {cat}
            </button>
          ))}
        </FadeIn>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => {
              const Icon = project.icon;
              const screens = demoScreens[project.title] ?? [];
              return (
                <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group bg-white dark:bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-lg card-hover">
                  {/* Header — always coded gradient, no external images */}
                  <div className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-4 border-white/30" />
                      <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full border-4 border-white/20" />
                    </div>
                    <Icon size={52} className="text-white/80 group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-semibold">{project.category}</span>
                    {screens.length > 0 && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                        {screens.map((_, si) => <div key={si} className="w-1.5 h-1.5 rounded-full bg-white/70" />)}
                        <span className="text-white/70 text-xs ml-1">{screens.length} screens</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <Github size={15} /> GitHub
                      </a>
                      <button onClick={() => setDemoProject(project)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
                        <ExternalLink size={15} /> Live Demo
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {demoProject && <DemoModal project={demoProject} onClose={() => setDemoProject(null)} />}
      </AnimatePresence>
    </section>
  );
}
