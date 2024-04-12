
import { type NextRequest,  NextResponse } from 'next/server'

const middleware = (request: NextRequest) => {
  const reponse= NextResponse.next();
  const themePreferance = request.cookies.get("theme")
  if(!themePreferance){
    reponse.cookies.set("theme","dark")
  }
  return reponse
}

export default middleware