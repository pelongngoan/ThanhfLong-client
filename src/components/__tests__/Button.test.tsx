import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

describe("Button Component", () => {
  test("renders button with children text", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  test("applies correct CSS classes for styling", () => {
    render(<Button>Test Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "bg-white",
      "border-2",
      "border-b-black",
      "text-black",
      "px-4",
      "py-2",
      "rounded-md",
      "hover:bg-gray-200"
    );
  });

  test("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("passes through HTML button attributes", () => {
    render(
      <Button disabled type="submit">
        Submit
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("type", "submit");
  });

  test("renders different children content correctly", () => {
    const { rerender } = render(<Button>Original Text</Button>);
    expect(screen.getByText("Original Text")).toBeInTheDocument();

    rerender(<Button>Updated Text</Button>);
    expect(screen.getByText("Updated Text")).toBeInTheDocument();
    expect(screen.queryByText("Original Text")).not.toBeInTheDocument();
  });
});
