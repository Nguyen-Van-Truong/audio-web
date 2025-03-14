import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  image?: string;
  title?: string;
  description?: string;
  linkUrl?: string;
}

const ServiceCard = ({
  image = "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=600&q=80",
  title = "Electronics Repair",
  description = "Professional repair services for all your electronic devices with quick turnaround times.",
  linkUrl = "/services/electronics-repair",
}: ServiceCardProps) => {
  return (
    <Card className="w-full max-w-[280px] overflow-hidden h-[200px] flex flex-col bg-white">
      <div className="relative h-20 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-1 flex-grow">
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button
          variant="link"
          className="p-0 h-auto text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
          asChild
        >
          <a href={linkUrl}>
            Learn more <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
