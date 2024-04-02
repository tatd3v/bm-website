export const groupByYear = (array) => {
  return array.reduce((acc, obj) => {
    const date = new Date(obj.date);
    const year = date.getFullYear();
    const key = `year${year}`;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);

    return acc;
  }, {});
};
