import UAParser from "ua-parser-js"

export function isMobileDevice(): boolean {
  const userAgent = window.navigator.userAgent.toLowerCase()

  const parser = new UAParser(userAgent)
  return (
    parser.getDevice().type === "mobile" || parser.getDevice().type === "tablet"
  )
}
