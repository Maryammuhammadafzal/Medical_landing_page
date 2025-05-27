import Image from "next/image";
import AboutPage from "./About/Page";
import ServicesPage from "./Services/Page";
import TeamPage from "./Team/Page";
import ContactPage from "./Contact/Page";

export default function Home() {
  return (
<>
<ServicesPage/>
<AboutPage/>
<TeamPage/>
<ContactPage/>
</>
  );
}
