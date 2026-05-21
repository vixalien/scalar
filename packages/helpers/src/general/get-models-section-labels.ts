export type ModelsSectionLabel = 'models' | 'schemas'

/** User-facing labels for the components.schemas section. */
export const getModelsSectionLabels = (label: ModelsSectionLabel = 'models') => ({
  section: label === 'schemas' ? 'Schemas' : 'Models',
  singular: label === 'schemas' ? 'Schema' : 'Model',
})
