const getBestLinkStation = (point, stations) => stations.reduce((prevStn, stn) => {
  const power = Math.pow(Math.max((stn.r - Math.hypot(Math.abs(point.x - stn.x), Math.abs(point.y - stn.y))), 0), 2)
  return power > prevStn.power ? { stn, point, power } : prevStn
}, { point, power: 0 })

const printBest = best => !best.power
  ? `No link station within reach for point ${best.point.x}, ${best.point.y}`
  : `Best link station for point ${best.point.x}, ${best.point.y} is ${best.stn.x}, ${best.stn.y} with power ${best.power}`

const stations = [{ x: 0, y: 0, r: 10 }, { x: 20, y: 20, r: 5 }, { x: 10, y: 0, r: 12 }]
const points = [{ x: 0, y: 0 }, { x: 100, y: 100 }, { x: 15, y: 10 }, { x: 18, y: 18 }]

points.forEach(point => console.log(printBest(getBestLinkStation(point, stations))))

// This is the ridiculous version of index.js that has the least lines but only barley readable.
