import { render, screen } from "@testing-library/react";
import { FormItem } from "../FormItem";

describe("FormItem Component", () => {
  test("renders label correctly", () => {
    render(
      <FormItem label="Username">
        <input type="text" />
      </FormItem>
    );

    const label = screen.getByText("Username");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "Username");
  });

  test("renders children content", () => {
    render(
      <FormItem label="Test Label">
        <input type="text" placeholder="Test input" />
      </FormItem>
    );

    const input = screen.getByPlaceholderText("Test input");
    expect(input).toBeInTheDocument();
  });

  test("applies correct CSS classes for styling", () => {
    render(
      <FormItem label="Test">
        <div>Child content</div>
      </FormItem>
    );

    const container = screen.getByText("Test").closest("div");
    expect(container).toHaveClass(
      "flex",
      "flex-col",
      "gap-2",
      "w-full",
      "border-2",
      "border-gray-300",
      "rounded-md",
      "p-2"
    );
  });

  test("displays error message when error prop is provided", () => {
    render(
      <FormItem label="Email" error="Email is required">
        <input type="email" />
      </FormItem>
    );

    const errorMessage = screen.getByText("Email is required");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass("text-red-500", "text-sm");
  });

  test("does not display error message when error prop is not provided", () => {
    render(
      <FormItem label="Email">
        <input type="email" />
      </FormItem>
    );

    const errorMessage = screen.queryByText(/error/i);
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("label has correct styling classes", () => {
    render(
      <FormItem label="Password">
        <input type="password" />
      </FormItem>
    );

    const label = screen.getByText("Password");
    expect(label).toHaveClass("text-sm", "font-medium");
  });

  test("children wrapper has correct styling", () => {
    render(
      <FormItem label="Test">
        <div data-testid="child-wrapper">Child content</div>
      </FormItem>
    );

    const childWrapper = screen.getByTestId("child-wrapper").parentElement;
    expect(childWrapper).toHaveClass("flex", "flex-col", "gap-2", "ml-2");
  });
});
