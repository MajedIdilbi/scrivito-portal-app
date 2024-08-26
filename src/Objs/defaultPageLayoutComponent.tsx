import {
  connect,
  ContentTag,
  CurrentPage,
  Obj,
  provideLayoutComponent,
} from 'scrivito'
import classnames from 'classnames'
import { useSidebarContext } from '@/Components/SidebarContext'

type ObjClass = Parameters<typeof provideLayoutComponent>[0]

export function provideDefaultPageLayoutComponent(objClass: ObjClass) {
  provideLayoutComponent(objClass, ({ page }) => {
    const showLeftSidebar = !!page.get('layoutShowLeftSidebar')
    const showRightSidebar = !!page.get('layoutShowRightSidebar')
    const showSidebar = showLeftSidebar || showRightSidebar

    return (
      <>
        {!!page.get('layoutShowHeader') && (
          <ContentTag tag="header" content={page} attribute="layoutHeader" />
        )}

        <BackgroundWrapper
          backgroundColor={page.get('layoutMainBackgroundColor')}
        >
          {showSidebar ? <SidebarLayout page={page} /> : <CurrentPage />}
        </BackgroundWrapper>

        {!!page.get('layoutShowFooter') && (
          <ContentTag tag="footer" content={page} attribute="layoutFooter" />
        )}
      </>
    )
  })
}

const BackgroundWrapper = connect(function BackgroundWrapper({
  backgroundColor,
  children,
}: {
  children: React.ReactNode
  backgroundColor?: unknown
}) {
  if (typeof backgroundColor !== 'string') return children
  if (backgroundColor === 'transparent') return children

  return <section className={`bg-${backgroundColor}`}>{children}</section>
})

const SidebarLayout = connect(function SidebarLayout({ page }: { page: Obj }) {
  const { isOpen } = useSidebarContext()
  return (
    <div
      className={classnames('jr-main-wrapper', {
        'jr-sidebar-left-show': isOpen,
      })}
    >
      <div className="jr-sidebar-left">
        <ContentTag content={page} attribute="layoutLeftSidebar" />
      </div>
      <main>
        <div className="container-fluid">
          <CurrentPage />
        </div>
      </main>
    </div>
  )
})
