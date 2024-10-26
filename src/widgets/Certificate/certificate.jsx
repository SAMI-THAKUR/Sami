import { Award, ExternalLink } from "lucide-react";
import { Icon } from "@iconify/react";
// This would typically come from a database or API
const certificates = [
  {
    id: 1,
    name: "Fundamentals of Deep Learning",
    organization: "NVIDIA",
    icons: "lineicons:nvidia",
    url: "https://learn.nvidia.com/certificates?id=10Y6jKznTK2oXZDvEGK_rw",
  },
  {
    id: 2,
    name: "Applications of AI for Anomaly Detection",
    organization: "Udacity",
    icons: "lineicons:nvidia",
    url: "https://learn.nvidia.com/certificates?id=o5MFo4shSGa8yUFRF8AJyQ",
  },
  {
    id: 3,
    name: "Applications of AI for Predictive Maintenance",
    organization: "NVIDIA",
    icons: "lineicons:nvidia",
    url: "https://learn.nvidia.com/certificates?id=yDw3Je1_Rl6f8Q7H2SEbCg",
  },
  {
    id: 4,
    name: "Machine Learning & Data Science ",
    organization: "Udemy",
    icons: "simple-icons:udemy",
    url: "https://www.udemy.com/certificate/UC-9dd15395-7744-43bc-9f9d-46502af1a81e/",
  },
];

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-4">
      <header className="mb-5 text-left">
        <h1 className=" mb-4 text-HEADING dark:text-darkHEADING text-5xl font-tourney"># My Certificates</h1>
        <p className="text-xl text-SUBTEXT dark:text-darkSUBTEXT font-robo tracking-wider">
          A collection of my professional certifications and achievements
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="rounded-xl bg-SBG dark:bg-darkSBG shadow-md flex flex-col p-4">
            <div className="mb-2">
              <h2 className="text-xl font-robo font-bold text-HEADING dark:text-darkHEADING tracking-wider mb-2">{cert.name}</h2>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <Icon icon={cert.icons} className="text-3xl text-SUBTEXT dark:text-darkSUBTEXT" />
              <span className="px-3 py-1 text-base text-SUBTEXT dark:text-darkSUBTEXT bg-BG dark:bg-darkBG rounded-lg">{cert.organization}</span>
            </div>
            <div className="mt-auto">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-base gap-2 px-4 py-1 rounded-lg font-semibold bg-HEADING text-BG dark:bg-darkHEADING dark:text-darkBG"
              >
                View Certificate
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
