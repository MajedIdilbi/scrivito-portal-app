import {
  CurrentPage,
  NotFoundErrorPage as ScrivitoNotFoundErrorPage,
} from 'scrivito'
import { HelmetProvider, HelmetServerState } from 'react-helmet-async'

import { CurrentPageMetadata } from './Components/CurrentPageMetadata'
import { ErrorBoundary } from './Components/ErrorBoundary'
import { NotFoundErrorPage } from './Components/NotFoundErrorPage'
import { Toasts } from './Components/Toasts'
import { DesignAdjustments } from './Components/DesignAdjustments'
import { SidebarContextProvider } from './Components/SidebarContext'

export const helmetContext: { helmet?: HelmetServerState } = {}

export function App({
  appWrapperRef,
}: {
  appWrapperRef?: React.RefCallback<HTMLElement>
}) {
  return (
    <HelmetProvider context={helmetContext}>
      <ErrorBoundary>
        <SidebarContextProvider>
          <main style={{ padding: 0 }} ref={appWrapperRef}>
            <CurrentPage />
            <ScrivitoNotFoundErrorPage>
              <NotFoundErrorPage />
            </ScrivitoNotFoundErrorPage>
            <CurrentPageMetadata />
            <Toasts />
            <DesignAdjustments />
          </main>
        </SidebarContextProvider>
      </ErrorBoundary>
    </HelmetProvider>
  )
}
