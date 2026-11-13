export interface PersonalSocials {
  linkedin: string;
  github: string;
  facebook: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  status: string;
  availabilityNote: string;
  bio: string;
  location: string;
  avatarUrl: string;
  email: string;
  cvUrl: string;
  cvFileName: string;
  socials: PersonalSocials;
}

export const personalData: PersonalInfo = {
  name: "Nguyen Cong Tri",
  role: "Frontend Developer",
  status: "Open to opportunities",
  availabilityNote: "Open to Frontend Developer opportunities",
  bio: "I am a Frontend Developer passionate about building modern, responsive, and user-friendly web applications using React, Next.js, and TypeScript.",
  location: "Ho Chi Minh City, Vietnam",
  avatarUrl: "/images/IDPhoto.jpg",
  email: "trinc304@gmail.com",
  cvUrl: "/pdf/CV_NguyenCongTri.pdf",
  cvFileName: "CV_NguyenCongTri.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/nguyễn-công-trí-6a8514448/",
    github: "https://github.com/TriNguyen30",
    facebook: "https://www.facebook.com/trinc304",
  },
};
