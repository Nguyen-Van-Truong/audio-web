import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RepairService {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ServiceCardProps {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

// Inline ServiceCard component since we can't import it correctly
const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-40 overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <a
          href={link}
          className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800"
        >
          Learn more
          <ArrowRight className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

interface RepairServicesPreviewProps {
  services?: RepairService[];
  title?: string;
  description?: string;
}

const RepairServicesPreview: React.FC<RepairServicesPreviewProps> = ({
  services = [
    {
      id: "1",
      name: "Smartphone Repair",
      description: "Screen replacement, battery replacement, and more",
      imageUrl:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80",
      link: "/services/smartphone-repair",
    },
    {
      id: "2",
      name: "Laptop Repair",
      description: "Hardware upgrades, keyboard replacement, and diagnostics",
      imageUrl:
        "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600&q=80",
      link: "/services/laptop-repair",
    },
    {
      id: "3",
      name: "TV Repair",
      description:
        "Screen issues, power problems, and smart TV troubleshooting",
      imageUrl:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80",
      link: "/services/tv-repair",
    },
    {
      id: "4",
      name: "Audio Equipment Repair",
      description: "Speaker repair, amplifier diagnostics, and headphone fixes",
      imageUrl:
        "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&q=80",
      link: "/services/audio-repair",
    },
  ],
  title = "Professional Repair Services",
  description = "Get your electronics fixed by certified technicians with quick turnaround times and warranty on all repairs.",
}) => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mt-2 max-w-3xl">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              imageUrl={service.imageUrl}
              link={service.link}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="group">
            View All Repair Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RepairServicesPreview;
