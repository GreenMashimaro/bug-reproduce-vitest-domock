import { getUserMsg } from '@/index'
import { describe, expect, it, vi } from 'vitest'

describe('test main', () => {

  // not working
  it('getUserMsg mock success', async function() {
    vi.doMock('@/user/index', async () => {
      return {
        default: function() {
          return 'mock_success'
        }
      }
    })
    const { getUserMsg } = await import('@/index')
    expect(getUserMsg()).toBe('mock1')
  })

  // not working
  it('getUserMsg mock fail', async function() {
    vi.doMock('@/user/index', async () => {
      return {
        default: function() {
          return 'mock_fail'
        }
      }
    })
    const { getUserMsg } = await import('@/index')
    expect(getUserMsg()).toBe('mock1')
  })

  // normal work
  it('getUserMsg real', async function() {
    expect(getUserMsg()).toBe('hello user')
  })
})