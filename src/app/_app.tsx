import { Provider } from 'react-redux';
import { AppProps } from 'next/app'; // Import the correct type for page props
import store from './redux/store'; // Path to your Redux store

// Properly type the `MyApp` component
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;