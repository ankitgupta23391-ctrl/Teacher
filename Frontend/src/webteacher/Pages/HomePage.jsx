// Pages/HomePage.jsx
import { Header } from "../Components/Header";
import { HeroSection } from "../Components/HeroSection";
import { OurTeachers } from "../Components/OurTeacher";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
     <OurTeachers/> 

      <footer
        id="contact"
        className="bg-gray-900 text-white text-center py-6"
      >
        <p>© 2026 Teacher Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
