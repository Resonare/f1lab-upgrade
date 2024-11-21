import { useLocation } from "@remix-run/react";

import Tag from "./Tag";

const ServiceTags = ({ inverseColor = false, children }) => {
  const services = children;

  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/");
  const currentLocation = path[path.length - 1];

  if (!services || services.length == 0) return null;

  return (
    <div className="flex flex-col gap-5">
      <p
        className={`${
          inverseColor && `text-gray-100`
        } font-text font-normal text-sm leading-tight`}
      >
        Услуги в кейсе
      </p>
      <div className="flex flex-wrap gap-5">
        {services.map((service) => (
          <Tag
            key={service.id}
            className={`${service.link === currentLocation && `bg-f1-light`}`}
          >
            {service.title}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default ServiceTags;
