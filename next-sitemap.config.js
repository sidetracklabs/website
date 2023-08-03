/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.DEPLOY_URL ?? "https://sidetrack.run",
  generateRobotsTxt: true,
};
