import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head lang="en">
                    <link rel="shortcut icon" href=".\nficon2016.ico"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

// import * as React from 'react';
// import Document, { Html, Head, Main, NextScript} from 'next/document';
// import createEmotionCache from '../utils/createEmotionCache';
// import createEmotionServer from '@emotion/server/types/create-instance';
// import theme from '../utils/theme'

// export default class MyDocument extends Document {
//     render () {
//         return (
//             <Html lang="en">
//                 <Head>
//                     <meta name="theme-color" content={theme.palette.primary.main} />
//                     <link
//                     rel="stylesheet"
//                     href="https:fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
//                     />
//                 </Head>
//                 <body>
//                     <Main />
//                     <NextScript />
//                 </body>
//             </Html>
//         )
//     }
// }

// MyDocument.getInitialProps = async (ctx) => {
//     const originalRenderPage = ctx.renderPage;
//     const cache = createEmotionCache();
//     const { extractCriticalToChunks } = createEmotionServer(cache);

//     ctx.renderPage = () =>
//     originalRenderPage({
//         enhanceApp: (App) =>
//         function enhanceApp(props) {
//             return <App emotionCache={cache} {...props} />
//         },
//     });

//     const initialProps = await Document.getInitialProps(ctx);
//     const emotionStyles = extractCriticalToChunks(initialProps.html);
//     const emotionStyleTags = emotionStyles.styles.map((style) => (
//         <style data-emotion={`${style.key} ${style.ids.join(' ')}`}
//         key={style.key}
//         dangerouslySetInnerHTML={{ __html: style.css }}
//         />
//     ));
    
//     return {
//         ...initialProps,
//         styles: [...React.Children.toArray(initial.Props.Styles), ...emotionStyleTags],
//     };
// };