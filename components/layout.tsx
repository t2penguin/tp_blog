import Alert from './alert'
// import Footer from './footer'
import Meta from './meta'

import Footer from './myfooter'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">

        {/* <Alert preview={preview} /> */}
        <main>{children}</main>

      </div>
      <Footer />
    </>
  )
}

export default Layout
