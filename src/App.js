import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Homepage/home";
import Teampage from "./Pages/Teampage/Teampage";
import Contributions from "./Pages/Contributions/Contributions";

import EditionsCardPage from "./Pages/Editions/EditionsCardPage";
import Gallery from "./Pages/Gallery/Gallery";
import Edition from "./Pages/Editions/Edition";
import Loader from "./Pages/Homepage/loader";
import "./App.css";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the timeout duration as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            {loading ? (
                <Loader />
            ) : (
                <Routes>
                    <Route path="/" element={<Home />}></Route>
{/* {!isPhone && <Route path="/editions" element={<EditionsDesktop/>}></Route>}
{!isPhone && <Route path="/editions" element={<EditionsDesktop/>}></Route>} */}
                    <Route path="/editions" element={<Edition />}></Route>
                    <Route
                        path="/editions/all"
                        element={<EditionsCardPage />}
                    ></Route>
                    <Route
                        path="/contributions"
                        element={<Contributions />}
                    ></Route>
                    <Route path="/team" element={<Teampage />}></Route>
                    <Route path="/gallery" element={<Gallery />}></Route>
                </Routes>
            )}
        </Router>
    );
}

export default App;
