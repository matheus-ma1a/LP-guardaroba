import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Obrigado from './Obrigado.jsx'
import { FBPixelScript, FBPixelProvider } from '@rivercode/facebook-conversion-api-nextjs/components';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/obrigado",
    element: <Obrigado />
  },
])

function initializeFacebookPixel() {
  if (!window.fbq) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1442714005903162'); // Replace 'YOUR_PIXEL_ID' with your Pixel ID
    fbq('track', 'PageView');
  } else {
    console.log("Facebook Pixel is already initialized.");
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FBPixelScript /> */}
    {/* <FBPixelProvider> */}
    {initializeFacebookPixel()}
      <RouterProvider router={router} />
    {/* </FBPixelProvider> */}
  </React.StrictMode>,
)
