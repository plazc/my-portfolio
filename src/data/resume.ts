import { FaLinux, FaDocker, FaPython } from "react-icons/fa";
import { SiKubernetes, SiAnsible, SiTerraform, SiGnubash, SiGit, SiJenkins, SiPrometheus } from "react-icons/si";

export const resume = {
    name: "Ahmet Zekeriya Devran",
    title: "Electrical and Electronics Eng. Student",
    contact: {
        location: "Maltepe, Istanbul",
        email: "ahmetzdevran@gmail.com",
        linkedin: "https://linkedin.com/in/adevran",
        github: "https://github.com/adevran" // Assumed from context or added as placeholder
    },
    about: "Self-host enjoyer, optimization addict. Oriented to software integration and Linux, improving team skills for all-out works. Learning Devops fundamentals and prepares himself for this area.",
    expertise: [
        { name: "Linux", icon: FaLinux },
        { name: "Orchestration", icon: SiKubernetes },
        { name: "Automation", icon: SiAnsible },
        { name: "Team work", icon: null }, // General skill
        { name: "Server systems", icon: FaDocker }, // Using Docker as proxy for systems
        { name: "FinOps", icon: null },
    ],
    techStack: [
        { name: "Linux", icon: FaLinux },
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Python", icon: FaPython },
        { name: "Bash", icon: SiGnubash },
        { name: "Git", icon: SiGit },
        { name: "Terraform", icon: SiTerraform },
        { name: "Prometheus", icon: SiPrometheus },
    ],
    keyAchievements: [
        "Self-Learning: Linux, AI Server Automation with Python, Docker, Orchestration practices with minikube.",
        "Internships at some official companies such as ALARKO and TÜBİTAK.",
        "University communities: Joined IEEE Marmara as a board member and set organizations for 300 students."
    ],
    experience: [
        {
            title: "Basics of Open Source, Server, Network, Docker etc. (Self-Learn)",
            period: "Feb 2024 - Present",
            description: [
                "Installed my own personal blog for a year named \"zdevran.com\", ran it in my old pc without server costs. Then I closed it and now setting up new one, named \"ahmet.se\".",
                "Still trying to create some minimal media to learn orchestration with minikube."
            ]
        },
        {
            title: "Community Activities Organizing",
            period: "Oct 2022 - Present",
            description: [
                "Planned main event and organized team as a Community Leader.",
                "Met with guests and reorganized event for their availability.",
                "Implementing the plan correctly and helped participants to benefit from guests as much as they can."
            ]
        },
        {
            title: "Project-based Teams and Competition Participation",
            period: "Feb 2021 - May 2023",
            description: [
                "Joined project-based teams in university. Such as UAV Drone Design Comp. and Hyperloop Design Comp.",
                "Saw hard part of the team working and learned how to set up the psycology and mental health for healthy procession."
            ]
        }
    ],
    education: {
        degree: "Bachelor of Electrical and Electronics Engineering",
        school: "Marmara University",
        period: "Oct 2021 - Jun 2026",
        details: [
            "Relevant coursework in Engineering Basics and Major for an area next year"
        ]
    },
    languages: ["Turkish", "English", "Russian"]
};
