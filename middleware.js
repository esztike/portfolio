export const config = {
  matcher: ["/"],
};

export default function middleware(request) {
  console.log("middleware hit:", request.url);
}
