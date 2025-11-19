import React from "react";

export default function RestaurantTeam({index}) {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Executive Chef",
      image:
        "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Nadiya Hussain",
      role: "Head Chef",
      image:
        "https://th.bing.com/th/id/R.9daeb3999b213d23be4df4b36f151a07?rik=sMN7QG9al2Qr%2bQ&pid=ImgRaw&r=0",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Jessica William",
      role: "Pastry Chef",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.TW25XcKrUHF201P3Rd3fagHaHm?rs=1&pid=ImgDetMain&o=7&rm=3",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Johnson",
      role: "Sous Chef",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-16"
      data-aos="fade-right"
      data-aos-delay={index * 100}
    >
      <div className="text-center mb-12">
        <h3
          className="text-4xl font-bold text-gray-900 mb-3 hover:text-amber-600 hover:scale-y-110 transition-all"
         
        >
          Meet Our Culinary Team
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto hover:text-orange-600  transition-all">
          Passionate chefs dedicated to creating unforgettable dining
          experiences
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            {/* Image Container - Centered and Rounded */}
            <div className="flex justify-center pt-8 pb-4">
              <div className="relative group/img">
                <img
                  alt={member.name}
                  src={member.image}
                  className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl transition-all duration-500 group-hover:border-amber-500 group-hover:scale-110"
                />

                {/* Ring Effect on Hover */}
                <div className="absolute inset-0 rounded-full border-4 border-amber-500 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>

            {/* Content Area */}
            <div className="px-6 pb-6 text-center">
              <h5 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors duration-300">
                {member.name}
              </h5>
              <p className="text-amber-600 font-medium text-sm tracking-wide mb-4">
                {member.role}
              </p>

              {/* Social Icons - Rounded */}
              <div className="flex justify-center space-x-2">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href={member.social[platform]}
                      aria-label={platform}
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                    >
                      {platform === "facebook" && (
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12a10 10 0 10-11.93 9.87v-6.98h-3v-2.89h3v-2.2c0-3 1.79-4.62 4.53-4.62 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.86v2.37h3.32l-.53 2.89h-2.79v6.98A10 10 0 0022 12z" />
                        </svg>
                      )}
                      {platform === "twitter" && (
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.06 9.06 0 01-2.88 1.1 4.48 4.48 0 00-7.64 4.08A12.86 12.86 0 013 4.92a4.48 4.48 0 001.39 5.98 4.48 4.48 0 01-2.03-.56v.06a4.48 4.48 0 003.6 4.4 4.52 4.52 0 01-2.02.08 4.48 4.48 0 004.18 3.13 9 9 0 01-5.62 1.9A9.3 9.3 0 012 18.13a12.7 12.7 0 006.88 2.02c8.26 0 12.79-6.85 12.79-12.79 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z" />
                        </svg>
                      )}
                      {platform === "instagram" && (
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                        </svg>
                      )}
                      {platform === "linkedin" && (
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 8a6 6 0 011 11.9v-5.7h-3v5.7h-3v-7h3v-2a1 1 0 011-1h2v-3h-2zM6 7a2 2 0 11.001-3.999A2 2 0 016 7zm-2 9h3v-7H4v7z" />
                        </svg>
                      )}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
