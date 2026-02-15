import { Link } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';

export default function Body() {

  return (
    <>
      <div className="icon-boxes" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="container-fluid">
          <div className="flex flex-wrap align-items-stretch">

            <div className="icon-box">
              <StyledWrapper>
                <div className="bgblue" >
                  <div className="card">
                    <div className="icon">
                      <span className="ti-user" />
                    </div>
                    <header className="entry-header">
                      <h2 className="entry-title">Find your stay choice</h2>
                    </header>
                    <div className="entry-content">
                      <p>     </p>
                    </div>
                    <footer className="entry-footer read-more">
                      <a href="#">
                        read more     </a>
                    </footer>
                  </div>
                </div>
              </StyledWrapper>
            </div>
            <div className="icon-box">
              <StyledWrapper>
                <div className="bgblue">
                  <div className="card">
                    <div className="icon">
                      <span className="ti-folder" />
                    </div>
                    <header className="entry-header">
                      <h2 className="entry-title">Book multiple types &amp; of stay</h2>
                    </header>
                    <div className="entry-content">
                      <p>       </p>
                    </div>
                    <footer className="entry-footer read-more">
                      <a href="#">
                        read more
                      </a>
                    </footer>
                  </div>
                </div>
              </StyledWrapper>
            </div>
            <div className="icon-box">
              <StyledWrapper style={{ height: "100%" }}>
                <div className="bgblue">
                  <div className="card">
                    <div className="icon">
                      <span className="ti-book" />
                    </div>
                    <header className="entry-header">
                      <h2 className="entry-title">Best Plateform</h2>
                    </header>
                    <div className="entry-content">
                      <p>     </p>
                    </div>
                    <footer className="entry-footer read-more">
                      <a href="#">
                        read more
                      </a>
                    </footer>
                  </div>
                </div>
              </StyledWrapper>
            </div>
            <div className="icon-box">
              <StyledWrapper>
                <div className="bgblue">
                  <div className="card" >
                    <div className="icon">
                      <span className="ti-world" />
                    </div>
                    <header className="entry-header">
                      <h2 className="entry-title">From Anywhere</h2>
                    </header>
                    <div className="entry-content">
                      <p>

                      </p>
                    </div>
                    <footer className="entry-footer read-more">
                      <a href="#">
                        read more
                      </a>
                    </footer>
                  </div>
                </div>
              </StyledWrapper>
            </div>
          </div>

        </div>
      </div>
      {/* .icon-boxes */}
      <section className="featured-courses horizontal-column courses-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <header className="heading flex justify-content-between align-items-center">
                <h2 className="entry-title">Most Popular</h2>
                <Link className="btn mt-4 mt-sm-0" to="/allproperty">
                  view all
                </Link>
              </header>
              {/* .heading */}
            </div>
            <div className="col d-flex justify-content-center" style={{ backgroundColor: "" }}>
              <div className="col" style={{ margin: "20px" }}>
                <div className="card shadow-lg" style={{ borderRadius: "20px", width: "18rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                  <div className="img-hover-zoom">
                    <img className="card-img-top " style={{ borderRadius: "20px", margin: "0px" }} src="data:image/jpeg;base64,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" alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">title</h5>
                    <p className="card-text">
                      text
                    </p>
                  </div>
                </div>
              </div>
              <div className="col" style={{ margin: "20px" }} >
                <div className="card shadow-lg" style={{ borderRadius: "20px", width: "18rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                  <div className="img-hover-zoom">
                    <img className="card-img-top " style={{ borderRadius: "20px", margin: "0px" }} src="data:image/jpeg;base64,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" alt="" />
                  </div>                  <div className="card-body">
                    <h5 className="card-title">title</h5>
                    <p className="card-text">
                      text
                    </p>
                  </div>
                </div>
              </div>
              <div className="col" style={{ margin: "20px" }}>
                <div className="card shadow-lg" style={{ borderRadius: "20px", width: "18rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                  <div className="img-hover-zoom">
                    <img className="card-img-top " style={{ borderRadius: "20px", margin: "0px" }} src="data:image/jpeg;base64,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" alt="" />
                  </div>                  <div className="card-body">
                    <h5 className="card-title">title</h5>
                    <p className="card-text">
                      text
                    </p>
                  </div>
                </div>
              </div>
              <div className="col" style={{ margin: "20px" }}>
                <div className="card shadow-lg" style={{ borderRadius: "20px", width: "18rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                  <div className="img-hover-zoom">
                    <img className="card-img-top " style={{ borderRadius: "20px", margin: "0px" }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA6AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEEQAAIBAwIEBAMFBQYEBwAAAAECAwAEERIhBRMxQSJRYXEygZEGFCOhsUJSwdHhU1RikvDxFTRDYyQzRHJzgrL/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EACgRAAICAQQCAQQDAQEAAAAAAAABAhEDBBIhMRNBUQUiMmEUQlKBM//aAAwDAQACEQMRAD8A8nyhXOUKMVI67VzFewo8luYvy8VApXcUfFdKiioveUSZ0oq3GO5BqmgVXTUoGkxpLnfem0ucAHP0rJ0mrI7IfMVKAliT6PU2HFTGQM9POty24jBN8XWvBRsD4lbBPam4bhlxuTS54IyKjknj/Z9BRdgwIZewoV5ZR3CEEDf615ux4xJAuGJZfWt6z4tBMAHwDWSWKcHaNUc+PIqkjGuuFNg6G1H1rJntXiJV1wRXvGiD+NVDZ7ihPZwzeGaJSexK02Gprhip6P8AweDEVFRNNeqbgac0uIhoPrWTc2JjmYBCEBrRHPGZky4ckFbEEIzvV3IxtsKNLa6GBXOk96ctbFGT8Tv0q3NJWIUHKVIzFUntVjGcZwcVsz2aFNEY3q3DrVsusjxBc7g0PlVWH4J7tpiKBnzo0ak7LtmvRLwi2d85VV/WvP8AHXs1uBa2tzIpUeNYoWJJ9+gpOTVwgrY6P0/JJ1YnPxSJJNIBbB0+HzFanCOI20t1bwkEtOhYHyx2+e9eWuF+7wPIsIcBsCTV40O/UHft7VtfYq2W84srggFELqv72d8D0BJriL6rmebxyXDOpH6dihUo9nu7S2jlDHBSnILaA4IQE+eKq0Eq7OdKDy2FYnHftKvCHEMERlc75AyuPQjYn0rRkypctj4Qr0eiaJdJZUAX2oTxR8s+AVk8I4lJxPjEpjmJtRZqRHn9osd/oKc4lNcTv/w7hbpHdFdUsrjVyEPfHcnsPnQKYbimHjhjWPK5x3qURY2jt0RpDJpXBdsZJ89qlMtsGkj44JAdsCu6Ub0NUG/aiLHnocV3DjPg5yT5VGiI6ijLqTzqFyetQDcxfljyqpjp0KGGxxVWibtVl7xIpVCtONGR1oZTzq0g1MXXw9KZjlTuN6roFVK1dFupDsbZ6GipIVOc7ikFYinIWyKjRnnGjX4fxee3YAyEpnevWcMuorwB1OD5GvBgDyrQ4Zd/dZQdz6ZrJmwqS47GYNU8ckn0ezkzDKcqdJqrWkUwzp6+dcsuIRXUSK7A6u9aQtw8eUPauc24cM7EYxyLjkxbrh6KmceEVmyxsMBQQe2BXoJIHzjcDyNVNpI+MYwPSmxzUuRGTApPhUefMVy5IOw7YG9Xj4UdWp1lJ98V6AQIpy+oEd6NbiFWUENucBj0q5amkBHRxb+4yWgKxaipHbGa8bcfZK9umlnIDHJKoDgb9zX0PFjeW33pLjEGWBdhp6Eg9fUV529+1VtbSNa8Dhe8lUEtJI2iNcfmf9b1myTx5I1JWaVilGXB4aXg98oaCGG4dGBD6V2wOgBO+K2OBk/ZqSKSQme5IMaRrkEnruOwricb4pxCC6lnuUih1GPRbLpycHv5day5RxNIp7eSblyMgkWPJJZfX/Fg5+VcnOo43uj6N2OO5OzY4pxW+vrmRLi7mBQFCkedAJ9tsDr327msa4L2do92ZY5zjllV35WSd2Hbbv61qcBhneyRg0rR7jIOFOSfM47+VBlBbrEjf90tkKO6+u/b0oFl3cS9l18DP2R463CYGnkVZTNGqxKB4mk6geo6/SvV/ZQm1tLriF7cB5bqXmTTSeHxdAN+mOgHpXkrK5s7Mabi0SE40RB+qFjk/TYfKrXTXNyVjv7iOSMSfhmMeBPM589sU7zxw4VJ8sBwk5Ua/wBoOI8YuWlRUls7ZCQHXwtIB3wQf4VKx5bWa4XFpeXaW8gw8Qzp65JGTgA1ys2T6hBvhlLBIyVAow09qnLqaK9xZ5tsKtdMatQgMVdXIqAP9EMB7V0F02zRFeibHyqAuXyLE/vD51Qop705oB7UN4qtEU0LFB2qvLo5QjtXNNHYe4By6supehouipo9Ksm4skzAUQTHO4FCCVcJVUgHtHLS+eB9SE48s16fhX2kRdKzbeprxyrTMQ6UjLhhNclw1E8LuDPpkV3FdrqQI1DMxgYkrpX3ry/2dd1n8LnA6g07xHiaySNGmWIONq5j09T2o60dapYt8ux3inHY0t2jgeD7xjw83oPkDk14C443xOxuo5izRI7D8ESakznOQST+VTidjYQ3LfeWuJpWGWyQQM9s4rNjs43gcQmaePUXaBiCAw6FSB19M9q5WtyxxPYjXg3ZVuNm/wCIC7sLfh73M0rljJIoGc9W0k/Os+M3N9mytoVgidgs/L3LLvkavI/KuWyPEpeAQGVseOV90LfEAemd62OD3DW1s3MhWOMsVAcCOQ+u+1Xj1MZqO7gKWKcboy+LiNb+1srZTy7YatKban23/h9akiMOMgzROGd1BJYE4IIO/rQWkVZ3lmmAjiyAWHiduu/vvTNnxOG7OkrCI4gZI9IxnSRnPyzXN1Gp8m6MEa8WLbtcili97w/77ZO8cMaMGSWUAhDg4OT32pae6ieITXMhAj8SdCe+NQ9euPIUC84h95BurjSkOWeHOfEMnGT/AK60lPZrfRn8Z0eUBQANgxB60qGSW1bwtv3NoPNxTmINcEJkIB52ctqwDn0/KixTXIcWdrGWXVmSQ5Oc7nOdts0zF9noLcM8txGoAwCFJboMEHHTt5b1pcP4XDY28kl1puC+fDMmDGewAyc0rJlhFMPbJ9mfZX6zW4aLmu5kI5KpkDHz3GewqUz99to30Wj2ix8rQ+QV09sjtnpXaW0nzRX/AECAKtgUASCriSvoyPGtMJpFTQKoHFWDirspplgtTGOlQMK6GFWmDyWUkdauN6oGFd1VdgssVBFUKVcGu1dlWD010JRcZo0MHMONQHvUc0i03LhCwjqwjrUThbkZDpVjwubGVKH50Hmh8heHL/kzBFRFQ1ojhdz5R/5qzuJTx20fKjLmYnSXUDCn3NKy6vHjjubJDS5skqqh6wuRbGQa1EjrhVJ3NLyXsFvOFkkYsSAzL0XPmayomVrnVKkk8yb/ABHDbHyHQfxp3RaieJ/uxRGwoKHIj98+uOtcLN9aSvYuTsYvpXSnLhF+K2ZuNV1dSBbYBQgx196xOXcXDg4MMMQ1Kg2AA8/WtC9vX/4qltLKJ0ZwQ0nwqo9tgc+XnSXFZni+8WxmYI7OkroowegC/nk157V6ieXK3H2dvS4YwjTfRoWkUMPDFe6njFrdRcstnJzkZPywaweLXJS2jtfvDMom6oT4k7flSUvESlulvc/h27x6VkjXeJxsxx3BO+PWkprG5SJXabUw/E5mvUrJthl9P5b1cMDjy2HKS6QbiHEUvLqJFQiFMkAddz/WmuGrFw+/jcszRpkOAp3Qg5+WKzzG0dypkCaiFYEbZ/1tVriV8MGbRqTQrnPr371pg0qQqTbdFuOJJbXhty5kUFWg0+FSp32Hcda3bK9u0tWtrOOK20jAilU+IkHfGen8u1Z3Br2Y2VzaxaXeOI8pt8hT8QGfLc1S2vrRObruLqa5Yay0a4BHp0x70vLFPpBJtI9BwuyCj71cpKzwxYEcZyNfTYYHrjf3q91xKW4VBm4R5CNMY0nHbrnH0oLcUhh4YJ7JGV5DsGclgeprI4hxiOG6cxObrThvhIKtt3PXz96yeOWSVtFy54Q7bxNDMTA8bSAndoh4RntnvUrPy1y4unCIGUsCHxv5Y/WpTa+QUh4P6j61YSev50T7pbN/6Zf8lWFlanpaj/JXufLI8y5Y/wBgxJ6/nVw/r+dEFhbHraj6VZeH2v8AdvyollkLcsf7B6/X866JPejrYW392H0FFWyt/wC6r9BV+WQDyY0LK9WElNiztsf8ug+Vd+42x/6Sj/6ir8jFvLjFRJVxIaYFlbj/AKa/5RVxaQf2af5RU8rAeTGLCYjcZoy3Mg/aajC2h/s1+gq/3eH+yX6VPIB5YlI72VTku3sabi4kxO+R61SKGBTkwj/LRoxYk/8ALOcb5ERP50uUo/A/Dkm/xYWe9lW0leIapAhKgdzjavn1zfmGQC5D/eVY6lYlSM+f8q91PFYumTa3WO2hSKzzbcPDMz8MvZc9yhJPzNcvV4fLVHc0064bPN3nE7idwYZzFJJhRgaRjsNvanY+I5NuZJVaUW+jwnCrvtgHqRtua9PZBGk0R8Bu1jP7boGI+Qx+lbNnwsXZ1LCiH/vYT8juK5WXSKXujclL0fM55YVDkTBmyfGG6YHlS/MMngZwVB1+I/tHOP4/6xX1x+AMpAlaxHlrmBz9RQGto0Ohb611gfDGdR/SrjpIpVuCbkvR8euYwYgk+VAIaPSPEvbp3B3/ACrUs760lCWqREcuMglkJBBG/wBa+kGzcFSknMY90j1FffFFPCboqHMGf8RjAP50ctKpKnIim16Pj91E8/FQluGfGNJKEg+vp2odxY3skqJ91vJv2XdYDkb42wK+tfdeW2xRW9CAaDPCXAVpXAI30vj8+tFDRxVcg+Xm6PmfC7DiVqksgs7lJY5NUTSwt4tzsPQjYjFCu7W5gvpILK1lkjZeYqlcmNSc49MHb5V9Rj4epRmaS5MZGCWlJB+poDcEsJGVxauxU5Hoc+golpV8l+V3yj5m3Dr64ZCLa4EWM7qQcnuMDf8A38qrPwm75qTPbzKFAHwNuPn7V9XdZATiMDGzZYA0F4pSmVaMgeTEge5xV/xYLotZf0fOLKxnROXFBIWBOBjIwcefTFdr38iZjyWi6elSgejTJ5TIAq4FVAq4r0R45s7irCuA1YVLAZ0V0VADRViJ64x71NxW1sHXaKEUHHeilET4iBQ70WsbYuAT0Fc3BxjejlVZgE3J6YFd+7nVpBGrO++PzqbkV423wLEyE7Ee1RYrmQ4R0z5FadMSZULpLg7qOo+dNx2AOHuFCf4RkFqCWVGnHppN1Rkw2V5MwzcMiMcagvenYuG3eplN/MhQeHTgZFOzKySxu0bLg5A0749KbnQ5M0bDcbYpEsjZvxYFEzhY3PIDDiN1oz3xt+W9DueARzMwM85lI2fmdflWtpW4hGnaRQPDnuKuVSVPENEqjYN0NJlNmuMEYUXA7mBikfEZsY7OybfKnLbglpI3/iOZOT1Zpi36ithgWtwAmrT1znI9qXVspkpISP3PiA+e1ZpWzbCe05HwPh8R/wDDTSQsO2lCP/zmta3M1rFguZ0Ix4sHb22rNWRJTpjkLHuGXBq6l08QfYdcHYe/lWTIn8mrHmj8GvZX1tAmiK2SNR2SnjdWtymh2IHcBmX9K85JPkAsihvTv61dJQcHAI7EUq5I0qSaPQxWHDwCUgiYnuRqJ+tAu+GmRCLVLeM6cD8PG9Zkdwy/CcexpqK/k/follaJsTMqT7PcWkbU1xAD2wx/lUk+z3EUUaLoSt+6WYCvQJesRvj5UZbxO+RTFqJAPTwPInhtzDKVuI8R46Llv0BqsFkGbxyTQA9fA5z9BXtDLHIOoJq4APRj8jR/yGD/ABonkn4RwxosyX5B/wDhapXrmDjdWPTzzXKnnkT+PH4PjKr59auvXGAavHG0mSUOQe1MjSWVRgKfIV29x4hY7AKqHqGHsKPGkYGc5/8ActXQqz4LHbpgZ/Sr6ozsihiP3h/Ogcx0cINV3JDqc7jtRUjPdVqyWokYaVQE7nfaiRxvErLGY5Gz8qreNjga5aOcvK6iNK+hrsVvrHhGWO5GoYHvQkYFybrk47oCRXOc0hCwIqKehTrUtlfbYxLDoQhiXJ6r5VI7d5FwWMSDbqMmr28YWANdtjLeHIzketXuJ4ZGRVZFUf4shgPlS9zY9Y4dlwkcCgpux2A21US3geP8a7JxnwqwGBV7W2RvxkUN5FtioqswaWTSOmrJAfOKU5XwPUdqssxe4yIwcE/EDTRIW30ZzpHQdf0qJGsKHlKcD4gWxvSsa8y45chYhumGOB6UN2OSoYtYdKc9h1B75GKo8HObUj4Knrjp86NO0sSpy9QCjoSMUPh9y/jQsxYncHy/hQ2M4ujiswZpgVBQ+Nc5DfpRJ0yRPAHUsM7DHbyoZmzPy9sO+4wMGnLwOIlVQBgbYPagYS6Yu2m4txIRl164yN6pblbjUrh0lXbUDV7BmEksRxp6kMAcezdqHcRxi5I1yg+YNJkuaLUqVhVjMcioXw53DFe9F1LG55qDHfGwPt5UOSJpoFJlLFd1bTv9altd/wDSuhlfM9aS0aYZA/LRscp8Mx2V9vkD3qhyjhJBg+tVbEOD4pI+mR1FG16kAfEkfbc5H8RQOjTCZ1JSu4OaKtwf2hSciqN432J2yaqH7H65oXFD1I0hKpoiyYPhYg+eazVarrJ2oaYdmqt26j4s+9Ss3nV2pbKPAJIY8hgfXajQKzKxbmaeukJVIUKt+M2TvtT6HUSIxt3Ga9BKSPGQxe2CRnC9CB2Axv70eB1U4kQs37qjOKHqMCgnVljsA2NqAs8kEwNq7AsemMCh5kG5KBoiTxYMZx23pea5SJ+XBGzOevnXDLMHCzK4Y/s6cUcW1wpDOWGQGCjoarhEbc/xBR2pmjeblkJncuh/WtG15VvbkoUYk9SB+VViuuSo1pHIq+ILjpS1xfRDEj2zpq/x5I+WKFuTGxjCHQd9BGzZJ66s7D5UWLhy2pV2casbqTqP+1EsLaO6WOUxaowD4X+L3zRpgrnTp0qNizNg47Z2pbl6Q3xp/cxaW4PL3VsA9U6fU12xjSW457ZMaN4hq67VQsFn5NvdqwO2dP8AKm44orS1IYaXYYDnO5+tVZa5fPo5esxPgBPkFJ/Sg2ZD3erx7DAx2NSSfBUyz7jtjG1MWIUq9xDO75OnBUacegqukGqchm40sSNgeuGO4pOwiZriQrLp28XrV7iWKRgJV3AwCoGfpVeFJyruRvEwHUttn+tD6CfMil/hJNbxqcftdA1OBzNbrJA4cKoyGB29qrckB3UBMNuCRnGe9U4eWQPzH5mR0Axn+lC+gunQKCbl3Wgh/F5DPtRLnJdgq6kzuF60K+B5hlVxuuFxT8TrfW/MiTlSDZ985PnQP5Lj/kV4dcIkzQktg9mq95agSCRMAHrkUpcQupVtRVi2xXem7W65yMJ8OB1I2bNC1XIcXxTJa63BDAFMbYXGKoHeM9MxhsHB39zUzEs+o4AB+Hz96YniZtJUh06g/wBKXJIdCXAF9LOQNS5Iyh2/3oCnSxwG0gbg9P6UdY+YoVcDBzvQ3ljd9IADZxkdfpQUaFMsGGkHOVO3oT796Iux3Ug96By216hsG2IYdvPFG1tq0R+FVwFDknUe+9XQ6My647n86lWARRuAjZ881KukHZ5B7cjwx6H8mUkn5VaILA2p2GfU5xWakxhOiTJb9nem4o4nVXdjIWOy4w3vjyrrNV2eRU3PlElmed21zLGSNh0z6bUxYWCvINcxQA9dB6+WTRo7HSA00IZSPCcZAFEkcxp4EKqOjY6GheT0go4ed0h6W05bOz8p2IwW1A4+falZp5AmiQkaFxgD4jVIOJSQtr1Ahf7QZ3osTfeY3laQTSn4gR08sDzoOV2PbT4iD/Clhjd2kTWdGHx2704nCGIRnYSKOoA8/Wl0t3iuQ8vikzlY8bL7U5eSQgNJz2AJ6K+y+/rVNvpBRgv7I4FeKQDm8rQQoHSiSvzJSfwSzDfG/wClISSM5BSYsnZwNOT9Kat7O5kdZGdVA2Jc/F7VVURP0Gtbd+a8zQKQoGw2HvV7yOKdMH4hk7muxTzGKUKSFDeeMigS3dm8PKAYSZA1H+FL5bGPalTFlt+YdDkMGGBg/lWo0D2lnoVNKDGkg1mBo1uFRdRIGdtsf1rV+8rG6amKFsYU/te9XO+iY1Hkz7u7UGNihyo8+tNcNkhntZZUdyQ2CCe9DvxE7EuEJxlhp7elU4SkIllKc5CQBpwMfnUfRI2pjl1IJuxDhcZ6Ulb3U8N4rYVokAUhgOlPXCvG3PmA0g7HOQ9ZTabj7xInxZ6EZ29MVSqgptpmrcpjKDUFfJC6QVOe4pW1nSO4Me5VcZUDHzNO2syz2cUQjbI3VyNj6Vn3cEjSme2ILMACFHWg7Dla+5D0rLIhUBSrHKldzigRryi3IVTqbBXAyc9OtSzkY23LliYPqyuBg49aHOGSQOFBQDeh/Qy/YzPBG/g0nUF+FmwaVtQocRtqDoThuw9KJAwkAh8YfB0v5+lUeIBgSzKzDceZ70th37Qw6FDzLdicbjH51z8GZxLpAkOzKw3pWCURsBIDpGxPen+WssOp9ifgcVVUGnZwKmR8QJONugqxHhGksRn4h2NB5i6V+8sBkY1AdPlRo410F45hIh3Ok7VYyMjgOXZFwuepPSuUMytEG/D2Y4Ge+OlSpQzeeBtjzZS0m+K3rZRGCyAKwHUVKldHIeb0/QzrcxIS7HV139a7oDoUb4RvipUpRrkYk5JuymSF1YwKdtFxPBpJXBzse+alSnS6MkPyNpppDHNIW31Gg21wy2zzBU1jIGVBx7VKlKXRrfYk7MwBZiSd9zWpbkiFmB3GN/eu1KkwMf5F79mLzrk6QdhWHOSiu6nBTGKlSpArN0OcNUMgkOdZTUT61qT4lsoZHUag2nIHbJqVKXPsZi/Az1u5CGjbSwPhyRkjftRODTONT5yckYPQDNSpUfRcPzRrtGP+Gykk+GTAGfSs020cTM8eVJjzsalShiOn6KcKkl5rLzXIA1AE53rQ41GLbRNDlXYnO+3QVypUl+ReP/yYtaf+ZE42JODjyo9+gjJC/wCGpUoH2GvxYrGSwfP7J29KvFcSNbyNJiRkOAXFSpUYMTk6gxmTGCR0HSl7eRkbUD0GQK7UofQz+wWc61WRgNR70mLma3kYxOQAcY7VKlL9Bt8m3J+JCsjfEQDtUqVKpGg//9k=" alt="" />
                  </div>                  <div className="card-body">
                    <h5 className="card-title">title</h5>
                    <p className="card-text">
                      text
                    </p>
                  </div>
                </div>
              </div>

            </div>
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </section>
      {/* .courses-wrap */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg align-content-lg-stretch">
              <header className="heading">
                <h2 className="entry-title">About us</h2>
                <p>
                  we give plateform to book any type of stay and to host your stay bussiness in this site
                </p>
              </header>
              {/* .heading */}
              <div className="entry-content ezuca-stats">
                <div className="stats-wrap flex flex-wrap justify-content-lg-between">
                  <div className="stats-count">
                    50<span>M+</span>
                    <p>STUDENTS LEARNING</p>
                  </div>
                  {/* .stats-count */}
                  <div className="stats-count">
                    30<span>K+</span>
                    <p>ACTIVE COURSES</p>
                  </div>
                  {/* .stats-count */}
                  <div className="stats-count">
                    340<span>M+</span>
                    <p>INSTRUCTORS ONLINE</p>
                  </div>
                  {/* .stats-count */}
                  <div className="stats-count">
                    20<span>+</span>
                    <p>Country Reached</p>
                  </div>
                  {/* .stats-count */}
                </div>
                {/* .stats-wrap */}
              </div>
              {/* .ezuca-stats */}
            </div>
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </section>
      {/* .about-section */}
      <section className="testimonial-section">
        {/* Swiper */}
        <div className="swiper-container testimonial-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="container">
                <div className="row">
                  <div className=" card shadow-lg" style={{ borderRadius: "20px", height: "100%", width: "100%", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                    <div className="row g-0">
                      <div className="col-4">
                        <div className="img-hover-zoom">
                          <img className="card-img-top " style={{ borderRadius: "20px", margin: "0px", height: "auto" }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA6AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEEQAAIBAwIEBAMFBQYEBwAAAAECAwAEERIhBRMxQSJRYXEygZEGFCOhsUJSwdHhU1RikvDxFTRDYyQzRHJzgrL/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EACgRAAICAQQCAQQDAQEAAAAAAAABAhEDBBIhMRNBUQUiMmEUQlKBM//aAAwDAQACEQMRAD8A8nyhXOUKMVI67VzFewo8luYvy8VApXcUfFdKiioveUSZ0oq3GO5BqmgVXTUoGkxpLnfem0ucAHP0rJ0mrI7IfMVKAliT6PU2HFTGQM9POty24jBN8XWvBRsD4lbBPam4bhlxuTS54IyKjknj/Z9BRdgwIZewoV5ZR3CEEDf615ux4xJAuGJZfWt6z4tBMAHwDWSWKcHaNUc+PIqkjGuuFNg6G1H1rJntXiJV1wRXvGiD+NVDZ7ihPZwzeGaJSexK02Gprhip6P8AweDEVFRNNeqbgac0uIhoPrWTc2JjmYBCEBrRHPGZky4ckFbEEIzvV3IxtsKNLa6GBXOk96ctbFGT8Tv0q3NJWIUHKVIzFUntVjGcZwcVsz2aFNEY3q3DrVsusjxBc7g0PlVWH4J7tpiKBnzo0ak7LtmvRLwi2d85VV/WvP8AHXs1uBa2tzIpUeNYoWJJ9+gpOTVwgrY6P0/JJ1YnPxSJJNIBbB0+HzFanCOI20t1bwkEtOhYHyx2+e9eWuF+7wPIsIcBsCTV40O/UHft7VtfYq2W84srggFELqv72d8D0BJriL6rmebxyXDOpH6dihUo9nu7S2jlDHBSnILaA4IQE+eKq0Eq7OdKDy2FYnHftKvCHEMERlc75AyuPQjYn0rRkypctj4Qr0eiaJdJZUAX2oTxR8s+AVk8I4lJxPjEpjmJtRZqRHn9osd/oKc4lNcTv/w7hbpHdFdUsrjVyEPfHcnsPnQKYbimHjhjWPK5x3qURY2jt0RpDJpXBdsZJ89qlMtsGkj44JAdsCu6Ub0NUG/aiLHnocV3DjPg5yT5VGiI6ijLqTzqFyetQDcxfljyqpjp0KGGxxVWibtVl7xIpVCtONGR1oZTzq0g1MXXw9KZjlTuN6roFVK1dFupDsbZ6GipIVOc7ikFYinIWyKjRnnGjX4fxee3YAyEpnevWcMuorwB1OD5GvBgDyrQ4Zd/dZQdz6ZrJmwqS47GYNU8ckn0ezkzDKcqdJqrWkUwzp6+dcsuIRXUSK7A6u9aQtw8eUPauc24cM7EYxyLjkxbrh6KmceEVmyxsMBQQe2BXoJIHzjcDyNVNpI+MYwPSmxzUuRGTApPhUefMVy5IOw7YG9Xj4UdWp1lJ98V6AQIpy+oEd6NbiFWUENucBj0q5amkBHRxb+4yWgKxaipHbGa8bcfZK9umlnIDHJKoDgb9zX0PFjeW33pLjEGWBdhp6Eg9fUV529+1VtbSNa8Dhe8lUEtJI2iNcfmf9b1myTx5I1JWaVilGXB4aXg98oaCGG4dGBD6V2wOgBO+K2OBk/ZqSKSQme5IMaRrkEnruOwricb4pxCC6lnuUih1GPRbLpycHv5day5RxNIp7eSblyMgkWPJJZfX/Fg5+VcnOo43uj6N2OO5OzY4pxW+vrmRLi7mBQFCkedAJ9tsDr327msa4L2do92ZY5zjllV35WSd2Hbbv61qcBhneyRg0rR7jIOFOSfM47+VBlBbrEjf90tkKO6+u/b0oFl3cS9l18DP2R463CYGnkVZTNGqxKB4mk6geo6/SvV/ZQm1tLriF7cB5bqXmTTSeHxdAN+mOgHpXkrK5s7Mabi0SE40RB+qFjk/TYfKrXTXNyVjv7iOSMSfhmMeBPM589sU7zxw4VJ8sBwk5Ua/wBoOI8YuWlRUls7ZCQHXwtIB3wQf4VKx5bWa4XFpeXaW8gw8Qzp65JGTgA1ys2T6hBvhlLBIyVAow09qnLqaK9xZ5tsKtdMatQgMVdXIqAP9EMB7V0F02zRFeibHyqAuXyLE/vD51Qop705oB7UN4qtEU0LFB2qvLo5QjtXNNHYe4By6supehouipo9Ksm4skzAUQTHO4FCCVcJVUgHtHLS+eB9SE48s16fhX2kRdKzbeprxyrTMQ6UjLhhNclw1E8LuDPpkV3FdrqQI1DMxgYkrpX3ry/2dd1n8LnA6g07xHiaySNGmWIONq5j09T2o60dapYt8ux3inHY0t2jgeD7xjw83oPkDk14C443xOxuo5izRI7D8ESakznOQST+VTidjYQ3LfeWuJpWGWyQQM9s4rNjs43gcQmaePUXaBiCAw6FSB19M9q5WtyxxPYjXg3ZVuNm/wCIC7sLfh73M0rljJIoGc9W0k/Os+M3N9mytoVgidgs/L3LLvkavI/KuWyPEpeAQGVseOV90LfEAemd62OD3DW1s3MhWOMsVAcCOQ+u+1Xj1MZqO7gKWKcboy+LiNb+1srZTy7YatKban23/h9akiMOMgzROGd1BJYE4IIO/rQWkVZ3lmmAjiyAWHiduu/vvTNnxOG7OkrCI4gZI9IxnSRnPyzXN1Gp8m6MEa8WLbtcili97w/77ZO8cMaMGSWUAhDg4OT32pae6ieITXMhAj8SdCe+NQ9euPIUC84h95BurjSkOWeHOfEMnGT/AK60lPZrfRn8Z0eUBQANgxB60qGSW1bwtv3NoPNxTmINcEJkIB52ctqwDn0/KixTXIcWdrGWXVmSQ5Oc7nOdts0zF9noLcM8txGoAwCFJboMEHHTt5b1pcP4XDY28kl1puC+fDMmDGewAyc0rJlhFMPbJ9mfZX6zW4aLmu5kI5KpkDHz3GewqUz99to30Wj2ix8rQ+QV09sjtnpXaW0nzRX/AECAKtgUASCriSvoyPGtMJpFTQKoHFWDirspplgtTGOlQMK6GFWmDyWUkdauN6oGFd1VdgssVBFUKVcGu1dlWD010JRcZo0MHMONQHvUc0i03LhCwjqwjrUThbkZDpVjwubGVKH50Hmh8heHL/kzBFRFQ1ojhdz5R/5qzuJTx20fKjLmYnSXUDCn3NKy6vHjjubJDS5skqqh6wuRbGQa1EjrhVJ3NLyXsFvOFkkYsSAzL0XPmayomVrnVKkk8yb/ABHDbHyHQfxp3RaieJ/uxRGwoKHIj98+uOtcLN9aSvYuTsYvpXSnLhF+K2ZuNV1dSBbYBQgx196xOXcXDg4MMMQ1Kg2AA8/WtC9vX/4qltLKJ0ZwQ0nwqo9tgc+XnSXFZni+8WxmYI7OkroowegC/nk157V6ieXK3H2dvS4YwjTfRoWkUMPDFe6njFrdRcstnJzkZPywaweLXJS2jtfvDMom6oT4k7flSUvESlulvc/h27x6VkjXeJxsxx3BO+PWkprG5SJXabUw/E5mvUrJthl9P5b1cMDjy2HKS6QbiHEUvLqJFQiFMkAddz/WmuGrFw+/jcszRpkOAp3Qg5+WKzzG0dypkCaiFYEbZ/1tVriV8MGbRqTQrnPr371pg0qQqTbdFuOJJbXhty5kUFWg0+FSp32Hcda3bK9u0tWtrOOK20jAilU+IkHfGen8u1Z3Br2Y2VzaxaXeOI8pt8hT8QGfLc1S2vrRObruLqa5Yay0a4BHp0x70vLFPpBJtI9BwuyCj71cpKzwxYEcZyNfTYYHrjf3q91xKW4VBm4R5CNMY0nHbrnH0oLcUhh4YJ7JGV5DsGclgeprI4hxiOG6cxObrThvhIKtt3PXz96yeOWSVtFy54Q7bxNDMTA8bSAndoh4RntnvUrPy1y4unCIGUsCHxv5Y/WpTa+QUh4P6j61YSev50T7pbN/6Zf8lWFlanpaj/JXufLI8y5Y/wBgxJ6/nVw/r+dEFhbHraj6VZeH2v8AdvyollkLcsf7B6/X866JPejrYW392H0FFWyt/wC6r9BV+WQDyY0LK9WElNiztsf8ug+Vd+42x/6Sj/6ir8jFvLjFRJVxIaYFlbj/AKa/5RVxaQf2af5RU8rAeTGLCYjcZoy3Mg/aajC2h/s1+gq/3eH+yX6VPIB5YlI72VTku3sabi4kxO+R61SKGBTkwj/LRoxYk/8ALOcb5ERP50uUo/A/Dkm/xYWe9lW0leIapAhKgdzjavn1zfmGQC5D/eVY6lYlSM+f8q91PFYumTa3WO2hSKzzbcPDMz8MvZc9yhJPzNcvV4fLVHc0064bPN3nE7idwYZzFJJhRgaRjsNvanY+I5NuZJVaUW+jwnCrvtgHqRtua9PZBGk0R8Bu1jP7boGI+Qx+lbNnwsXZ1LCiH/vYT8juK5WXSKXujclL0fM55YVDkTBmyfGG6YHlS/MMngZwVB1+I/tHOP4/6xX1x+AMpAlaxHlrmBz9RQGto0Ohb611gfDGdR/SrjpIpVuCbkvR8euYwYgk+VAIaPSPEvbp3B3/ACrUs760lCWqREcuMglkJBBG/wBa+kGzcFSknMY90j1FffFFPCboqHMGf8RjAP50ctKpKnIim16Pj91E8/FQluGfGNJKEg+vp2odxY3skqJ91vJv2XdYDkb42wK+tfdeW2xRW9CAaDPCXAVpXAI30vj8+tFDRxVcg+Xm6PmfC7DiVqksgs7lJY5NUTSwt4tzsPQjYjFCu7W5gvpILK1lkjZeYqlcmNSc49MHb5V9Rj4epRmaS5MZGCWlJB+poDcEsJGVxauxU5Hoc+golpV8l+V3yj5m3Dr64ZCLa4EWM7qQcnuMDf8A38qrPwm75qTPbzKFAHwNuPn7V9XdZATiMDGzZYA0F4pSmVaMgeTEge5xV/xYLotZf0fOLKxnROXFBIWBOBjIwcefTFdr38iZjyWi6elSgejTJ5TIAq4FVAq4r0R45s7irCuA1YVLAZ0V0VADRViJ64x71NxW1sHXaKEUHHeilET4iBQ70WsbYuAT0Fc3BxjejlVZgE3J6YFd+7nVpBGrO++PzqbkV423wLEyE7Ee1RYrmQ4R0z5FadMSZULpLg7qOo+dNx2AOHuFCf4RkFqCWVGnHppN1Rkw2V5MwzcMiMcagvenYuG3eplN/MhQeHTgZFOzKySxu0bLg5A0749KbnQ5M0bDcbYpEsjZvxYFEzhY3PIDDiN1oz3xt+W9DueARzMwM85lI2fmdflWtpW4hGnaRQPDnuKuVSVPENEqjYN0NJlNmuMEYUXA7mBikfEZsY7OybfKnLbglpI3/iOZOT1Zpi36ithgWtwAmrT1znI9qXVspkpISP3PiA+e1ZpWzbCe05HwPh8R/wDDTSQsO2lCP/zmta3M1rFguZ0Ix4sHb22rNWRJTpjkLHuGXBq6l08QfYdcHYe/lWTIn8mrHmj8GvZX1tAmiK2SNR2SnjdWtymh2IHcBmX9K85JPkAsihvTv61dJQcHAI7EUq5I0qSaPQxWHDwCUgiYnuRqJ+tAu+GmRCLVLeM6cD8PG9Zkdwy/CcexpqK/k/follaJsTMqT7PcWkbU1xAD2wx/lUk+z3EUUaLoSt+6WYCvQJesRvj5UZbxO+RTFqJAPTwPInhtzDKVuI8R46Llv0BqsFkGbxyTQA9fA5z9BXtDLHIOoJq4APRj8jR/yGD/ABonkn4RwxosyX5B/wDhapXrmDjdWPTzzXKnnkT+PH4PjKr59auvXGAavHG0mSUOQe1MjSWVRgKfIV29x4hY7AKqHqGHsKPGkYGc5/8ActXQqz4LHbpgZ/Sr6ozsihiP3h/Ogcx0cINV3JDqc7jtRUjPdVqyWokYaVQE7nfaiRxvErLGY5Gz8qreNjga5aOcvK6iNK+hrsVvrHhGWO5GoYHvQkYFybrk47oCRXOc0hCwIqKehTrUtlfbYxLDoQhiXJ6r5VI7d5FwWMSDbqMmr28YWANdtjLeHIzketXuJ4ZGRVZFUf4shgPlS9zY9Y4dlwkcCgpux2A21US3geP8a7JxnwqwGBV7W2RvxkUN5FtioqswaWTSOmrJAfOKU5XwPUdqssxe4yIwcE/EDTRIW30ZzpHQdf0qJGsKHlKcD4gWxvSsa8y45chYhumGOB6UN2OSoYtYdKc9h1B75GKo8HObUj4Knrjp86NO0sSpy9QCjoSMUPh9y/jQsxYncHy/hQ2M4ujiswZpgVBQ+Nc5DfpRJ0yRPAHUsM7DHbyoZmzPy9sO+4wMGnLwOIlVQBgbYPagYS6Yu2m4txIRl164yN6pblbjUrh0lXbUDV7BmEksRxp6kMAcezdqHcRxi5I1yg+YNJkuaLUqVhVjMcioXw53DFe9F1LG55qDHfGwPt5UOSJpoFJlLFd1bTv9altd/wDSuhlfM9aS0aYZA/LRscp8Mx2V9vkD3qhyjhJBg+tVbEOD4pI+mR1FG16kAfEkfbc5H8RQOjTCZ1JSu4OaKtwf2hSciqN432J2yaqH7H65oXFD1I0hKpoiyYPhYg+eazVarrJ2oaYdmqt26j4s+9Ss3nV2pbKPAJIY8hgfXajQKzKxbmaeukJVIUKt+M2TvtT6HUSIxt3Ga9BKSPGQxe2CRnC9CB2Axv70eB1U4kQs37qjOKHqMCgnVljsA2NqAs8kEwNq7AsemMCh5kG5KBoiTxYMZx23pea5SJ+XBGzOevnXDLMHCzK4Y/s6cUcW1wpDOWGQGCjoarhEbc/xBR2pmjeblkJncuh/WtG15VvbkoUYk9SB+VViuuSo1pHIq+ILjpS1xfRDEj2zpq/x5I+WKFuTGxjCHQd9BGzZJ66s7D5UWLhy2pV2casbqTqP+1EsLaO6WOUxaowD4X+L3zRpgrnTp0qNizNg47Z2pbl6Q3xp/cxaW4PL3VsA9U6fU12xjSW457ZMaN4hq67VQsFn5NvdqwO2dP8AKm44orS1IYaXYYDnO5+tVZa5fPo5esxPgBPkFJ/Sg2ZD3erx7DAx2NSSfBUyz7jtjG1MWIUq9xDO75OnBUacegqukGqchm40sSNgeuGO4pOwiZriQrLp28XrV7iWKRgJV3AwCoGfpVeFJyruRvEwHUttn+tD6CfMil/hJNbxqcftdA1OBzNbrJA4cKoyGB29qrckB3UBMNuCRnGe9U4eWQPzH5mR0Axn+lC+gunQKCbl3Wgh/F5DPtRLnJdgq6kzuF60K+B5hlVxuuFxT8TrfW/MiTlSDZ985PnQP5Lj/kV4dcIkzQktg9mq95agSCRMAHrkUpcQupVtRVi2xXem7W65yMJ8OB1I2bNC1XIcXxTJa63BDAFMbYXGKoHeM9MxhsHB39zUzEs+o4AB+Hz96YniZtJUh06g/wBKXJIdCXAF9LOQNS5Iyh2/3oCnSxwG0gbg9P6UdY+YoVcDBzvQ3ljd9IADZxkdfpQUaFMsGGkHOVO3oT796Iux3Ug96By216hsG2IYdvPFG1tq0R+FVwFDknUe+9XQ6My647n86lWARRuAjZ881KukHZ5B7cjwx6H8mUkn5VaILA2p2GfU5xWakxhOiTJb9nem4o4nVXdjIWOy4w3vjyrrNV2eRU3PlElmed21zLGSNh0z6bUxYWCvINcxQA9dB6+WTRo7HSA00IZSPCcZAFEkcxp4EKqOjY6GheT0go4ed0h6W05bOz8p2IwW1A4+falZp5AmiQkaFxgD4jVIOJSQtr1Ahf7QZ3osTfeY3laQTSn4gR08sDzoOV2PbT4iD/Clhjd2kTWdGHx2704nCGIRnYSKOoA8/Wl0t3iuQ8vikzlY8bL7U5eSQgNJz2AJ6K+y+/rVNvpBRgv7I4FeKQDm8rQQoHSiSvzJSfwSzDfG/wClISSM5BSYsnZwNOT9Kat7O5kdZGdVA2Jc/F7VVURP0Gtbd+a8zQKQoGw2HvV7yOKdMH4hk7muxTzGKUKSFDeeMigS3dm8PKAYSZA1H+FL5bGPalTFlt+YdDkMGGBg/lWo0D2lnoVNKDGkg1mBo1uFRdRIGdtsf1rV+8rG6amKFsYU/te9XO+iY1Hkz7u7UGNihyo8+tNcNkhntZZUdyQ2CCe9DvxE7EuEJxlhp7elU4SkIllKc5CQBpwMfnUfRI2pjl1IJuxDhcZ6Ulb3U8N4rYVokAUhgOlPXCvG3PmA0g7HOQ9ZTabj7xInxZ6EZ29MVSqgptpmrcpjKDUFfJC6QVOe4pW1nSO4Me5VcZUDHzNO2syz2cUQjbI3VyNj6Vn3cEjSme2ILMACFHWg7Dla+5D0rLIhUBSrHKldzigRryi3IVTqbBXAyc9OtSzkY23LliYPqyuBg49aHOGSQOFBQDeh/Qy/YzPBG/g0nUF+FmwaVtQocRtqDoThuw9KJAwkAh8YfB0v5+lUeIBgSzKzDceZ70th37Qw6FDzLdicbjH51z8GZxLpAkOzKw3pWCURsBIDpGxPen+WssOp9ifgcVVUGnZwKmR8QJONugqxHhGksRn4h2NB5i6V+8sBkY1AdPlRo410F45hIh3Ok7VYyMjgOXZFwuepPSuUMytEG/D2Y4Ge+OlSpQzeeBtjzZS0m+K3rZRGCyAKwHUVKldHIeb0/QzrcxIS7HV139a7oDoUb4RvipUpRrkYk5JuymSF1YwKdtFxPBpJXBzse+alSnS6MkPyNpppDHNIW31Gg21wy2zzBU1jIGVBx7VKlKXRrfYk7MwBZiSd9zWpbkiFmB3GN/eu1KkwMf5F79mLzrk6QdhWHOSiu6nBTGKlSpArN0OcNUMgkOdZTUT61qT4lsoZHUag2nIHbJqVKXPsZi/Az1u5CGjbSwPhyRkjftRODTONT5yckYPQDNSpUfRcPzRrtGP+Gykk+GTAGfSs020cTM8eVJjzsalShiOn6KcKkl5rLzXIA1AE53rQ41GLbRNDlXYnO+3QVypUl+ReP/yYtaf+ZE42JODjyo9+gjJC/wCGpUoH2GvxYrGSwfP7J29KvFcSNbyNJiRkOAXFSpUYMTk6gxmTGCR0HSl7eRkbUD0GQK7UofQz+wWc61WRgNR70mLma3kYxOQAcY7VKlL9Bt8m3J+JCsjfEQDtUqVKpGg//9k=" alt="" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">This is a wider card with supporting text.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="row" style={{ marginTop: "30px" }}>
                  <div className=" card shadow-lg" style={{ borderRadius: "20px", height: "100%", width: "100%", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                    <div className="row g-0">
                      <div className="col">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">This is a wider card with supporting text.</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="img-hover-zoom">
                          <img className="card-img-top " style={{ borderRadius: "20px", margin: "0px", height: "auto" }} src="data:image/jpeg;base64,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" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="row" style={{ marginTop: "30px" }}>
                  <div className=" card shadow-lg" style={{ borderRadius: "20px", height: "100%", width: "100%", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
                    <div className="row g-0">
                      <div className="col-4">
                        <div className="img-hover-zoom">
                          <img className="card-img-top " style={{ borderRadius: "20px", margin: "0px", height: "auto" }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA6AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEEQAAIBAwIEBAMFBQYEBwAAAAECAwAEERIhBRMxQSJRYXEygZEGFCOhsUJSwdHhU1RikvDxFTRDYyQzRHJzgrL/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EACgRAAICAQQCAQQDAQEAAAAAAAABAhEDBBIhMRNBUQUiMmEUQlKBM//aAAwDAQACEQMRAD8A8nyhXOUKMVI67VzFewo8luYvy8VApXcUfFdKiioveUSZ0oq3GO5BqmgVXTUoGkxpLnfem0ucAHP0rJ0mrI7IfMVKAliT6PU2HFTGQM9POty24jBN8XWvBRsD4lbBPam4bhlxuTS54IyKjknj/Z9BRdgwIZewoV5ZR3CEEDf615ux4xJAuGJZfWt6z4tBMAHwDWSWKcHaNUc+PIqkjGuuFNg6G1H1rJntXiJV1wRXvGiD+NVDZ7ihPZwzeGaJSexK02Gprhip6P8AweDEVFRNNeqbgac0uIhoPrWTc2JjmYBCEBrRHPGZky4ckFbEEIzvV3IxtsKNLa6GBXOk96ctbFGT8Tv0q3NJWIUHKVIzFUntVjGcZwcVsz2aFNEY3q3DrVsusjxBc7g0PlVWH4J7tpiKBnzo0ak7LtmvRLwi2d85VV/WvP8AHXs1uBa2tzIpUeNYoWJJ9+gpOTVwgrY6P0/JJ1YnPxSJJNIBbB0+HzFanCOI20t1bwkEtOhYHyx2+e9eWuF+7wPIsIcBsCTV40O/UHft7VtfYq2W84srggFELqv72d8D0BJriL6rmebxyXDOpH6dihUo9nu7S2jlDHBSnILaA4IQE+eKq0Eq7OdKDy2FYnHftKvCHEMERlc75AyuPQjYn0rRkypctj4Qr0eiaJdJZUAX2oTxR8s+AVk8I4lJxPjEpjmJtRZqRHn9osd/oKc4lNcTv/w7hbpHdFdUsrjVyEPfHcnsPnQKYbimHjhjWPK5x3qURY2jt0RpDJpXBdsZJ89qlMtsGkj44JAdsCu6Ub0NUG/aiLHnocV3DjPg5yT5VGiI6ijLqTzqFyetQDcxfljyqpjp0KGGxxVWibtVl7xIpVCtONGR1oZTzq0g1MXXw9KZjlTuN6roFVK1dFupDsbZ6GipIVOc7ikFYinIWyKjRnnGjX4fxee3YAyEpnevWcMuorwB1OD5GvBgDyrQ4Zd/dZQdz6ZrJmwqS47GYNU8ckn0ezkzDKcqdJqrWkUwzp6+dcsuIRXUSK7A6u9aQtw8eUPauc24cM7EYxyLjkxbrh6KmceEVmyxsMBQQe2BXoJIHzjcDyNVNpI+MYwPSmxzUuRGTApPhUefMVy5IOw7YG9Xj4UdWp1lJ98V6AQIpy+oEd6NbiFWUENucBj0q5amkBHRxb+4yWgKxaipHbGa8bcfZK9umlnIDHJKoDgb9zX0PFjeW33pLjEGWBdhp6Eg9fUV529+1VtbSNa8Dhe8lUEtJI2iNcfmf9b1myTx5I1JWaVilGXB4aXg98oaCGG4dGBD6V2wOgBO+K2OBk/ZqSKSQme5IMaRrkEnruOwricb4pxCC6lnuUih1GPRbLpycHv5day5RxNIp7eSblyMgkWPJJZfX/Fg5+VcnOo43uj6N2OO5OzY4pxW+vrmRLi7mBQFCkedAJ9tsDr327msa4L2do92ZY5zjllV35WSd2Hbbv61qcBhneyRg0rR7jIOFOSfM47+VBlBbrEjf90tkKO6+u/b0oFl3cS9l18DP2R463CYGnkVZTNGqxKB4mk6geo6/SvV/ZQm1tLriF7cB5bqXmTTSeHxdAN+mOgHpXkrK5s7Mabi0SE40RB+qFjk/TYfKrXTXNyVjv7iOSMSfhmMeBPM589sU7zxw4VJ8sBwk5Ua/wBoOI8YuWlRUls7ZCQHXwtIB3wQf4VKx5bWa4XFpeXaW8gw8Qzp65JGTgA1ys2T6hBvhlLBIyVAow09qnLqaK9xZ5tsKtdMatQgMVdXIqAP9EMB7V0F02zRFeibHyqAuXyLE/vD51Qop705oB7UN4qtEU0LFB2qvLo5QjtXNNHYe4By6supehouipo9Ksm4skzAUQTHO4FCCVcJVUgHtHLS+eB9SE48s16fhX2kRdKzbeprxyrTMQ6UjLhhNclw1E8LuDPpkV3FdrqQI1DMxgYkrpX3ry/2dd1n8LnA6g07xHiaySNGmWIONq5j09T2o60dapYt8ux3inHY0t2jgeD7xjw83oPkDk14C443xOxuo5izRI7D8ESakznOQST+VTidjYQ3LfeWuJpWGWyQQM9s4rNjs43gcQmaePUXaBiCAw6FSB19M9q5WtyxxPYjXg3ZVuNm/wCIC7sLfh73M0rljJIoGc9W0k/Os+M3N9mytoVgidgs/L3LLvkavI/KuWyPEpeAQGVseOV90LfEAemd62OD3DW1s3MhWOMsVAcCOQ+u+1Xj1MZqO7gKWKcboy+LiNb+1srZTy7YatKban23/h9akiMOMgzROGd1BJYE4IIO/rQWkVZ3lmmAjiyAWHiduu/vvTNnxOG7OkrCI4gZI9IxnSRnPyzXN1Gp8m6MEa8WLbtcili97w/77ZO8cMaMGSWUAhDg4OT32pae6ieITXMhAj8SdCe+NQ9euPIUC84h95BurjSkOWeHOfEMnGT/AK60lPZrfRn8Z0eUBQANgxB60qGSW1bwtv3NoPNxTmINcEJkIB52ctqwDn0/KixTXIcWdrGWXVmSQ5Oc7nOdts0zF9noLcM8txGoAwCFJboMEHHTt5b1pcP4XDY28kl1puC+fDMmDGewAyc0rJlhFMPbJ9mfZX6zW4aLmu5kI5KpkDHz3GewqUz99to30Wj2ix8rQ+QV09sjtnpXaW0nzRX/AECAKtgUASCriSvoyPGtMJpFTQKoHFWDirspplgtTGOlQMK6GFWmDyWUkdauN6oGFd1VdgssVBFUKVcGu1dlWD010JRcZo0MHMONQHvUc0i03LhCwjqwjrUThbkZDpVjwubGVKH50Hmh8heHL/kzBFRFQ1ojhdz5R/5qzuJTx20fKjLmYnSXUDCn3NKy6vHjjubJDS5skqqh6wuRbGQa1EjrhVJ3NLyXsFvOFkkYsSAzL0XPmayomVrnVKkk8yb/ABHDbHyHQfxp3RaieJ/uxRGwoKHIj98+uOtcLN9aSvYuTsYvpXSnLhF+K2ZuNV1dSBbYBQgx196xOXcXDg4MMMQ1Kg2AA8/WtC9vX/4qltLKJ0ZwQ0nwqo9tgc+XnSXFZni+8WxmYI7OkroowegC/nk157V6ieXK3H2dvS4YwjTfRoWkUMPDFe6njFrdRcstnJzkZPywaweLXJS2jtfvDMom6oT4k7flSUvESlulvc/h27x6VkjXeJxsxx3BO+PWkprG5SJXabUw/E5mvUrJthl9P5b1cMDjy2HKS6QbiHEUvLqJFQiFMkAddz/WmuGrFw+/jcszRpkOAp3Qg5+WKzzG0dypkCaiFYEbZ/1tVriV8MGbRqTQrnPr371pg0qQqTbdFuOJJbXhty5kUFWg0+FSp32Hcda3bK9u0tWtrOOK20jAilU+IkHfGen8u1Z3Br2Y2VzaxaXeOI8pt8hT8QGfLc1S2vrRObruLqa5Yay0a4BHp0x70vLFPpBJtI9BwuyCj71cpKzwxYEcZyNfTYYHrjf3q91xKW4VBm4R5CNMY0nHbrnH0oLcUhh4YJ7JGV5DsGclgeprI4hxiOG6cxObrThvhIKtt3PXz96yeOWSVtFy54Q7bxNDMTA8bSAndoh4RntnvUrPy1y4unCIGUsCHxv5Y/WpTa+QUh4P6j61YSev50T7pbN/6Zf8lWFlanpaj/JXufLI8y5Y/wBgxJ6/nVw/r+dEFhbHraj6VZeH2v8AdvyollkLcsf7B6/X866JPejrYW392H0FFWyt/wC6r9BV+WQDyY0LK9WElNiztsf8ug+Vd+42x/6Sj/6ir8jFvLjFRJVxIaYFlbj/AKa/5RVxaQf2af5RU8rAeTGLCYjcZoy3Mg/aajC2h/s1+gq/3eH+yX6VPIB5YlI72VTku3sabi4kxO+R61SKGBTkwj/LRoxYk/8ALOcb5ERP50uUo/A/Dkm/xYWe9lW0leIapAhKgdzjavn1zfmGQC5D/eVY6lYlSM+f8q91PFYumTa3WO2hSKzzbcPDMz8MvZc9yhJPzNcvV4fLVHc0064bPN3nE7idwYZzFJJhRgaRjsNvanY+I5NuZJVaUW+jwnCrvtgHqRtua9PZBGk0R8Bu1jP7boGI+Qx+lbNnwsXZ1LCiH/vYT8juK5WXSKXujclL0fM55YVDkTBmyfGG6YHlS/MMngZwVB1+I/tHOP4/6xX1x+AMpAlaxHlrmBz9RQGto0Ohb611gfDGdR/SrjpIpVuCbkvR8euYwYgk+VAIaPSPEvbp3B3/ACrUs760lCWqREcuMglkJBBG/wBa+kGzcFSknMY90j1FffFFPCboqHMGf8RjAP50ctKpKnIim16Pj91E8/FQluGfGNJKEg+vp2odxY3skqJ91vJv2XdYDkb42wK+tfdeW2xRW9CAaDPCXAVpXAI30vj8+tFDRxVcg+Xm6PmfC7DiVqksgs7lJY5NUTSwt4tzsPQjYjFCu7W5gvpILK1lkjZeYqlcmNSc49MHb5V9Rj4epRmaS5MZGCWlJB+poDcEsJGVxauxU5Hoc+golpV8l+V3yj5m3Dr64ZCLa4EWM7qQcnuMDf8A38qrPwm75qTPbzKFAHwNuPn7V9XdZATiMDGzZYA0F4pSmVaMgeTEge5xV/xYLotZf0fOLKxnROXFBIWBOBjIwcefTFdr38iZjyWi6elSgejTJ5TIAq4FVAq4r0R45s7irCuA1YVLAZ0V0VADRViJ64x71NxW1sHXaKEUHHeilET4iBQ70WsbYuAT0Fc3BxjejlVZgE3J6YFd+7nVpBGrO++PzqbkV423wLEyE7Ee1RYrmQ4R0z5FadMSZULpLg7qOo+dNx2AOHuFCf4RkFqCWVGnHppN1Rkw2V5MwzcMiMcagvenYuG3eplN/MhQeHTgZFOzKySxu0bLg5A0749KbnQ5M0bDcbYpEsjZvxYFEzhY3PIDDiN1oz3xt+W9DueARzMwM85lI2fmdflWtpW4hGnaRQPDnuKuVSVPENEqjYN0NJlNmuMEYUXA7mBikfEZsY7OybfKnLbglpI3/iOZOT1Zpi36ithgWtwAmrT1znI9qXVspkpISP3PiA+e1ZpWzbCe05HwPh8R/wDDTSQsO2lCP/zmta3M1rFguZ0Ix4sHb22rNWRJTpjkLHuGXBq6l08QfYdcHYe/lWTIn8mrHmj8GvZX1tAmiK2SNR2SnjdWtymh2IHcBmX9K85JPkAsihvTv61dJQcHAI7EUq5I0qSaPQxWHDwCUgiYnuRqJ+tAu+GmRCLVLeM6cD8PG9Zkdwy/CcexpqK/k/follaJsTMqT7PcWkbU1xAD2wx/lUk+z3EUUaLoSt+6WYCvQJesRvj5UZbxO+RTFqJAPTwPInhtzDKVuI8R46Llv0BqsFkGbxyTQA9fA5z9BXtDLHIOoJq4APRj8jR/yGD/ABonkn4RwxosyX5B/wDhapXrmDjdWPTzzXKnnkT+PH4PjKr59auvXGAavHG0mSUOQe1MjSWVRgKfIV29x4hY7AKqHqGHsKPGkYGc5/8ActXQqz4LHbpgZ/Sr6ozsihiP3h/Ogcx0cINV3JDqc7jtRUjPdVqyWokYaVQE7nfaiRxvErLGY5Gz8qreNjga5aOcvK6iNK+hrsVvrHhGWO5GoYHvQkYFybrk47oCRXOc0hCwIqKehTrUtlfbYxLDoQhiXJ6r5VI7d5FwWMSDbqMmr28YWANdtjLeHIzketXuJ4ZGRVZFUf4shgPlS9zY9Y4dlwkcCgpux2A21US3geP8a7JxnwqwGBV7W2RvxkUN5FtioqswaWTSOmrJAfOKU5XwPUdqssxe4yIwcE/EDTRIW30ZzpHQdf0qJGsKHlKcD4gWxvSsa8y45chYhumGOB6UN2OSoYtYdKc9h1B75GKo8HObUj4Knrjp86NO0sSpy9QCjoSMUPh9y/jQsxYncHy/hQ2M4ujiswZpgVBQ+Nc5DfpRJ0yRPAHUsM7DHbyoZmzPy9sO+4wMGnLwOIlVQBgbYPagYS6Yu2m4txIRl164yN6pblbjUrh0lXbUDV7BmEksRxp6kMAcezdqHcRxi5I1yg+YNJkuaLUqVhVjMcioXw53DFe9F1LG55qDHfGwPt5UOSJpoFJlLFd1bTv9altd/wDSuhlfM9aS0aYZA/LRscp8Mx2V9vkD3qhyjhJBg+tVbEOD4pI+mR1FG16kAfEkfbc5H8RQOjTCZ1JSu4OaKtwf2hSciqN432J2yaqH7H65oXFD1I0hKpoiyYPhYg+eazVarrJ2oaYdmqt26j4s+9Ss3nV2pbKPAJIY8hgfXajQKzKxbmaeukJVIUKt+M2TvtT6HUSIxt3Ga9BKSPGQxe2CRnC9CB2Axv70eB1U4kQs37qjOKHqMCgnVljsA2NqAs8kEwNq7AsemMCh5kG5KBoiTxYMZx23pea5SJ+XBGzOevnXDLMHCzK4Y/s6cUcW1wpDOWGQGCjoarhEbc/xBR2pmjeblkJncuh/WtG15VvbkoUYk9SB+VViuuSo1pHIq+ILjpS1xfRDEj2zpq/x5I+WKFuTGxjCHQd9BGzZJ66s7D5UWLhy2pV2casbqTqP+1EsLaO6WOUxaowD4X+L3zRpgrnTp0qNizNg47Z2pbl6Q3xp/cxaW4PL3VsA9U6fU12xjSW457ZMaN4hq67VQsFn5NvdqwO2dP8AKm44orS1IYaXYYDnO5+tVZa5fPo5esxPgBPkFJ/Sg2ZD3erx7DAx2NSSfBUyz7jtjG1MWIUq9xDO75OnBUacegqukGqchm40sSNgeuGO4pOwiZriQrLp28XrV7iWKRgJV3AwCoGfpVeFJyruRvEwHUttn+tD6CfMil/hJNbxqcftdA1OBzNbrJA4cKoyGB29qrckB3UBMNuCRnGe9U4eWQPzH5mR0Axn+lC+gunQKCbl3Wgh/F5DPtRLnJdgq6kzuF60K+B5hlVxuuFxT8TrfW/MiTlSDZ985PnQP5Lj/kV4dcIkzQktg9mq95agSCRMAHrkUpcQupVtRVi2xXem7W65yMJ8OB1I2bNC1XIcXxTJa63BDAFMbYXGKoHeM9MxhsHB39zUzEs+o4AB+Hz96YniZtJUh06g/wBKXJIdCXAF9LOQNS5Iyh2/3oCnSxwG0gbg9P6UdY+YoVcDBzvQ3ljd9IADZxkdfpQUaFMsGGkHOVO3oT796Iux3Ug96By216hsG2IYdvPFG1tq0R+FVwFDknUe+9XQ6My647n86lWARRuAjZ881KukHZ5B7cjwx6H8mUkn5VaILA2p2GfU5xWakxhOiTJb9nem4o4nVXdjIWOy4w3vjyrrNV2eRU3PlElmed21zLGSNh0z6bUxYWCvINcxQA9dB6+WTRo7HSA00IZSPCcZAFEkcxp4EKqOjY6GheT0go4ed0h6W05bOz8p2IwW1A4+falZp5AmiQkaFxgD4jVIOJSQtr1Ahf7QZ3osTfeY3laQTSn4gR08sDzoOV2PbT4iD/Clhjd2kTWdGHx2704nCGIRnYSKOoA8/Wl0t3iuQ8vikzlY8bL7U5eSQgNJz2AJ6K+y+/rVNvpBRgv7I4FeKQDm8rQQoHSiSvzJSfwSzDfG/wClISSM5BSYsnZwNOT9Kat7O5kdZGdVA2Jc/F7VVURP0Gtbd+a8zQKQoGw2HvV7yOKdMH4hk7muxTzGKUKSFDeeMigS3dm8PKAYSZA1H+FL5bGPalTFlt+YdDkMGGBg/lWo0D2lnoVNKDGkg1mBo1uFRdRIGdtsf1rV+8rG6amKFsYU/te9XO+iY1Hkz7u7UGNihyo8+tNcNkhntZZUdyQ2CCe9DvxE7EuEJxlhp7elU4SkIllKc5CQBpwMfnUfRI2pjl1IJuxDhcZ6Ulb3U8N4rYVokAUhgOlPXCvG3PmA0g7HOQ9ZTabj7xInxZ6EZ29MVSqgptpmrcpjKDUFfJC6QVOe4pW1nSO4Me5VcZUDHzNO2syz2cUQjbI3VyNj6Vn3cEjSme2ILMACFHWg7Dla+5D0rLIhUBSrHKldzigRryi3IVTqbBXAyc9OtSzkY23LliYPqyuBg49aHOGSQOFBQDeh/Qy/YzPBG/g0nUF+FmwaVtQocRtqDoThuw9KJAwkAh8YfB0v5+lUeIBgSzKzDceZ70th37Qw6FDzLdicbjH51z8GZxLpAkOzKw3pWCURsBIDpGxPen+WssOp9ifgcVVUGnZwKmR8QJONugqxHhGksRn4h2NB5i6V+8sBkY1AdPlRo410F45hIh3Ok7VYyMjgOXZFwuepPSuUMytEG/D2Y4Ge+OlSpQzeeBtjzZS0m+K3rZRGCyAKwHUVKldHIeb0/QzrcxIS7HV139a7oDoUb4RvipUpRrkYk5JuymSF1YwKdtFxPBpJXBzse+alSnS6MkPyNpppDHNIW31Gg21wy2zzBU1jIGVBx7VKlKXRrfYk7MwBZiSd9zWpbkiFmB3GN/eu1KkwMf5F79mLzrk6QdhWHOSiu6nBTGKlSpArN0OcNUMgkOdZTUT61qT4lsoZHUag2nIHbJqVKXPsZi/Az1u5CGjbSwPhyRkjftRODTONT5yckYPQDNSpUfRcPzRrtGP+Gykk+GTAGfSs020cTM8eVJjzsalShiOn6KcKkl5rLzXIA1AE53rQ41GLbRNDlXYnO+3QVypUl+ReP/yYtaf+ZE42JODjyo9+gjJC/wCGpUoH2GvxYrGSwfP7J29KvFcSNbyNJiRkOAXFSpUYMTk6gxmTGCR0HSl7eRkbUD0GQK7UofQz+wWc61WRgNR70mLma3kYxOQAcY7VKlL9Bt8m3J+JCsjfEQDtUqVKpGg//9k=" alt="" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">This is a wider card with supporting text.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* .testimonial-section */}
      <section className="featured-courses vertical-column courses-wrap" style={{ marginBottom: "100px" }}>
        <div className="container">
          <div className="row mx-m-25">
            <div className="col-12 px-25">
              <header className="heading flex flex-wrap justify-content-between align-items-center">
                <h2 className="entry-title">Reviews</h2>
                <nav className="courses-menu mt-3 mt-lg-0">
                  <ul className="flex flex-wrap justify-content-md-end align-items-center">
                    <li className="active">
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Hotel</a>
                    </li>
                    <li>
                      <a href="#">PG</a>
                    </li>
                    <li>
                      <a href="#">Dormitory</a>
                    </li>
                  </ul>
                </nav>
              </header>
            </div>
            {/* .col */}
            <div className="col-12 col-md-6 col-lg-4 px-25">
              <div className="course-content">
                <figure className="course-thumbnail">
                  <a href="#">
                    <img src="publc/Assets/images/1.jpg" alt="" />
                  </a>
                </figure>
                {/* .course-thumbnail */}
                <div className="course-content-wrap">
                  <header className="entry-header">
                    <h2 className="entry-title">
                      <a href="#">The Complete Android Developer Course</a>
                    </h2>
                    <div className="entry-meta flex align-items-center">
                      <div className="course-author">
                        <a href="#">Ms. Lara Croft </a>
                      </div>
                      <div className="course-date">July 21, 2018</div>
                    </div>
                    {/* .course-date */}
                  </header>
                  {/* .entry-header */}
                  <footer className="entry-footer flex justify-content-between align-items-center">
                    <div className="course-cost">
                      $45 <span className="price-drop">$68</span>
                    </div>
                    {/* .course-cost */}
                    <div className="course-ratings flex justify-content-end align-items-center">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star-o" />
                      <span className="course-ratings-count">(4 votes)</span>
                    </div>
                    {/* .course-ratings */}
                  </footer>
                  {/* .entry-footer */}
                </div>
                {/* .course-content-wrap */}
              </div>
              {/* .course-content */}
            </div>
            {/* .col */}
            <div className="col-12 col-md-6 col-lg-4 px-25">
              <div className="course-content">
                <figure className="course-thumbnail">
                  <a href="#">
                    <img src="publc/Assets/images/2.jpg" alt="" />
                  </a>
                </figure>
                {/* .course-thumbnail */}
                <div className="course-content-wrap">
                  <header className="entry-header">
                    <h2 className="entry-title">
                      <a href="#">
                        The Ultimate Drawing Course Beginner to Advanced
                      </a>
                    </h2>
                    <div className="entry-meta flex align-items-center">
                      <div className="course-author">
                        <a href="#">Michelle Golden</a>
                      </div>
                      <div className="course-date">Mar 14, 2018</div>
                    </div>
                    {/* .course-date */}
                  </header>
                  {/* .entry-header */}
                  <footer className="entry-footer flex justify-content-between align-items-center">
                    <div className="course-cost">
                      <span className="free-cost">Free</span>
                    </div>
                    {/* .price-drop */}
                    <div className="course-ratings flex justify-content-end align-items-center">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star-o" />
                      <span className="course-ratings-count">(4 votes)</span>
                    </div>
                    {/* .course-ratings */}
                  </footer>
                  {/* .entry-footer */}
                </div>
                {/* .course-content-wrap */}
              </div>
              {/* .course-content */}
            </div>
            {/* .col */}
            <div className="col-12 col-md-6 col-lg-4 px-25">
              <div className="course-content">
                <figure className="course-thumbnail">
                  <a href="#">
                    <img src="publc/Assets/images/3.jpg" alt="" />
                  </a>
                </figure>
                {/* .course-thumbnail */}
                <div className="course-content-wrap">
                  <header className="entry-header">
                    <h2 className="entry-title">
                      <a href="#">The Complete Digital Marketing Course</a>
                    </h2>
                    <div className="entry-meta flex align-items-center">
                      <div className="course-author">
                        <a href="#">Ms. Lucius</a>
                      </div>
                      <div className="course-date">Dec 18, 2018</div>
                    </div>
                    {/* .course-date */}
                  </header>
                  {/* .entry-header */}
                  <footer className="entry-footer flex justify-content-between align-items-center">
                    <div className="course-cost">
                      $55 <span className="price-drop">$78</span>
                    </div>
                    {/* .course-cost */}
                    <div className="course-ratings flex justify-content-end align-items-center">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star-o" />
                      <span className="course-ratings-count">(4 votes)</span>
                    </div>
                    {/* .course-ratings */}
                  </footer>
                  {/* .entry-footer */}
                </div>
                {/* .course-content-wrap */}
              </div>
              {/* .course-content */}
            </div>
            {/* .col */}
            <div className="col-12 col-md-6 col-lg-4 px-25">
              <div className="course-content">
                <figure className="course-thumbnail">
                  <a href="#">
                    <img src="publc/Assets/images/4.jpg" alt="" />
                  </a>
                </figure>
                {/* .course-thumbnail */}
                <div className="course-content-wrap">
                  <header className="entry-header">
                    <h2 className="entry-title">
                      <a href="#">The Unreal Engine Developer Course</a>
                    </h2>
                    <div className="entry-meta flex align-items-center">
                      <div className="course-author">
                        <a href="#">Mr. John Wick</a>
                      </div>
                      <div className="course-date">Otc 17, 2018</div>
                    </div>
                    {/* .course-date */}
                  </header>
                  {/* .entry-header */}
                  <footer className="entry-footer flex justify-content-between align-items-center">
                    <div className="course-cost">
                      <span className="free-cost">Free</span>
                    </div>
                    {/* .course-cost */}
                    <div className="course-ratings flex justify-content-end align-items-center">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star-o" />
                      <span className="course-ratings-count">(4 votes)</span>
                    </div>
                    {/* .course-ratings */}
                  </footer>
                  {/* .entry-footer */}
                </div>
                {/* .course-content-wrap */}
              </div>
              {/* .course-content */}
            </div>
            {/* .col */}
            <div className="col-12 col-md-6 col-lg-4 px-25">
              <div className="course-content">
                <figure className="course-thumbnail">
                  <a href="#">
                    <img src="publc/Assets/images/5.jpg" alt="" />
                  </a>
                </figure>
                {/* .course-thumbnail */}
                <div className="course-content-wrap">
                  <header className="entry-header">
                    <h2 className="entry-title">
                      <a href="#">
                        Progressive Web Apps (PWA) - The Complete Guide
                      </a>
                    </h2>
                    <div className="entry-meta flex align-items-center">
                      <div className="course-author">
                        <a href="#">Mr. Tom Redder</a>
                      </div>
                      <div className="course-date">Sep 14, 2018</div>
                    </div>
                    {/* .course-date */}
                  </header>
                  {/* .entry-header */}
                  <footer className="entry-footer flex justify-content-between align-items-center">
                    <div className="course-cost">
                      $38 <span className="price-drop">$48</span>
                    </div>
                    {/* .course-cost */}
                    <div className="course-ratings flex justify-content-end align-items-center">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star-o" />
                      <span className="course-ratings-count">(4 votes)</span>
                    </div>
                    {/* .course-ratings */}
                  </footer>
                  {/* .entry-footer */}
                </div>
                {/* .course-content-wrap */}
              </div>
              {/* .course-content */}
            </div>
            <div className="col-12 col-md-6 col-lg-4 px-25">
              <div className="course-content">
                <figure className="course-thumbnail">
                  <a href="#">
                    <img src="publc/Assets/images/6.jpg" alt="" />
                  </a>
                </figure>
                {/* .course-thumbnail */}
                <div className="course-content-wrap">
                  <header className="entry-header">
                    <h2 className="entry-title">
                      <a href="#">Cryptocurrency Investment Course 2018</a>
                    </h2>
                    <div className="entry-meta flex align-items-center">
                      <div className="course-author">
                        <a href="#">Russell Stephens</a>
                      </div>
                      <div className="course-date">Nov 06, 2018</div>
                    </div>
                    {/* .course-date */}
                  </header>
                  {/* .entry-header */}
                  <footer className="entry-footer flex justify-content-between align-items-center">
                    <div className="course-cost">
                      <span className="free-cost">Free</span>
                    </div>
                    {/* .course-cost */}
                    <div className="course-ratings flex justify-content-end align-items-center">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star-o" />
                      <span className="course-ratings-count">(4 votes)</span>
                    </div>
                    {/* .course-ratings */}
                  </footer>
                  {/* .entry-footer */}
                </div>
                {/* .course-content-wrap */}
              </div>
              {/* .course-content */}
            </div>
            <div className="col-12 px-25 flex justify-content-center">
              <a className="btn" href="#">
                view all reviews
              </a>
            </div>
          </div>
        </div>
      </section>
      <div style={{ backgroundColor: "#19c880", padding: "1px", width: "100%" }}></div>
    </>
  )
}

const StyledWrapper = styled.div`
  .bgblue {
    background: linear-gradient(135deg, #fffffff5, #3a4b8a, #ffffff98);
    padding: 1px;
    border-radius: 1.2rem;
    box-shadow: 0px 1rem 1.5rem -0.9rem #000000e1;
    max-width: 300px;
    height: 100%;
    
  }

  .card {
    font-size: 1rem;
    height: 100%;
    color: #ffffff;
    background: linear-gradient(134deg, #d8bf6d79 0%, #19c880 43%, #efdfaadf 40%);
    padding: 1.5rem;
    border-radius: 1.2rem;
  }`;