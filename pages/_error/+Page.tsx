export { Page }

function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <>
        <h1 className="text-center">404 Page Not Found</h1>
      </>
    )
  } else {
    return (
      <>
        <h1 className="text-center">500 Internal Error</h1>
      </>
    )
  }
}
