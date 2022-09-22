export const data = [];
for (let i = 0; i < 10; i += 1) {
  const temp = {
    id: i,
    checked: Math.random() > 0.5,
    value: Math.floor(Math.random() * 11),
  };
  data.push(temp);
}
