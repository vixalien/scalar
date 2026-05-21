import { describe, expect, it } from 'vitest'

import { getModelsSectionLabels } from './get-models-section-labels'

describe('getModelsSectionLabels', () => {
  it('returns Models labels by default', () => {
    expect(getModelsSectionLabels()).toEqual({
      section: 'Models',
      singular: 'Model',
    })
  })

  it('returns Schemas labels when configured', () => {
    expect(getModelsSectionLabels('schemas')).toEqual({
      section: 'Schemas',
      singular: 'Schema',
    })
  })
})
