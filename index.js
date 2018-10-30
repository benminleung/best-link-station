const getDistance = (a, b) => Math.hypot(Math.abs(a.x - b.x), Math.abs(a.y - b.y))
const getPower = (reach, distance) => Math.pow(Math.max((reach - distance), 0), 2)

const stations = [{x: 0, y: 0, r: 10}, {x: 20, y: 20, r: 5}, {x: 10, y: 0, r: 12}]
const points = [{x: 0, y: 0}, {x: 100, y: 100}, {x: 15, y: 10}, {x: 18, y: 18}]

const bestLinkStation = point => {
  const bestStn = stations.reduce((prevStn, stn) => {
    const stnPower = getPower(stn.r, getDistance(point, stn))
    return stnPower > prevStn.z ? {x: stn.x, y: stn.y, z: stnPower} : prevStn
  }, {z: 0})

  return bestStn.z === 0
    ? `No link station within reach for point ${point.x}, ${point.y}`
    : `Best link station for point ${point.x}, ${point.y} is ${bestStn.x},${bestStn.y} with power ${bestStn.z}`
}

points.forEach( point => console.log(bestLinkStation(point)));
