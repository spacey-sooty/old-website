import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <h1> Error 404 Page Not Found !! </h1>
      <Link className="link" href="/"> <h2> Back to home </h2> </Link>
    </div>
  )
}
