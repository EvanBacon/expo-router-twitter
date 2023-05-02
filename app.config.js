module.exports = ({ config }) => {
  if (process.env.NODE_ENV === "development") {
    config.ios.associatedDomains.push(
      `applinks:${process.env.EXPO_TUNNEL_SUBDOMAIN}.ngrok.io`,
      `webcredentials:${process.env.EXPO_TUNNEL_SUBDOMAIN}.ngrok.io`,
      `activitycontinuation:${process.env.EXPO_TUNNEL_SUBDOMAIN}.ngrok.io`
    );
  }
  return config;
};
