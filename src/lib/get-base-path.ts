const getBasePath = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return basePath;
};

export default getBasePath;
