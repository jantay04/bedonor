import React from "react";
import HeaderAdmin from "./HeaderAdmin";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      <HeaderAdmin />
      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default AdminLayout;
