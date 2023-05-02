export const users = [
  {
    user: "baconbrix",
    name: "Evan Bacon",
    image: "/users/baconbrix.jpeg",
  },
  {
    user: "ccheever",
    name: "Charlie Cheever",
    image: "/users/ccheever.jpeg",
  },
  {
    user: "theavocoder",
    name: "Lydia Hallie",
    image: "/users/theavocoder.jpeg",
  },
  {
    user: "umy_b",
    name: "Umy Boonmarlart",
    image: "/users/umy_b.jpeg",
  },
  {
    user: "expo.dev",
    name: "Expo",
    image: "/users/expo.dev.jpeg",
  },
];

export type Post = {
  user: {
    user: string;
    name: string;
    image: string;
  };
  post: string;
  id: string;
};

export const posts = [
  {
    user: "baconbrix",
    post: "This is a post",
  },
  {
    user: "ccheever",
    post: "Just finished building a cool new feature using React Native!",
  },
  {
    user: "theavocoder",
    post: "Check out my latest blog post on JavaScript: Understanding Promises.",
  },
  {
    user: "umy_b",
    post: "Exploring the power of GraphQL in my latest project.",
  },
  {
    user: "expo.dev",
    post: "Announcing Expo SDK 46: new features, improvements, and bug fixes.",
  },
  {
    user: "baconbrix",
    post: "Working on an awesome new game in Unity!",
  },
  {
    user: "ccheever",
    post: "Has anyone tried the new React Native navigation library? Thoughts?",
  },
  {
    user: "theavocoder",
    post: "Excited to be speaking at the upcoming JSConf!",
  },
  {
    user: "umy_b",
    post: "Love using TypeScript with React, it makes development so much smoother.",
  },
  {
    user: "expo.dev",
    post: "Learn how to build and deploy your first Expo app with our comprehensive guide.",
  },
  {
    user: "baconbrix",
    post: "Sharing my top 5 resources for learning React Native. Check them out!",
  },
  {
    user: "ccheever",
    post: "Anyone interested in collaborating on an open-source project? Hit me up!",
  },
  {
    user: "theavocoder",
    post: 'I just published a new article: "Demystifying JavaScript Closures" - give it a read!',
  },
  {
    user: "umy_b",
    post: "Recently started using Firebase for my app backend. Loving it so far!",
  },
  {
    user: "expo.dev",
    post: "Expo Snack: An instant way to test your React Native code without setting up a local development environment.",
  },
  {
    user: "baconbrix",
    post: "My thoughts on the future of AR and VR in mobile app development.",
  },
  {
    user: "ccheever",
    post: "Webpack vs. Parcel: which bundler do you prefer and why?",
  },
  {
    user: "theavocoder",
    post: "Want to learn about Array methods in JavaScript? Check out my latest video tutorial!",
  },
  {
    user: "umy_b",
    post: "The importance of accessibility in web and mobile app design.",
  },
  {
    user: "expo.dev",
    post: "Get started with Expo Push Notifications using our step-by-step guide.",
  },
  // More posts can be added here
].map((v, id) => ({ ...v, id, user: users.find((u) => u.user === v.user) }));
