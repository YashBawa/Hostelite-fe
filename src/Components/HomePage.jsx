import Dashboard from "../Common/Dashboard";

export default function HomePage() {
  return (
    <div className="flex">
      <div className="relative">
        <Dashboard />
      </div>
      <div style={{ paddingLeft: "20%" }}>test</div>
    </div>
  );
}
