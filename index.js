const getDistance = (a, b) => Math.hypot(Math.abs(a.x - b.x), Math.abs(a.y - b.y))
const getPower = (reach, distance) => Math.pow(Math.max((reach - distance), 0), 2)

const getBestLinkStation = (device, stations) => stations.reduce((prevStn, stn) => {
  const power = getPower(stn.r, getDistance(device, stn))
  return power > prevStn.power ? { stn, device, power } : prevStn
}, { device, power: 0 })

const printBest = ({ stn, device, power }) => !power
  ? `No link station within reach for device ${device.x}, ${device.y}`
  : `Best link station for device ${device.x}, ${device.y} is ${stn.x}, ${stn.y} with power ${power}`

const stations = [{ x: 0, y: 0, r: 10 }, { x: 20, y: 20, r: 5 }, { x: 10, y: 0, r: 12 }]
const devices = [{ x: 0, y: 0 }, { x: 100, y: 100 }, { x: 15, y: 10 }, { x: 18, y: 18 }]

devices.forEach(device => console.log(printBest(getBestLinkStation(device, stations))))

module.exports = { getDistance, getPower, getBestLinkStation, printBest }
