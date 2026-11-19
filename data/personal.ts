export interface PersonalSocials {
  linkedin: string;
  github: string;
  facebook: string;
}

/**
 * Locale-independent profile details. Translatable copy (role, bio, …) lives
 * in `data/content` so it can change with the active language.
 */
export interface PersonalProfile {
  name: string;
  avatarUrl: string;
  email: string;
  cvUrl: string;
  cvFileName: string;
  socials: PersonalSocials;
}

export interface PersonalContent {
  role: string;
  status: string;
  availabilityNote: string;
  bio: string;
  location: string;
}

export const personalData: PersonalProfile = {
  name: "Nguyen Cong Tri",
  avatarUrl: "/images/Avatar.jpg",
  email: "trinc304@gmail.com",
  cvUrl: "/pdf/CV_NguyenCongTri.pdf",
  cvFileName: "CV_NguyenCongTri.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/nguyễn-công-trí-6a8514448/",
    github: "https://github.com/TriNguyen30",
    facebook: "https://www.facebook.com/trinc304",
  },
};
