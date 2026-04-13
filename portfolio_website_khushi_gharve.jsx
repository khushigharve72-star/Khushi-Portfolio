import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Procurement Spend Analysis Dashboard",
    description: "Analyzed $1M+ spend data to identify cost-saving opportunities, optimized vendor selection, and improved procurement efficiency.",
    skills: "Power BI, Excel, Data Modeling",
    link: "#"
  },
  {
    title: "Invoice Automation Tracker",
    description: "Automated invoice tracking using Excel VBA, reducing manual effort by 50% and improving SLA compliance.",
    skills: "Excel, VBA, Automation",
    link: "#"
  },
  {
    title: "SQL Sales & Order Analysis",
    description: "Built SQL queries to analyze sales trends, customer segmentation, and revenue growth insights.",
    skills: "SQL, Data Analysis",
    link: "#"
  },
  {
    title: "Vendor Performance Dashboard",
    description: "Developed Power BI dashboard to track vendor KPIs, on-time delivery, and compliance performance.",
    skills: "Power BI, KPI Tracking",
    link: "#"
  },
  {
    title: "P2P Process Optimization Analysis",
    description: "Identified bottlenecks in Procure-to-Pay cycle and improved process efficiency using data-driven insights.",
    skills: "Excel, SQL, Process Optimization",
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <motion.h1 
        className="text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Khushi Gharve
      </motion.h1>

      <p className="text-center text-gray-600 mb-6">
        Data Analyst | Excel | SQL | Power BI | Procurement Analytics
      </p>

      <div className="flex justify-center gap-4 mb-8">
        <Button variant="outline">Download Resume</Button>
        <Button>LinkedIn</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}