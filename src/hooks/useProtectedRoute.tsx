"use client"
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "./redux.hook";
// import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
    children: ReactNode; // The children elements to render
    role: string; // The required role for this route
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
    //   const { user, loading } = useAuth();
    const { user } = useAppSelector((state) => state.auth);
    let loading = false;
    const router = useRouter();

    useEffect(() => {
        if (!loading && (!user || user.role !== role)) {
            router.push("/login");
        }
    }, [user, loading, role, router]);

    if (loading) return <p>Loading...</p>;

    return <>{children}</>;
};

export default ProtectedRoute;
