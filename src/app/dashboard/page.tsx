"use client"
import Loader from "@/components/common/Loader";
import { useAppSelector } from "@/hooks/redux.hook";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../store/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        router.push("/dashboard/admin");
      } else if (user.role === "student") {
        router.push("/dashboard/student");
      }
      else {
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  }, [user, router]);
  // }, [user, router]);

  return <Loader />;
}
