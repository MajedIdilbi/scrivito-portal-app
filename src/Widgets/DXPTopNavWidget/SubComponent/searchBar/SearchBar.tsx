import React from 'react'

import { debounce } from 'lodash'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'

export const SearchBar: React.FC = () => {
  const ref = React.useRef(null)
  const [showResult, setShowResult] = React.useState(false)
  const [searchKey, setSearchKey] = React.useState('')

  const search = (input: string) => {
    console.log(`Searching for: ${input}`)
  }

  const debouncer = React.useMemo(
    () => debounce((value) => search(value), 1000),
    [search],
  )

  useOnClickOutside({ elementRef: ref, onClick: () => setShowResult(false) })

  return (
    <>
      <div ref={ref} className="jr-searchbar mx-auto">
        <div className="input-group input-group-search">
          <input
            aria-label={'Search bar'}
            name="search-bar"
            type="text"
            placeholder={'Search ...'}
            className="form-control"
            onChange={({ target: { value } }) => {
              debouncer(value)
              setSearchKey(value)
            }}
            onFocus={() => setShowResult(true)}
          />
          <button className="btn" type="submit">
            <i className="jr-icon jr-icon-lens" />
          </button>
        </div>
      </div>
    </>
  )
}
