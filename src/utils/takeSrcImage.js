export const takeSrcImage = (name, category, type) => {
  const filename = name.replace(/\s/g, "");
  return `../../assets/images/${category}/${filename}.${type}`;
};
