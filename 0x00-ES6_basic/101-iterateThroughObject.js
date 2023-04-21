export default function iterateThroughObject(reportWithIterator) {
  let space = '';

  for (const value of reportWithIterator) {
    space += `${value} | `;
  }

  return space.slice(0, space.length - 3);
}
