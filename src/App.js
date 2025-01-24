import React,{Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const Graph = React.lazy(() => import('./Component/pages/graph/graph'));
const Homepage = React.lazy(() => import('./Component/homepage'));
const Aboutus = React.lazy(()=> import('./Component/splite/aboutus/aboutus'))
const Team = React.lazy(()=> import('./Component/splite/team/ourteam'))
const Contact = React.lazy(()=> import('./Component/home/contact'))
const SPStrategy = React.lazy(()=> import('./Component/splite/strategy/spstrategy'))
const Strategy = React.lazy(()=> import('./Component/splite/strategy/Strategy'))

const Register = React.lazy(()=> import('./Component/splite/strategyRegister/register'))
const Blog = React.lazy(()=> import('./Component/blog/blog'))
const SingleBlog = React.lazy(()=> import('./Component/blog/singleblog/singleblog'))
const Blogone = React.lazy(()=> import('./Component/defaultblog/blogone'))
const Blogtwo = React.lazy(()=> import('./Component/defaultblog/blogtwo'))
const Blogthree = React.lazy(()=> import('./Component/defaultblog/blogthree'))
const DefaultBlog = React.lazy(()=> import('./Component/defaultblog/blogpage'))
const B2c = React.lazy(()=> import('./Component/splite/Ouroffering/B2c'))
const B2b = React.lazy(()=> import('./Component/splite/Ouroffering/B2b'))
const DataInnovation = React.lazy(()=> import('./Component/splite/DataInnovation/DataInnovation'))
const Equities2 = React.lazy(()=> import('./Component/splite/strategy/Equities2'))
const CryptoTrend_Capturing = React.lazy(()=> import('./Component/splite/strategy/Crypto/CryptoTrendCapturing'))
const Crypto_Market_making_Strategy = React.lazy(()=> import('./Component/splite/strategy/Crypto/CryptoMarket makingStrategy'))
const Commodities_Long = React.lazy(()=> import('./Component/splite/strategy/Commodities/ShortStrategy'))
const Reversal_Pattern = React.lazy(()=> import('./Component/splite/strategy/Commodities/ReversalPattern'))
const Forex_NN_GA = React.lazy(()=> import('./Component/splite/strategy/Forex/Forex_NN_GA'))
const Garch_Vol_Strategy = React.lazy(()=> import('./Component/splite/strategy/Options/GarchVolStrategy'))
const Intra_day_SPY_Options = React.lazy(()=> import('./Component/splite/strategy/Options/IntradaySPYOptions'))
const Index_Options= React.lazy(()=> import('./Component/splite/strategy/Options/IndexOptions'))
const Options_Long_Straddle = React.lazy(()=> import('./Component/splite/strategy/Options/OptionsLongStraddle'))
const Options_Short_and_Long_Straddle = React.lazy(()=> import('./Component/splite/strategy/Options/OptionsShortandLongStraddle'))
const Nifty500Equities = React.lazy(()=> import('./Component/splite/strategy/Equitiesind/Nifty500Equities'))
const HighFrequencyQuoting = React.lazy(()=> import('./Component/splite/strategy/Equitiesind/HighFrequencyQuoting'))
const BankNiftyPrecision = React.lazy(()=> import('./Component/splite/strategy/Optionsind/BankNiftyPrecision'))
const ExpiryConvergence = React.lazy(()=> import('./Component/splite/strategy/Optionsind/ExpiryConvergence'))
const HighFrequencyOptions = React.lazy(()=> import('./Component/splite/strategy/Optionsind/HighFrequencyOptions'))
















const App = () => {
//     var myValue = localStorage.getItem('isLoggedIn');
// useEffect(() => {
//     var pathname = window.location.pathname;
//     if (pathname !== "/" && !myValue) {
//         window.location.href = '/';
//     } else if (myValue &&  pathname !== "/optimized_sp" &&  pathname !== "/backtesting_results") {
//         window.location.href = '/optimized_sp';
//     }
// }, [myValue]); 

    return (
        <BrowserRouter>
        <Suspense>
                    <Routes>
                        <Route path="/"
                            element={<Homepage />} />
                             {/* <Route path="/aboutus"
                            element={<Aboutus />} /> */}
                             <Route path="/team"
                            element={<Team />} />
                              <Route path="/contact"
                            element={<Contact />} />

                             <Route path="/register"
                            element={<Register />} />
                                   {/* <Route path="/blog"
                            element={<Blog />} /> 
                                   <Route path="/singleblog"
                            element={<SingleBlog />} />  */}
                                <Route path="/Algorithmic_Trading"
                            element={<Blogone />} />
                                <Route path="/blog"
                            element={<DefaultBlog />} />
                               <Route path="/Backtesting"
                            element={<Blogtwo />} />
                               <Route path="/long-straddle"
                            element={<Blogthree />} />
                            <Route path="/Individual_Traders"
                            element={<B2c />} />
                            <Route path="/Institutional_Investors"
                            element={<B2b />} />
                            <Route path="/Strategies"
                            element={<Strategy />} />
                               <Route path="/Data-Innovation"
                            element={<DataInnovation />} />
                              <Route path="/sp-strategy"
                            element={<SPStrategy />} />
                              <Route path="/Equities-2"
                            element={<Equities2 />} />
                               <Route path="/Crypto_Trend_Capturing"
                            element={<CryptoTrend_Capturing />} />
                            <Route path="/Crypto_Market_making_Strategy"
                            element={<Crypto_Market_making_Strategy />} />
                             <Route path="/Commodities_Market_Making"
                            element={<Commodities_Long />} />
                             <Route path="/Reversal_Pattern"
                            element={<Reversal_Pattern />} />

                          <Route path="/Forex_NN_GA"
                            element={<Forex_NN_GA />} />

                             <Route path="/Garch_Vol_Strategy"
                            element={<Garch_Vol_Strategy />} />

                               <Route path="/Intra_day_SPY_Options"
                            element={<Intra_day_SPY_Options />} />

                             <Route path="/Index_Options"
                            element={<Index_Options />} />

                               <Route path="/Options_Long_Straddle"
                            element={<Options_Long_Straddle />} />
                                   <Route path="/Nifty_500_Equities"
                            element={<Nifty500Equities />} />
                            <Route path="/High_Frequency_Quoting"
                            element={<HighFrequencyQuoting />} />
                             <Route path="/BankNiftyPrecision"
                            element={<BankNiftyPrecision />} />
                             <Route path="/ExpiryConvergence"
                            element={<ExpiryConvergence />} />
                             <Route path="/HighFrequencyOptions"
                            element={<HighFrequencyOptions />} />
                            

                             {/* <Route path="/Garch_Volatility"
                            element={<Options_Short_and_Long_Straddle />} /> */}

                            




                    </Routes>
                    
                    </Suspense>  
        </BrowserRouter>
    );
};

export default App;
