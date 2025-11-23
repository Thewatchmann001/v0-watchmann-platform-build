import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';
import { FaLaptopCode, FaPaintBrush, FaRobot, FaDatabase, FaCogs, FaLightbulb } from 'react-icons/fa';

export default function ServicesPage() {
  const services = [
    { title: "Software & Applications", description: "Custom software, ERP/CRM, portals, API integrations.", icon: <FaLaptopCode /> },
    { title: "Web Development & Design", description: "Corporate websites, dashboards, UI/UX, branding.", icon: <FaPaintBrush /> },
    { title: "Artificial Intelligence", description: "AI models, NLP, CV, predictive analytics, chatbots.", icon: <FaRobot /> },
    { title: "Engineering & Modeling", description: "3D CAD, simulations, industrial automation, IoT, robotics.", icon: <FaCogs /> },
    { title: "Data & Cloud", description: "Cloud architecture, data pipelines, analytics, database optimization.", icon: <FaDatabase /> },
    { title: "Consulting & Strategy", description: "Digital transformation, feasibility studies, project management.", icon: <FaLightbulb /> },
  ];

  return (
    <>
      <Navbar />
      <section className="container mx-auto py-16">
        <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
