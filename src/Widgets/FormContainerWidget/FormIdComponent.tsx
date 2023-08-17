import { connect, uiContext } from 'scrivito'
import { ContentProperty } from '../../Components/ScrivitoExtensions/ContentProperty'

export const FormIdComponent = connect(({ widget }) => {
  const formSubmissionsHref = widget.get('formId')
    ? `https://edit.neoletter.com/i/${
        import.meta.env.SCRIVITO_TENANT
      }/forms/${widget.get('formId')}`
    : undefined
  const uiContextObj = uiContext()
  if (!uiContextObj) return null

  return (
    <div className={`scrivito_${uiContextObj.theme}`}>
      <div className="scrivito_detail_content">
        <div className="attribute_form_id_item">
          <ContentProperty
            content={widget}
            attribute="formId"
            title="Form ID"
            description="This ID identifies the form in Neoletter."
          />

          <a
            className={`scrivito_button ${
              formSubmissionsHref ? 'scrivito_blue' : 'scrivito_disabled'
            }`}
            href={formSubmissionsHref}
            target="_blank"
            rel="noreferrer"
          >
            View submissions
          </a>
        </div>
      </div>
    </div>
  )
})
