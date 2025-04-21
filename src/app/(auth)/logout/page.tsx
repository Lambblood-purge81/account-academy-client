"use client";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/hooks/redux.hook';

const Logout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    // Dispatch the logout action
    dispatch(logout());

    // Redirect to the home page
    router.push('/');
  }, [dispatch, router]);

  return <div>Logging out...</div>;
};

export default Logout;