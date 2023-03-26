import { describe, expect, it, vi } from 'vitest'

describe('test main', () => {

  // normal work
  it('getUserMsg mock success', async function() {
    vi.resetAllMocks()
    vi.doMock('@/user/index', async () => {
      return {
        default: function() {
          return 'mock_success'
        }
      }
    })
    const { getUserMsg } = await import('@/index')
    expect(getUserMsg()).toBe('mock_success')
    vi.doUnmock('@/user/index')
  })

  // not working
  it('getUserMsg mock fail', async function() {
    vi.resetAllMocks()
    vi.doMock('@/user/index', async () => {
      return {
        default: function() {
          return 'mock_fail'
        }
      }
    })
    const { getUserMsg } = await import('@/index')
    expect(getUserMsg()).toBe('mock_fail')
    vi.doUnmock('@/user/index')
  })

  // not working
  it('getUserMsg real', async function() {
    vi.resetAllMocks()
    const { getUserMsg } = await import('@/index')
    expect(getUserMsg()).toBe('hello user')
  })
})