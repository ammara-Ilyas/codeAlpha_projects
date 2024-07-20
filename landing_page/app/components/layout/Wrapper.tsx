import React from "react";

function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full mx-auto py-10">{children}</div>;
}

export default Wrapper;
