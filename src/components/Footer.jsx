

export const Footer = () => {
    return (
        <div className="mx-auto mt-auto pb-16 flex flex-col items-center justify-center w-5/6 font-raleway text-white text-base font-medium space-y-5">
            <img src="icons/horizontalRule.svg" alt="horizontal rule" />
            <h4>LETS CONNECT</h4>
            <div className="flex flex-row justify-center items-center gap-4 mx-auto">

                <button aria-label="link to facebook">
                    <img src="icons/IconFacebook.png" alt="facebook icon" />
                </button>
                <button aria-label="link to email">
                    <img src="icons/IconEmail.png" alt="email icon" />
                </button>
                <button aria-label="link to instagram">
                    <img src="icons/IconInstagram.png" alt="instagram icon" />
                </button>
                <button aria-label="link to youtube">
                    <img src="icons/IconYoutube.png" alt="youtube icon" />
                </button>
                <button aria-label="link to telegram">
                    <img src="icons/IconTelegram.png" alt="telegram icon" />
                </button>
            </div>

            <img src="icons/horizontalRule.svg" alt="horizontal rule" className="" />
            <h4>STUDIO VASASTAN</h4>
            <div className="mx-auto flex flex-col justify-center items-center font-sourcesans3 font-normal text-sm space-y-5">
                <div className="adress1">
                    <h5>Hagagatan 16</h5>
                    <h5>113 48 Stockholm</h5>
                </div>

                <div className="adress2">
                    <h5>073-7624047</h5>
                </div>
                <div className="adress3">
                    <h5>info@nordicpoleacademy.com</h5>
                </div>
            </div>

            <img src="icons/horizontalRule.svg" alt="horizontal rule" />
            <h4>ENGLISH</h4>
            <div className="flex flex-row justify-center items-center gap-4">
                <img src="icons/english.png" alt="english language icon" />
                <img src="icons/swedish.png" alt="swedish language icon" />
            </div>

        </div>
    )
}