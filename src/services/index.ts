import UAParser from "ua-parser-js"

export function isMobileDevice(): boolean {
  const userAgent = window.navigator.userAgent.toLowerCase()

  const parser = new UAParser(userAgent)
  return (
    parser.getDevice().type === "mobile" || parser.getDevice().type === "tablet"
  )
}

export function isiOS(): boolean {
  const userAgent = window.navigator.userAgent.toLowerCase()

  const parser = new UAParser(userAgent)
  return parser.getOS().name === "iOS"
}

export function isFacebookLink(link: string): boolean {
  return link.includes("facebook")
}

export function getFacebookPath(link: string): string {
  const splitUrl = link.split("/")
  return splitUrl[splitUrl.length - 1]
}
