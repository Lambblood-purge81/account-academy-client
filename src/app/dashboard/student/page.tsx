import { Metadata } from "next";
import StudentLayout from "@/components/Layouts/StudentLayout";
import React from "react";
import ProtectedRoute from "@/hooks/useProtectedRoute";
import Statistics from "@/components/Dashboard/E-commerce";

export const metadata: Metadata = {
  title:
    "LMS Account Academy",
  description: "LMS Account Academy",
};

export default function Home() {
  return (
    <ProtectedRoute role="student">
      <StudentLayout>
        <Statistics />
      </StudentLayout>
    </ProtectedRoute>


  );
}
