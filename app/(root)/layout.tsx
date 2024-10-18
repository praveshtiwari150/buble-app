import { auth } from "@/auth";

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  return <main>{children}</main>;
};

export default RootLayout;
