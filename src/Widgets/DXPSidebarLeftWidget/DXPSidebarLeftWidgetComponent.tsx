import { useRef } from 'react'

import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap'
import {
  provideComponent,
  ChildListTag,
  LinkTag,
  isInPlaceEditingActive,
} from 'scrivito'

import { useSidebarContext } from '@/Components/SidebarContext'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { objTitle } from '@/utils/objTitle'
import { DXPSidebarLeftWidget } from './DXPSidebarLeftWidgetClass'

provideComponent(DXPSidebarLeftWidget, ({ widget }) => {
  const page = widget.obj()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const { isOpen, closeSidebar } = useSidebarContext()

  useOnClickOutside({
    elementRef: sidebarRef,
    onClick: () => {
      if (isOpen) {
        closeSidebar()
      }
    },
  })

  return (
    <Navbar>
      {isInPlaceEditingActive() ? <div className="mb-3" /> : null}
      <Navbar.Collapse id="nav-sidebar">
        <ChildListTag
          tag="span"
          parent={page}
          renderChild={(child) => {
            return (
              <Nav.Link
                className="jr-buttonbar"
                style={{ padding: 0 }}
                as={LinkTag}
                eventKey={`VerticalNavigationWidget-${widget.id()}-${page.id()}-${child.id()}`}
                key={`VerticalNavigationWidget-${widget.id()}-${page.id()}-${child.id()}`}
                to={child}
                onClick={closeSidebar}
              >
                <i className={`jr-icon jr-icon-${child.get('linkIcon')}`} />
                <span className="label">{objTitle(child)}</span>
              </Nav.Link>
            )
          }}
        />
      </Navbar.Collapse>
    </Navbar>
  )
})
