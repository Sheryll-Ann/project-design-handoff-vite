import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { FrequentlyAskedQuestions } from "../components/reusableComponents/FrequentlyAskedQuestions"
import { GoogleMaps } from "../components/reusableComponents/GoogleMaps"
import { OpeningHours } from "../components/reusableComponents/OpeningHours"

export const InfoPage = () => {
    return (
        <div>
            <div className="min-h-screen relative bg-gradient-to-b from-blue-grey to-grey">
                <Header />
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <OpeningHours />
                    </div>
                    <div>
                        <GoogleMaps />
                    </div>
                    <div>
                        <FrequentlyAskedQuestions />
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}
