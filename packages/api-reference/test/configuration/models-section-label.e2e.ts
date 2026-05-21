import { expect, test } from '@playwright/test'
import { serveExample } from '@test/utils/serve-example'

test.describe('modelsSectionLabel', () => {
  test('shows Schemas heading when set to schemas', async ({ page }) => {
    const example = await serveExample({ modelsSectionLabel: 'schemas' })

    await page.goto(`${example}#models`)

    await expect(page.getByRole('heading', { name: 'Schemas', level: 2 })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Models', level: 2 })).not.toBeVisible()
  })

  test('shows Models heading by default', async ({ page }) => {
    const example = await serveExample()

    await page.goto(`${example}#models`)

    await expect(page.getByRole('heading', { name: 'Models', level: 2 })).toBeVisible()
  })
})
