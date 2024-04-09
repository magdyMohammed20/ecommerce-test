import RegisterHeader from "@/components/RegisterHeader/RegisterHeader";
import RegisterSidebar from "@/components/RegisterSidebar/RegisterSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <RegisterHeader />
      <div className="flex gap-5">
        <main className="w-full py-[70px] rtl:pr-[96px] ltr:pl-[96px]">{children}</main>
        <RegisterSidebar />
      </div>
    </div>
  );
}
