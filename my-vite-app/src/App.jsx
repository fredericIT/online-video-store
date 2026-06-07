import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PricingPage from "./pages/PricingPage";
import PaymentFinishPage from "./pages/PaymentFinishPage";
import DashboardPage from "./pages/DashboardPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import DiscoverPage from "./pages/DiscoverPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/payment-finish" element={<PaymentFinishPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/movie-detail" element={<MovieDetailPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
      </Routes>
    </BrowserRouter>
  );
}
