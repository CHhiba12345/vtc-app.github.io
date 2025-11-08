"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function VehiclesSection() {
  const { t } = useTranslation("common");

  const vehicles = [
    {
      name: "Mercedes Classe E",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop",
      passengers: 4,
      luggage: 3,
      features: ["Climatisation", "GPS", "WiFi", "Sièges cuir"],
    },
    {
      name: "Mercedes Classe S",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      passengers: 4,
      luggage: 2,
      features: ["Luxe", "Climatisation", "GPS", "WiFi", "Bar"],
    },
    {
      name: "Mercedes Vito",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      passengers: 8,
      luggage: 6,
      features: ["Groupe", "Climatisation", "GPS", "WiFi"],
    },
    {
      name: "BMW Série 5",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      passengers: 4,
      luggage: 3,
      features: ["Confort", "Climatisation", "GPS", "WiFi"],
    },
  ];

  return (
    <section className="py-20 bg-white" id="vehicles">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-semibold mb-4">
            {t("vehicles.subtitle")}
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t("vehicles.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("vehicles.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {vehicle.name}
                </h3>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {vehicle.passengers} passagers
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 6V8H4v2h12z" />
                    </svg>
                    {vehicle.luggage} bagages
                  </div>
                </div>

                <div className="space-y-1">
                  {vehicle.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Tous nos véhicules sont régulièrement entretenus et assurés
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            {t("vehicles.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
