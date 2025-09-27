import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
  Gamepad2,
  Rocket,
  Star,
  ExternalLink,
} from "lucide-react";

// Profile data structure
const profileData = {
  name: "Deep Mandloi",
  title: "Software Engineer & CodePath Student",
  funFacts: [
    {
      id: 1,
      title: "Pro Call of Duty Mobile Player",
      description:
        "I was a professional player for Call of Duty Mobile in 2020 and qualified for regional CODM Champs 2020, which was unfortunately cancelled due to COVID-19.",
      icon: Gamepad2,
    },
    {
      id: 2,
      title: "CodePath AI Open Source Course",
      description:
        "Currently enrolled in the CodePath AI Open Source Course and absolutely loving the experience so far!",
      icon: Rocket,
    },
  ],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/yourusername",
      icon: Github,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      icon: Linkedin,
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: Twitter,
    },
  ],
  repoUrl: "https://github.com/mandloideep/dokploy-examples-vps",
};

// Modular components
function ProfileHeader() {
  return (
    <div className="text-center mb-12">
      <div className="mb-8">
        <Image
          src="/codepath_wide.png"
          alt="CodePath Logo"
          width={300}
          height={120}
          className="mx-auto mb-6"
          priority
        />
      </div>
      <h1 className="text-5xl font-bold text-codepath-blue mb-4">
        {profileData.name}
      </h1>
      <p className="text-xl text-gray-600 mb-6">{profileData.title}</p>
      <div className="w-24 h-1 bg-gradient-to-r from-codepath-green to-codepath-accent mx-auto"></div>
    </div>
  );
}

function FunFactCard({ fact }: { fact: (typeof profileData.funFacts)[0] }) {
  const IconComponent = fact.icon;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-codepath-green">
      <div className="flex items-start space-x-4">
        <div className="text-codepath-green">
          <IconComponent size={48} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-codepath-blue mb-3">
            {fact.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{fact.description}</p>
        </div>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-semibold text-codepath-blue mb-6 text-center">
        Connect With Me
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {profileData.socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-codepath-accent hover:bg-codepath-green transition-colors duration-300 text-codepath-blue hover:text-white group"
            >
              <IconComponent
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">{social.platform}</span>
              <ExternalLink
                size={16}
                className="opacity-60"
              />
            </a>
          );
        })}
      </div>

      {/* Star Repo Button */}
      <div className="text-center">
        <a
          href={profileData.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 px-6 py-3 bg-codepath-blue hover:bg-codepath-green text-white rounded-xl transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
        >
          <Star
            size={24}
            className="fill-current"
          />
          <span>Repo URL</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}

function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 w-32 h-32 bg-codepath-accent opacity-10 rounded-full"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-codepath-green opacity-10 rounded-full"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-codepath-blue opacity-5 rounded-full"></div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative">
      <BackgroundDecoration />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <ProfileHeader />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Fun Facts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profileData.funFacts.map((fact) => (
              <FunFactCard
                key={fact.id}
                fact={fact}
              />
            ))}
          </div>

          {/* Social Links Section */}
          <SocialLinks />

          {/* CodePath Appreciation Section */}
          <div className="bg-gradient-to-r from-codepath-green to-codepath-accent rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">CodePath Journey</h3>
            <p className="text-lg opacity-90">
              Grateful to be part of the CodePath community and excited about
              the learning journey ahead!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
