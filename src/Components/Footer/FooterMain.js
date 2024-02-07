import NewsLetter from "../NewsLetter/NewsLetter"
import Footer from "./Footer"

export const FooterMain = () => {
  return (
    <section className="section is-full logo-changer in-home is-8 container-small">
      <div className="radius-36">
        <div className="is-related-articles">
          <NewsLetter />

          <Footer />
        </div>
      </div>
    </section>
  )
}