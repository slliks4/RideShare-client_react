// Pages Import
import HomePage from '../pages/__app/HomePage';
import ActivityPage from '../pages/__app/ActivityPage';
import AccountPage from '../pages/__app/AccountPage';
import BookingStep1 from '../pages/__app/BookingStep1';
import BookingStep2 from '../pages/__app/BookingStep2';
import RideDetailsPage from '../pages/__app/RideDetailsPage';

// Default Function
const AppRoutes = () => ([
  { index: true, element: <HomePage /> },
  { path: "activity", element: <ActivityPage /> },
  { path: "account", element: <AccountPage /> },
  { path: "book-ride/:ride-token", element: <BookingStep1 /> },
  { path: "booking-step2/:ride-token", element: <BookingStep2 /> },
  { path: "ride-details/:ride-token", element: <RideDetailsPage /> },
]);

export default AppRoutes;