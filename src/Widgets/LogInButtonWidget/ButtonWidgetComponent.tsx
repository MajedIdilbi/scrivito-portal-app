import {
  ensureUserIsLoggedIn,
  isInPlaceEditingActive,
  provideComponent,
  WidgetTag,
} from 'scrivito'
import { alignmentClassNameWithBlock } from '../../utils/alignmentClassName'
import { LoginButtonWidget } from './LogInButtonWidgetClass'
import { buttonSizeClassName } from '../../utils/buttonSizeClassName'

provideComponent(LoginButtonWidget, ({ widget }) => {
  const title = widget.get('title')

  const buttonClassNames = ['btn']
  buttonClassNames.push(widget.get('buttonColor') || 'btn-primary')

  const buttonSize = buttonSizeClassName(widget.get('buttonSize'))
  if (buttonSize) buttonClassNames.push(buttonSize)

  return (
    <WidgetTag className={alignmentClassNameWithBlock(widget.get('alignment'))}>
      <button
        className={buttonClassNames.join(' ')}
        onClick={ensureUserIsLoggedIn}
      >
        {!title && isInPlaceEditingActive()
          ? 'Provide the button title in the widget properties.'
          : title}
      </button>
    </WidgetTag>
  )
})
