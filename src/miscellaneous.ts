export interface ResponseObject {
  message: string
  statusCode: number
}

export let increaseHTTPRequestsCounter = () => {
  return ++HTTPRequestsCounter;
}
export let HTTPRequestsCounter: number = 0;