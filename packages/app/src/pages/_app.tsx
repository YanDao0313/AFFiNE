import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../../public/globals.css';
import '../../public/variable.css';
import './temporary.css';
import { EditorProvider } from '@/components/editor-provider';
import { ModalProvider } from '@/components/global-modal-provider';
import { Logger } from '@toeverything/pathfinder-logger';

import '@fontsource/space-mono';
import '@fontsource/poppins';
import '../utils/print-build-info';

const ThemeProvider = dynamic(() => import('@/styles/themeProvider'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Logger />
      <EditorProvider>
        <ThemeProvider>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ThemeProvider>
      </EditorProvider>
    </>
  );
}

export default MyApp;
