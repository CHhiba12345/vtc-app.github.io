"use client";

import NavBar from "@/Components/Navigation/NavBar";
import Footer from "@/Components/Navigation/Footer";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function VehiclesPage() {
  const { t } = useTranslation("common");

  const vehicles = [
    {
      name: "Mercedes Classe E",
      category: "Berline Premium",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop",
      passengers: 4,
      luggage: 3,
      features: [
        "Climatisation automatique",
        "GPS intégré",
        "WiFi gratuit",
        "Sièges cuir",
        "Vitres teintées",
      ],
      description:
        "Véhicule idéal pour les trajets d'affaires et transferts aéroport. Confort et élégance garantis.",
      price: "À partir de 2,50€/km",
    },
    {
      name: "Mercedes Classe S",
      category: "Berline de Luxe",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      passengers: 4,
      luggage: 2,
      features: [
        "Luxe premium",
        "Climatisation 4 zones",
        "GPS premium",
        "WiFi haut débit",
        "Bar intégré",
        "Sièges massants",
      ],
      description:
        "Le summum du luxe pour vos événements spéciaux et déplacements VIP.",
      price: "À partir de 3,50€/km",
    },
    {
      name: "Mercedes Vito",
      category: "Minivan Premium",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      passengers: 8,
      luggage: 6,
      features: [
        "Transport de groupe",
        "Climatisation",
        "GPS",
        "WiFi",
        "Espace bagages",
        "Sièges confort",
      ],
      description:
        "Parfait pour les déplacements en groupe, transferts familiaux ou événements d'entreprise.",
      price: "À partir de 3,00€/km",
    },
    {
      name: "BMW Série 5",
      category: "Berline Sportive",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      passengers: 4,
      luggage: 3,
      features: [
        "Conduite sportive",
        "Climatisation",
        "GPS",
        "WiFi",
        "Système audio premium",
        "Jantes alliage",
      ],
      description:
        "Alliance parfaite entre confort et dynamisme pour vos trajets urbains.",
      price: "À partir de 2,80€/km",
    },
    {
      name: "Audi A6",
      category: "Berline Executive",
      image:
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop",
      passengers: 4,
      luggage: 3,
      features: [
        "Technologie avancée",
        "Climatisation",
        "GPS",
        "WiFi",
        "Virtual Cockpit",
        "Éclairage LED",
      ],
      description:
        "Technologie de pointe et confort premium pour l'homme d'affaires moderne.",
      price: "À partir de 2,70€/km",
    },
    {
      name: "Tesla Model S",
      category: "Berline Électrique",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop",
      passengers: 5,
      luggage: 2,
      features: [
        "100% électrique",
        "Conduite silencieuse",
        "Écran tactile",
        "WiFi",
        "Autopilot",
        "Charge rapide",
      ],
      description:
        "Transport écologique haut de gamme avec la technologie Tesla.",
      price: "À partir de 3,20€/km",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Notre Flotte Premium
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Découvrez notre sélection de véhicules haut de gamme,
              régulièrement entretenus et équipés pour votre confort et votre
              sécurité
            </p>
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {vehicle.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {vehicle.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{vehicle.description}</p>

                    <div className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold">
                          {vehicle.passengers}
                        </span>
                        <span className="ml-1">passagers</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 6V8H4v2h12z" />
                        </svg>
                        <span className="font-semibold">{vehicle.luggage}</span>
                        <span className="ml-1">bagages</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900">
                        Équipements :
                      </h4>
                      <div className="grid grid-cols-2 gap-1">
                        {vehicle.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <svg
                              className="w-3 h-3 mr-2 text-primary"
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

                    <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                      Réserver ce Véhicule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir Notre Flotte ?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qualité Premium
                </h3>
                <p className="text-gray-600">
                  Véhicules haut de gamme régulièrement entretenus selon les
                  standards constructeur
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Assurance Complète
                </h3>
                <p className="text-gray-600">
                  Tous nos véhicules sont assurés tous risques pour votre
                  tranquillité d&apos;esprit
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Confort Maximal
                </h3>
                <p className="text-gray-600">
                  Climatisation, WiFi, sièges cuir et toutes les commodités pour
                  votre bien-être
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Réservez Votre Véhicule Maintenant
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous pour choisir le véhicule parfait pour votre trajet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0486123456"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                04 86 12 34 56
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Demander un Devis
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
