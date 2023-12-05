export const TestEnum = {
  foo: 'FOO',
  bar: 'BAR'
} as const

type TestEnumKeys = keyof typeof TestEnum
export type TestEnum = (typeof TestEnum)[TestEnumKeys]
