export const getRandomPict = () => {
  const random = Math.floor(Math.random() * 1000) + 1
  return `https://picsum.photos/id/${random}/400/200`
}
