import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

export const renderWithRouter = (component, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test', route)

  return render(component, {wrapper: MemoryRouter})
}