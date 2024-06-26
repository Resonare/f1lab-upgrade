import ServicesPage from "../components/ServicesPage";

export const meta = () => {
    return [
      { title: 'F1LAB' },
      { name: 'Услуги', content: 'Welcome to Remix!' },
    ];
  };

export default function Services() {
    return (
      <ServicesPage />
    );
  }