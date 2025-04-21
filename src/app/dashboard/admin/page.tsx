import { Metadata } from "next";
import React from "react";
import ProtectedRoute from "@/hooks/useProtectedRoute";
import AdminLayout from "@/components/Layouts/AdminLayout";
import Statistics from "@/components/Dashboard/E-commerce";

export const metadata: Metadata = {
  title:
    "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function Home() {
  return (
    <ProtectedRoute role="admin">
      <AdminLayout>
        <Statistics />
      </AdminLayout>
    </ProtectedRoute>
  );
}
