"use client";

import NavBar from "@/Components/Navigation/NavBar";
import Footer from "@/Components/Navigation/Footer";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const { t } = useTranslation("common");

  const services = [
    {
      title: "Transfert Aéroport",
      description:
        "Service navette depuis/vers l'aéroport Marseille Provence 24h/24",
      image: "/img/services/airport-transfer.jpg",
      features: [
        "Suivi des vols en temps réel",
        "Accueil personnalisé",
        "Tarif fixe garanti",
        "Véhicules premium",
      ],
      href: "/services/airport",
    },
    {
      title: "Transport Professionnel",
      description:
        "Solutions de transport pour vos rendez-vous d'affaires et déplacements professionnels",
      image: "/img/services/business-transport.jpg",
      features: [
        "Ponctualité garantie",
        "Facturation entreprise",
        "Chauffeurs discrets",
        "WiFi à bord",
      ],
      href: "/services/business",
    },
    {
      title: "Événements Privés",
      description:
        "Transport pour vos événements privés, mariages et occasions spéciales",
      image: "/img/services/event-transport.jpg",
      features: [
        "Véhicules de luxe",
        "Service sur mesure",
        "Décoration possible",
        "Chauffeur en costume",
      ],
      href: "/services/events",
    },
    {
      title: "Courses Urbaines",
      description:
        "Déplacements dans Marseille et sa région avec service à la demande",
      image: "/img/services/city-transport.jpg",
      features: [
        "Réservation immédiate",
        "Tarifs compétitifs",
        "Connaissance locale",
        "Paiement sécurisé",
      ],
      href: "/services/city",
    },
    {
      title: "Tours Touristiques",
      description:
        "Découverte de Marseille et de la région PACA avec chauffeur guide",
      image: "/img/services/tourist-transport.jpg",
      features: [
        "Circuits personnalisés",
        "Chauffeur guide",
        "Arrêts photos",
        "Découverte locale",
      ],
      href: "/services/tours",
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
              Nos Services VTC à Marseille
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services de transport premium
              adaptés à tous vos besoins de déplacement dans la région
              marseillaise
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
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
                        </li>
                      ))}
                    </ul>

                    <a
                      href={service.href}
                      className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                    >
                      En Savoir Plus
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Prêt à Réserver Votre Transport ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour une réservation ou un devis
              personnalisé
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
                Formulaire de Contact
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
