import SideBar from "../components/SideBar";

export default function SideBarPage() {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">SideBar Page</h1>
        <p>This is the SideBar route!</p>
      </main>
    </div>
  );
}
