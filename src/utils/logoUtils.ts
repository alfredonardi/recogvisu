// Convert the logo to a base64 string to use in PDF
export const getLogoPath = () => {
  // Using absolute URL path
  const baseUrl = window.location.origin;
  return `${baseUrl}/logo.jpg`;
};