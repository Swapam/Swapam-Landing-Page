// FeaturesOneData Type
export interface IFeatureOne {
  image: string; // URL to the image
  bg?: string; // Optional background color
  title: string; // Title of the feature
  subtitle: string; // Subtitle description
}

// FeaturesTwoData Type
export interface IFeatureTwo {
  title: string; // Title of the feature
  subtitle: string; // Subtitle description
}

// FeaturesThreeData Type
export interface IFeatureThree {
  title: string; // Title of the feature
  subtitle: string; // Subtitle description
  index: string; // Index of the feature as a string
}

// ReviewsData Type
export interface IReview {
  customer: {
    name: string; // Customer name
    position: string; // Customer's position or title
  };
  rating: number; // Rating (e.g., 5)
  comment: string; // Customer's review comment
  contact: {
    twitter: string; // Twitter handle
  };
}

// FAQData Type
export interface IFAQ {
  question: string; // FAQ question
  answer: string; // FAQ answer
}

// FooterData Type
export interface IFooterSection {
  title: string; // Section title
  links: {
    name: string; // Link name
    url: string; // Link URL
  }[];
}

// SocialMediaFooterLinks Type
export interface ISocialMediaFooter {
  title: string; // Title for the social section
  links: {
    name: string; // Social platform name
    url: string; // Social platform URL
  }[];
}
