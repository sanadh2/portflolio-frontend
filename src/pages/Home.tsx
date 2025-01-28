import { Link } from "react-router";

export default function Home() {
  return (
    <div className="p-3 md:p-7">
      <Link to={"/dashboard"}>DashBoard</Link>
    </div>
  );
}
