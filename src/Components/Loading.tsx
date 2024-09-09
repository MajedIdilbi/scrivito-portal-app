import { connect } from 'scrivito'

export const Loading = connect(function Loading() {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="hidden-xs hidden-sm">
          <br /> <br />
        </div>
        <div className="skeleton" style={{ minHeight: 200 }}></div>
      </div>

      <div className="hidden-xs hidden-sm">
        <br />
      </div>
    </div>
  )
})
