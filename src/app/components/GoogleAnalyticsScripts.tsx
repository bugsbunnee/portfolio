import React from 'react';
import Script from "next/script";

const GoogleAnalyticsScript: React.FC = () => {
    return ( 
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J0C3BF950E" />
            <Script id="google-analytics">
                {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-J0C3BF950E');`}
            </Script>
        </>
     );
}
 
export default GoogleAnalyticsScript;