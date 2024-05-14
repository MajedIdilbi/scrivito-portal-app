import { ClientError, DataConnectionError, provideDataClass } from 'scrivito'

provideDataClass('ClientErrorBugReport', {
  connection: {
    index: async () => {
      // return new DataConnectionError('ClientErrorBugReport returned with DataConnectionError')

      throw new ClientError(
        'ClientErrorBugReport failed',
        undefined,
        { more: 'details' },
        404,
      )
    },
    get: async () => null,
  },
})
