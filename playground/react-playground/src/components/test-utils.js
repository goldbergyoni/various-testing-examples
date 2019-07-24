const domTestingLib = require('@testing-library/dom');
const { queryHelpers } = domTestingLib;

export const queryByTestId = queryHelpers.queryByAttribute.bind(
  null,
  'data-test-id'
)
export const queryAllByTestId = queryHelpers.queryAllByAttribute.bind(
  null,
  'data-test-id'
)

export function getAllByTestId(container, id, ...rest) {
  const els = queryAllByTestId(container, id, ...rest)
  if (!els.length) {
    throw queryHelpers.getElementError(
      `Unable to find an element by: [data-test-id="${id}"]`,
      container
    )
  }
  return els
}

export function getByTestId(...args) {
  return queryHelpers.firstResultOrNull(getAllByTestId, ...args)
}

// re-export with overrides
module.exports = {
  ...domTestingLib,
  getByTestId,
  getAllByTestId,
  queryByTestId,
  queryAllByTestId,
}