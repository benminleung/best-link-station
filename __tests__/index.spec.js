const { getDistance, getPower, getBestLinkStation, printBest } = require('../index.js')

describe('Unit tests for functions', () => {
  describe('getDistance function', () => {
    it('should return 0 if coordinates are the same', () => {
      expect(getDistance({ x: 0, y: 0 }, { x: 0, y: 0, r: 100 })).toBe(0)
      expect(getDistance({ x: 100, y: 100 }, { x: 100, y: 100, r: 100 })).toBe(0)
    })
    it("should return hypotenuse of the difference between the two coordinate's x and y values", () => {
      expect(getDistance({ x: 0, y: 0 }, { x: 3, y: 4 })).toBe(5)
      expect(getDistance({ x: 20, y: 20 }, { x: 14, y: 12 })).toBe(10)
    })
  })
  describe('getPower function', () => {
    it('should return 0 if reach is less than distance', () => {
      expect(getPower(-1, 0)).toBe(0)
      expect(getPower(2, 5)).toBe(0)
    })
    it('should return the difference between power and reach, raised to the power of 2', () => {
      expect(getPower(3, 2)).toBe(1)
      expect(getPower(10, 5)).toBe(25)
    })
  })
  describe('getBestLinkStation function', () => {
    it('should return object { device, power: 0 } if link station power is 0', () => {
      const device = { x: 0, y: 0 }
      const stations1 = [{ x: 0, y: 0, r: 0 }]
      const stations2 = [{ x: 10, y: 10, r: 9 }]
      const result = { device, power: 0 }
      expect(getBestLinkStation(device, stations1)).toEqual(result)
      expect(getBestLinkStation(device, stations2)).toEqual(result)
    })
    it('should return object { station, device, power } for highest power link station', () => {
      const device = { x: 0, y: 0 }
      const stn = { x: 3, y: 4, r: 10 }
      const stations = [ stn, { x: 3, y: 5, r: 10 }, { x: 3, y: 6, r: 10 } ]
      expect(getBestLinkStation(device, stations)).toEqual({ stn, device, power: 25 })
    })
  })
  describe('printBest function', () => {
    const device = { x: 0, y: 1 }
    const stn = { x: 2, y: 2, r: 10 }
    it('should return "no link station" text with device coordinates if no power from any stations', () => {
      const power = 0
      expect(printBest({ device, power })).toEqual(`No link station within reach for device ${device.x}, ${device.y}`)
    })
    it('should return "best link station" text with device coordinates, station coordinates and power', () => {
      const power = 1
      expect(printBest({ stn, device, power })).toEqual(`Best link station for device ${device.x}, ${device.y} is ${stn.x}, ${stn.y} with power ${power}`)
    })
  })
})
